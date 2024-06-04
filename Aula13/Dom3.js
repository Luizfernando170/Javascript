//getElementById - elemento por id
let valor1 = window.document.getElementById('elemento1')
valor1.style.color = 'yellow'
//getElementByClassName - elemento pelo nome de classe [0]
let valor2 = document.getElementsByClassName('elemento2')[0]
valor2.style.color = 'green'
//getElementByTagName - elemento por nome da tag <li>
let valor3 = document.getElementsByTagName('li')[1]
valor3.innerText = 'troquei o valor'

let valor4 = window.document.querySelector('p1') 
valor4.innerHTML = 'Aula de Dom3'

let valor5 = window.document.querySelectorAll('.p2')[0]
valor5.style.color = 'red'