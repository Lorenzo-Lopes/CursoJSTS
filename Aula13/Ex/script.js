let nome = prompt('Digite seu nome completo.')

document.body.innerHTML += `O seu nome é ${nome} <br>`
document.body.innerHTML += `Seu nome com letras maiusculas: ${nome.toUpperCase()}<br>`
document.body.innerHTML += `Seu nome com letras minusculas:${nome.toLocaleLowerCase()}<br>`
document.body.innerHTML += `A palavras do seu nome são: ${nome.split(' ')}<br>`
nome= nome.replace(/ /g,'');
document.body.innerHTML += `Seu nome tem ${nome.length} letras<br>`
document.body.innerHTML += `A segunda lentra do seu nome é:${nome.charAt(1)} <br>`
document.body.innerHTML += `Qual o primeiro indice da letra O no seu nome: ${nome.indexOf('o')+1}<br>`
document.body.innerHTML += `Qual o ultimo indice da letra O no seu nome: ${nome.lastIndexOf('o')+1} <br>`
document.body.innerHTML += `as ultimas 3 letra do seu nome são: ${nome.slice(-3)}<br>`
