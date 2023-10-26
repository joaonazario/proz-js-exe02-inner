let titulo = document.getElementById('titulo');
titulo.innerText = `Exercicio innerText / innerHTML`;
;

let listaNaoOrdenada = document.querySelector('ul');
listaNaoOrdenada.innerHTML = `
<li>Ensino</li>
<li>Aprendizado</li>
<li>Formação</li>`;

let link = document.querySelector('a');
link.innerText = `O futuro é agora, seja Proz.`;

let listaOrdenada = document.querySelector('ol');
listaOrdenada.innerHTML = `
<li><a href="https://www.w3schools.com/">W3Schools</a></li>
<li><a href="https://developer.mozilla.org/">Developer Mozilla</a></li>
<li><a href="https://fonts.google.com/">Fonts Google</a></li>`;
