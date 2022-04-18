const URL_API = 'https://61f4662310f0f7001768c90f.mockapi.io/api/airplane' //adress of server

const getData = () =>
  fetch(URL_API).then((response) => {
    if (response.ok) {
      return response.json()
    }
    throw new Error(response.status)
  })
// .then((data) => console.log(data)) //вызывает функцию когда метод вернется
//.catch((err) => {console.error(err)})//вызывает функцию когда ошибка..
//функция фетч работает с запросами отправки и принятия запросов

//console.log(getData()) //получаем промис - обещание, а пендинг - ожидание

export default getData
