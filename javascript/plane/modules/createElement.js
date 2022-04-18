const createElement = (tag, atribute) => {
  const element = document.createElement(tag)
  Object.assign(element, atribute) //соединяет объекты в один
  return element
}
/* функция получает 2 параметра. 
создается переменная э, а в ней - команда createElement 
с полученным параметром (входящий элемент создается)
Дальше этот элемент соединяется с атрибутом, который так же получается

ускоряем письмо
*/
export default createElement
