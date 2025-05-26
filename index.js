// Write your code below:
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);
const h3 = document.createElement('h3');
const data = document.createTextNode("Buy high quality organic fruits online");
h3.appendChild(data);
h3.style.fontStyle = 'italic';
mainHeading.appendChild(h3);

const divs = document.querySelectorAll('div');
const div2 = divs[1];
const p = document.createElement('p');
const pData = document.createTextNode('Total fruits: 4');
p.appendChild(pData);
const ul = document.querySelector('.fruits');
// div2.insertBefore(p, ul);
// p.id = "fruits-total";
