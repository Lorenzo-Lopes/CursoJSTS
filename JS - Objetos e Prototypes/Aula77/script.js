
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
    const cpfLimpo =limpaCPF(cpf)
    const digito = getDigito(cpfLimpo)
    const cpf9 = getNove(cpfLimpo) 
    const d1 = getD1(cpf9)
    const d2 = getD2(cpf9,d1)
    const cpfCompleto = montaCPF(cpf9,d1,d2)

    if (cpfCompleto === cpfLimpo) console.log(`O CPF : ${cpf}  é valido`)
    if (cpfCompleto !== cpfLimpo) console.log(`O CPF : ${cpf}  é invalido`)
}
function limpaCPF(cpf){
    const cpfLimpo = cpf.replace(/\D+/g,'')
    return cpfLimpo
}
function getDigito(cpfLimpo){
    const cpfDigito= cpfLimpo.slice(-2)
    return cpfDigito
}

function getNove(cpfLimpo){
    const cpf9= cpfLimpo.slice(0,-2)
    return cpf9
}
function getD1(cpf9){
    const arraycpf9 = Array.from(cpf9)
    let multi =10
    let soma = arraycpf9.reduce((ac,val)=> {
        ac += Number(val)*multi
        multi--
        return ac
    },0)
    const digito = 11 - (soma % 11)
    if (digito > 9 ) {
        return  0
    }

    return digito
} 
function getD2(cpf9,d1){
    const arraycpf9 = Array.from(cpf9)
    arraycpf9.push(String(d1))
    let multi =11
    let soma = arraycpf9.reduce((ac,val)=> {
        ac += Number(val)*multi
        multi--
        return ac
    },0)
    const digito = 11 - (soma % 11)
    if (digito > 9 ) {
        return 0
    }
    return digito
}
function montaCPF(cpf9,d1,d2){
    const strCpf9 = String(cpf9)
    const strd1 = String(d1)
    const strd2 = String(d2)

    const cpfCompleto = strCpf9+strd1+strd2
    return cpfCompleto
}

const cpf = '31399376859'
validaCPF(cpf)