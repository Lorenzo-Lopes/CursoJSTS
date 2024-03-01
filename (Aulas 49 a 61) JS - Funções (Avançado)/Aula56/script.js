//Factory Function
function createPerson (nome, sobrenome, altura,peso){
    return{
        nome,
        sobrenome,
        altura,
        peso,
        fala: function(assunto){
            return `${this.nome}, ${assunto}` 
        },
        get imc(){
            const imc = (this.peso/(this.altura**2));
            return imc.toFixed(2);
        },
        get nomeCompleto(){
            return `${nome} ${sobrenome}:Completo`
        },
        set nomeCompleto (nomeCompleto){
            nomeCompleto = nomeCompleto.split(' ')
            console.log(nomeCompleto)
            this.nome = nomeCompleto.shift();
            this.sobrenome = nomeCompleto.join('_');
            console.log(this.nome, this.sobrenome)
            
        },
        
        
    }
    
}
const p1 = createPerson('Lorenzo','Lopes', 1.85, 180)
const p2 = createPerson('Bonny','Lopes', 0.45, 26)

console.log(p1.fala('Sobre One Piece'));
console.log(p2.fala('arrawr'));
console.log(p1.imc);
p1.nomeCompleto =('Looooorenzo Lopes Costa')
