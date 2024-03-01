//CONCATENANDO ARRAYS

const a1 = [1,2,3,4,5]
const a2 = [6,7,8,9,10]

//const concatenado = a1.concat(a2,[11,12,13,14,15], 'Tudo concatenado.')// funcção concat

const concatenado = [...a1,'concatenado',...a2,...[11,12,13,14,15]]

console.log(a1, a2)
console.log(concatenado)