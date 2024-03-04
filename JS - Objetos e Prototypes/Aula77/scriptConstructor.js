
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
function ValidaCPF(cpf){
    Object.defineProperty(this,'cpfLimpo',{
        enumerable: true,
        get: function() {
            return cpf.replace(/\D+/g,'')
        }
    })
}
ValidaCPF.prototype.valida = function(){
    if (typeof this.cpfLimpo === 'undefined') return console.log('Algo de errado tente novamente')
    if(this.cpfLimpo.length !== 11) return console.log("Verifique: CPF nao esta completo");
    if (this.sequencia()) return console.log("Verifique: Uma sequencia foi inserida.")

    const cpfParcial= this.cpfLimpo.slice(0,-2)
    const d1 = this.getDigito(cpfParcial)
    const d2 = this.getDigito(cpfParcial+d1)
    const cpfNovo = cpfParcial + d1 + d2;
 
    return cpfNovo === this.cpfLimpo
};
ValidaCPF.prototype.getDigito= function(cpfParcial){
    const arrayCpf =  Array.from(cpfParcial)
    let contR =arrayCpf.length+1
    const total = arrayCpf.reduce((ac, val)=>{
        ac += (Number(val) *contR)
        contR--;
        return ac
    },0)
    const digito = 11 - (total % 11)
    return (digito>9) ? '0': String(digito)
};
ValidaCPF.prototype.sequencia =function (){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo;
}
const cpf = new ValidaCPF('070.987.710-03');
if(cpf.valida()) console.log(`${cpf.cpf} É valido`)
else{
    console.log(`${cpf.cpfLimpo}: É invalido`)
}
