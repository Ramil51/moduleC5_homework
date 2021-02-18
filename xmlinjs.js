/*Подготовка данных*/
 
//Создание экземпляра DOMParser.Он позволит нам парсить XML.
//const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const parser = new DOMParser();
//console.log('parser',parser)

 //XML,который будем парсить
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student1>
    <name1 lang1="ru">
      <first1>Петр</first1>
      <second1>Петров</second1>
    </name1>
    <age1>58</age1>
    <prof1>driver</prof1>
  </student1>
</list>
`; 


    /* Этап второй.Получение данных.*/
//Парсинг XML

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

//Получение всех DOM - kod

const listNode = xmlDOM.querySelector("list");
const studentNode = xmlDOM.querySelector("list");
const nameNode = studentNode.querySelector("name");
const fistNode = nameNode.querySelector("first");
const secondNode = nameNode.querySelector("second");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");
const studentNode1 = xmlDOM.querySelector("list");
const nameNode1 = studentNode1.querySelector("name1");
const fistNode1 = nameNode1.querySelector("first1");
const secondNode1 = nameNode1.querySelector("second1");
const ageNode1 = studentNode1.querySelector("age1");
const profNode1 = studentNode1.querySelector("prof1");

//Получение атрибутов.
const langAttr = nameNode.getAttribute('lang');
const langAttr1 = nameNode1.getAttribute('lang1');
    /* Запись данных в результирующий объект*/

const result = {list :[{
name: nameNode.textContent,
lang: langAttr,
age: Number(ageNode.textContent),
prof: profNode.textContent,
}, 
{

 name1: nameNode1.textContent,
lang1: langAttr1,
age1: Number(ageNode1.textContent),
prof1: profNode1.textContent,  
}]};
console.log('result =',result);