function recebeData (data){
    if (data && !(data instanceof Date)){
        throw new TypeError ("erro de data")
    }
    if(!data){
       data = new Date();
    }         //toLocaleTimeString('en-US')           
    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-1970 12:34:56')
    const hora = recebeData();
    console.log(hora)
}catch(e){
   console.log(e)
}finally{
    console.log('Sempre passo aqui.')
}