// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

library ArrayExt {
    function inArray(address[] memory arr, address el) internal pure returns(bool) {
        for(uint i = 0; i < arr.length; i++) {
            if(arr[i] == el) {
                return true;
            }
        }

        return false;
    }
}

contract Escrow {
    using ArrayExt for address[];

    address owner;
    uint public constant RATE = 5; // 5%

    enum ProjectStatus { Created, Started, Submitted, Paid, Disputed, Refunded }

    struct Project {
        string title;
        string description;
        address customer;
        uint price;
        address[] candidates;
        address assignee;
        ProjectStatus status;
    }

    Project[] public projects;
    event ProjectAdded(
      uint indexed id, uint price, address indexed customer, string indexed title, string titleRef
    );
    event OfferSent(uint indexed id, address indexed candidate);
    event AssigneeChosen(uint indexed id, address indexed assignee);
    event ProjectSubmitted(uint indexed id);
    event FundsUnlocked(uint indexed id, uint price);
    event ProjectCancelled(uint indexed id);
    event DisputeOpened(uint indexed id, address indexed initiator);
    event ProjectRefunded(uint indexed id, uint price);

    constructor() {
        owner = msg.sender;
    }

    function addProject(string memory _title, string memory _description) external payable {
        require(msg.value > 0, "invalid sum!");
        Project memory newProject = Project({
            title: _title,
            description: _description,
            customer: msg.sender,
            price: (msg.value - (msg.value * RATE) / 100),
            candidates: new address[](0),
            assignee: address(0),
            status: ProjectStatus.Created
        });

        projects.push(newProject);

        emit ProjectAdded(
          projects.length - 1,
          newProject.price,
          msg.sender,
          _title,
          _title
        );
    }

    function cancelProject(uint id) external {
        Project memory cProject = projects[id];
        require(
          cProject.status == ProjectStatus.Created && cProject.assignee == address(0),
          "invalid status"
        );
        
        delete projects[id];

        payable(cProject.customer).transfer(cProject.price);

        emit ProjectCancelled(id);
    }

    function sendOffer(uint id) external {
        Project storage cProject = projects[id];
        require(msg.sender != cProject.customer, "you are a customer!");
        require(
          cProject.status == ProjectStatus.Created && cProject.assignee == address(0),
          "assignee chosen!"
        );
        require(!cProject.candidates.inArray(msg.sender), "already added");

        cProject.candidates.push(msg.sender);

        emit OfferSent(id, msg.sender);
    }

    function chooseAssignee(uint id, uint personId) external {
        Project storage cProject = projects[id];
        require(msg.sender == cProject.customer, "you are not a customer");
        require(
          cProject.status == ProjectStatus.Created && cProject.assignee == address(0),
          "assignee chosen!"
        );

        cProject.assignee = cProject.candidates[personId];
        cProject.status = ProjectStatus.Started;

        emit AssigneeChosen(id, cProject.candidates[personId]);
    }

    function submitProject(uint id) external {
        Project storage cProject = projects[id];
        require(msg.sender == cProject.assignee, "you are not an assignee");
        require(cProject.status == ProjectStatus.Started, "invalid status");

        cProject.status = ProjectStatus.Submitted;

        emit ProjectSubmitted(id);
    }

    function unlockFunds(uint id) external {
        Project storage cProject = projects[id];
        require(msg.sender == cProject.customer, "you are not a customer");
        require(cProject.status == ProjectStatus.Submitted, "invalid status");

        cProject.status = ProjectStatus.Paid;
        payable(cProject.assignee).transfer(cProject.price);

        emit FundsUnlocked(id, cProject.price);
    }

    function openDispute(uint id) external {
        Project storage cProject = projects[id];
        require(
          msg.sender == cProject.customer || msg.sender == cProject.assignee,
          "you are not a customer/assignee"
        );
        require(
          cProject.status != ProjectStatus.Started &&
            cProject.status != ProjectStatus.Disputed &&
            cProject.status != ProjectStatus.Refunded,
          "invalid status!"
        );

        cProject.status = ProjectStatus.Disputed;

        emit DisputeOpened(id, msg.sender);
    }

    function refund(uint id, bool customer) external {
        require(msg.sender == owner, "not an owner!");
        Project storage cProject = projects[id];
        require(
          cProject.status != ProjectStatus.Paid && cProject.status != ProjectStatus.Refunded,
        "invalid status");

        address payable to;

        cProject.status = ProjectStatus.Refunded;

        if(customer == true) {
            to = payable(cProject.customer);
        } else {
            to = payable(cProject.assignee);
        }
        to.transfer(cProject.price);

        emit ProjectRefunded(id, cProject.price);
    }
}