const h1 = document.querySelector('.data')
const data = new Date();

h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle:'full'});