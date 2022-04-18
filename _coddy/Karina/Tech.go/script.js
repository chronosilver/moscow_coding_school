class ImgComponent {
    constructor(groupImg, srcImg, srcToProject, size = 'short', float = 'left') { // передаем аргументы: группа изображений, ссылка на изображение, ссылка на проект, размер картинки по заранее созданным типам(short, long, high), значение свойства float;

        this.render() //создаем корневой DOM элемент

        this.elem.className = `img_gallery ${size}_box`; // присваиваем классы для картинок, и также класс описывающий его тип
        this.elem.dataset.group = `${groupImg}` // Присваиваем data-атрибут 
        this.elem.href = `./articles/${srcToProject}` // Присваиваем ссылку на проект, на который ведет картинка
        this.elem.style.float = float; // Присваиваем свойство float
        this.elem.innerHTML = `
        <img src="img/${srcImg}" alt="gallery_img">
        ` // Вкладываем внутрь элемента картинку

        this.appendElem() // Добавляем элемент на страницу
        this.onClick(); // Добавляем на элемент событие onclick
    } 
    render = () => { 
        this.elem = document.createElement('div') //создаем метод, создающий корневой DOM элемент нашей картинки.
    }
    appendElem = () => { // Создаем метод, для добавления элемента на страницу
        document.querySelector('.gallery').append(this.elem);
    }
    onClick = () => { // Создаем метод для прослушки события onclick элемента, для перехода по ссылке.
        this.elem.addEventListener('click', () => {
            window.open(this.elem.href);
        })
}
}