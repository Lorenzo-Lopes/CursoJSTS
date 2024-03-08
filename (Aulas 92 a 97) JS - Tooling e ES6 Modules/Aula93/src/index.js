function rand(min, max){
    min *= 1000
   max *= 1000
   return Math.floor(Math.random()* (max-min)+min);
}
function espera(msg,tempo){
   return new Promise((resolve,reject)=>{
       if (typeof msg !=='string'){
        reject(new TypeError('erro'));
        return
       }
       setTimeout(()=>{
       resolve(msg)
       },tempo);
   });
}

const promises = [
   'primeiro',
   espera('promise 1',rand(1,3)),
   espera('promise 2', rand(1,3)),
   espera('promise 3', rand(1,3)),
   espera(10,1000),
   'ultimo'    
];



Promise.race(promises).then(function(valor){
   console.log(valor)
})
.catch(function(erro){
   console.log(erro);
})

function baixarPagina() {
   const emCache = false
   
   
   if(emCache){
       return Promise.reject/* .resolve*/('Monstra pagina')
   }else{
       return espera('Baixei a pagina',3000)
   }
}
baixarPagina().then(dadosPg =>{
   console.log(dadosPg)
}).catch(e => console.log('ERRO',e))