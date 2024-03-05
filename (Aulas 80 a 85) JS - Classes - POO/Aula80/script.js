class Pessoa{
    constructor(nome,sobrenome){
        this.nome=nome;
        this.sobrenome= sobrenome
    }

 falar(){
    console.log(`${this.nome} esta falando`);

}
};
const p1 = new Pessoa('lorenzo','Lopes')
const p2 = new Pessoa('maria','aaaa')
const p3 = new Pessoa('juan','alvarez')
const p4 = new Pessoa('luiz','miranda')

console.log(p1,p2,p3,p4)
p1.falar()
p2.falar()
p3.falar()
p4.falar()
