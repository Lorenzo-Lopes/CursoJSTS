
function rand(min =1, max=3){
     min *= 1000
    max *= 1000
    return Math.floor(Math.random()* (max-min)+min);
}
function espera(msg,tempo){
    return new Promise((resolve,reject)=>{
       
        setTimeout(()=>{
            if (typeof msg !=='string'){
                reject(new TypeError('erro'))
                return
               }

            resolve(msg+'Passei na promise em : ' +tempo/1000 + ' Segundos')
            },tempo);
    });
}

// espera('fase 1', rand(1,3))
// .then(valor => {
//     console.log(valor)
//     return espera('fase 2',rand())
// })
// //console.log('isso é um teste')
// .then(fase =>{
//     console.log(fase)
//     return(espera(3,rand()))
// })
// .then(fase =>{
//     console.log(fase)
// })
// .catch(e =>{
//     console.log(e)
// })


async function exe(){
    try{
        const fase1 = await espera('fase 1 ', rand())
        console.log(fase1)
        const fase2 = await espera('fase 2 ', rand())
        console.log(fase2)
        const fase3 = await espera('fase 3 ', rand())
        console.log('Terminamos as promesis')
        console.log(fase3)
    }catch(e){
        console.log(e)
    }
}

exe()