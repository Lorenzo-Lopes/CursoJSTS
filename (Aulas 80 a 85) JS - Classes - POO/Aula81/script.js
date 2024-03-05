const _velocidade = Symbol();

class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0
    }
    get velocidade(){
        return this[_velocidade]
    };
    set velocidade(valor){
        if (valor >150 || valor < 0)return
        if (typeof valor !== 'number') return
        
        this[_velocidade]=valor
    }
    acelerar(){
        if (this[_velocidade]>=150)return;
        this[_velocidade]++;

    }
    freiar(){
        if (this[_velocidade]<=0 )return;
        this[_velocidade]--;
    }
}
const ferrari = new Carro('LaFerrari')

for (let i =0 ; i<200; i++){
ferrari.acelerar()
}

console.log (ferrari.velocidade)

for (let i=ferrari.velocidade; i>60;  i--){
    ferrari.freiar()
}

console.log(ferrari.velocidade)

ferrari.velocidade='aa'
console.log(ferrari.velocidade)