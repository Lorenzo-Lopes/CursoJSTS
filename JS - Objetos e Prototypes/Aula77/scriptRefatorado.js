
// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/
function validaCPF(cpf){
    const cpfLimpo = cpf.replace(/\D+/g,'')
    const cpfParcial = cpfLimpo.slice(0,-2)
    const d1 = getDigito(cpfParcial)
    const d2 = getDigito(cpfParcial + d1)
    const cpfCompleto = (String(cpfParcial)+String(d1)+String(d2))
    if (cpfLimpo === 'undefined') return console.log(`O CPF : ${cpf}  é invalido`)
    if (cpfLimpo.length !== 11)   return console.log(`O CPF : ${cpf}  é invalido`)
    if (cpfCompleto === cpfLimpo) return console.log(`O CPF : ${cpf}  é valido`)
    if (cpfCompleto !== cpfLimpo) return console.log(`O CPF : ${cpf}  é invalido`)
}
function getDigito(cpfParcial){
    const arraycpfParcial = Array.from(cpfParcial);
    let multi =arraycpfParcial.length+1;
    const soma = arraycpfParcial.reduce((ac,val) => {
        ac += (multi*Number(val));
        multi--;
        return ac;
    },0);
    const digito = 11 - (soma % 11);
    return digito > 9 ? '0' : String(digito);  
} 

const cpf = '070.987.720-03'
validaCPF(cpf)