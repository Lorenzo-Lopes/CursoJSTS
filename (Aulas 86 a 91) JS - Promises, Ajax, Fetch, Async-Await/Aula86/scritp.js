function rand(){
    const min = 1* 1000
    const max = 3* 1000
    return Math.floor(Math.random()* (max-min)+min);
}
function conectbd(msg,tempo){
    return new Promise((resolve,reject)=>{
        if (typeof msg !=='string') reject(new TypeError('erro'));

        setTimeout(()=>{
        resolve(msg)

    },tempo)

    })
    

    
}
conectbd('Iniciado conexão  com o banco.',rand()).then(resposta =>{
    console.log(resposta);
    return conectbd('Buscando dados...' ,rand()).then(resposta=>{
        console.log(resposta)
        return conectbd('Exebi dado na tela', rand()).then(resposta =>{
        console.log(resposta)
        });
    }).catch(e=>{
        console.log('ERRO',e)
    })
})

for (let i =0; i<100;i++){
    setTimeout(()=>{
        console.log("Carregando")

    },rand())

}