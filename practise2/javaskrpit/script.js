//DOM = document object model
console.log(document);
const button = document.querySelector('#click') ;
const input = document.querySelector(".myinput");
const h1 = document.getElementById("h1");
console.log(input.value);
console.log(h1.textContent);
// h1.innerHTML = "<span class+'smething'>;lkl;kdfg;lksjdgf;lksdf;lkfdg</span>"
h1.textContent = 'lazbe';
h1.className = "nex-class";

console.log(h1);
console.log(button);
console.log(input);