module.exports= (req, res, next)=>{
    console.log('passando no middleware')
    if(req.body.cliente){
        console.log(`${req.body.cliente}`)
    }
    next();
}