class DispositivoEletronico{
    constructor(nome){
        this.nome= nome;
        this.ligado = true
    }
    ligar(){
        if (this.ligado) return console.log(`Dipositivo: ${this.nome}, ja esta Ligado`)
        this.ligado= true
    }
    desligar(){
        if(!this.ligado) return console.log(`Dipositivo: ${this.nome}, ja esta desligado`)
        this.ligado=false
    }
    
}
const tv = new DispositivoEletronico('tv');
tv.ligar()

console.log(tv.ligado)
tv.desligar()
console.log(tv.ligado)

class Notebook extends DispositivoEletronico{
    constructor(nome,marca, cpu){
        super(nome);
        this.marca = marca
        this.cpu = cpu
    }
}
const notebook = new Notebook('G15','DELL','Core i5')
console.log(notebook)
console.log(notebook.marca)
console.log(notebook.cpu)
notebook.desligar()
notebook.desligar()