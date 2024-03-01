//  PARAMETROS DE FUNÇÕES.

// Para funções criadas da maneira abaixo  existe um atributo chamado 'arguments' , ele recebe todos os argumetos que foram enviados quando a 
//função foi chamada, ele existe mesmo que a funçao nao precide se argumentos para ser executada.

function funcao (){
    console.log('Função executada')
    let soma=0
    for(let argumento of arguments){
        soma += argumento
    }
    console.log(soma)
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


function argumentos(a,b=2,c=10){
    let soma = a+b+c
    console.log(soma)
}
argumentos(1,undefined,3);

function objeto({nome,sobrenome,Idade}){
    console.log(nome,sobrenome,Idade)
}
function array([nome,sobrenome,Idade]){
    console.log(nome,sobrenome,Idade)
}
let pessoa= {nome:'Lorenzo', sobrenome:'Lopes', Idade:25}
let pessoaArray = ['Lorenzo','Lopes',25]
array(pessoaArray);
objeto(pessoa);


function conta(operador,contador=0, ...valores){
    console.log(operador,contador, valores)
   
    for(let num of valores){
        if (operador ==='+') contador += num
        if (operador==='-') contador -= num
        if (operador==='/') contador /= num
        if (operador==='*') contador *= num

    }
    console.log (contador)
    
}
conta('-',1000000000,10,20, 530,50)

