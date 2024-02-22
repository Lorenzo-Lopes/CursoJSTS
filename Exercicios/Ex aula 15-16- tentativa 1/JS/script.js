let num = Number(prompt('Digite seu numero.'));
document.body.innerHTML = `<h1>O numero digitado foi: ${num}</h1><br>`;
document.body.innerHTML += `Raiz Quadrada: ${Math.sqrt(num)}<br>`;
document.body.innerHTML += `${num} é inteiro: ${Number.isInteger(num)}<br>`;
document.body.innerHTML += `É NaN: ${Number.isNaN(num)}<br>`;
document.body.innerHTML += `Arredondado para baixo: ${Math.floor(num)}<br>`;
document.body.innerHTML += `Arredondado para cima: ${Math.ceil(num)}<br>`;
document.body.innerHTML += `Com duas casas decimais: ${num.toFixed(2)}`;