exports.meuMiddleWare= (req, res, next)=>{
    res.locals.varLocal ='Valor da varLocal'
    next();
}