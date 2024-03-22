exports.meuMiddleWare= (req, res, next)=>{
    res.locals.varLocal ='Valor da varLocal'
    next();
}
exports.checkError = (err,req,res,next) => {

    if (err && 'EBADCSRFTOKEN' === err.code){
        return res.render('404')
    }
}
exports.csrfMid=(req,res,next)=>{
    res.locals.csrfToken = req.csrfToken()
    next();
}