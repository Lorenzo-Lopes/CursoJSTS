exports.paginaInicial =(req ,res)=>{
    // req.session.usuario={nome:'Lorenzo', logado: true}
    console.log(req.flash('error'), req.flash('succes'), req.flash('info'))
    console.log(req.session.usuario)
    res.render('index',{
        // titulo:'esse sera o <span style="color: red;">titulo</span> da pagina',
        numeros:[0,1,2,3,,4,5,6,7,8,9]
    })

}

exports.trataPost = (req,res)=>{
    res.send("nova rota de post")
}