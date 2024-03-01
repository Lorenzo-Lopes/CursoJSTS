// Quando o && encontra um valor falso o codigo retorna o valor falso que foi encontrado 

function falaOi(){
    return 'oi';
}
const vaiExecutar= 'false';
console.log(vaiExecutar && falaOi());

// False --> Valor avaliados como falso = 0, ''(string vazia), null, undefined, NaN

console.log( 0||'lorenzo'||null)



