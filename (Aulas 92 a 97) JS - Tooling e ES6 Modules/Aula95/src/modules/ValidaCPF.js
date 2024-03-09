export default class ValidaCPF{
    constructor(cpf){
        this.cpfCompleto = cpf;
        this.cpfLimpo = cpf.replace(/\D+/g,'')
    }
    isSequel(){
        return this.cpfLimpo.charAt(0).repeat(11)=== this.cpfLimpo
    }
    valida(){
        this.cpfParcial = this.cpfLimpo.slice(0,-2)
        this.d1 = this.getDigito(this.cpfParcial)
        this.d2 = this.getDigito(this.cpfParcial+this.d1)
        this.cpfMontado = (this.cpfParcial+this.d1+this.d2)
        if (this.isSequel()) return console.log('Algo deu errado tente novamente')
        if (typeof this.cpfLimpo === 'undefined') return console.log('Algo deu errado tente novamente')
        if(this.cpfLimpo.length !== 11) return console.log("Verifique: CPF nao esta completo");
        if (this.cpfMontado ===this.cpfLimpo)return true
        if (this.cpfMontado !==this.cpfLimpo)return console.log(`${this.cpfCompleto} é Invalido`)
    }
    getDigito(cpfParcial){
        
        const aParcial = Array.from(cpfParcial)
        let reg = aParcial.length+1
        const soma = aParcial.reduce((ac,val)=>{
            ac+= (Number(val)*reg)
            reg--;
            return ac;
        },0)
        const digito = 11 - (soma%11)
        return (digito >9 )? '0':digito
    }
}
//const cpf = new ValidaCPF('070.987.720-03')
const cpf = new ValidaCPF('31699376859')
//
cpf.valida()
console.log('Passando aqui pra dizer q cheguei aqui ')