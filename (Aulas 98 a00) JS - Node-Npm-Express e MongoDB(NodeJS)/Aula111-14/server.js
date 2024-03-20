// lorenzolopes 81334699Nk
// mongodb+srv://lorenzolopes:81334699Nk@cluster01.i3tgciz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01

require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const conectionString ='mongodb+srv://LorenzoLopes:81334699@cursojs.sz5srjh.mongodb.net/BaseDados?retryWrites=true&w=majority&appName=CursoJs'
mongoose.connect(process.env.CONECTIONSTRING)
.then(()=>{
    app.emit('pronto')
    console.log('conectado.')
})
const path = require('path')
const routes = require('./routes')
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname,"public")))
app.set('views', path.resolve(__dirname,'src','views'))
app.set('view engine','ejs')

app.use(routes)


app.on('pronto',()=> {
    app.listen(3000, () =>{
        console.log('acessar http://localhost:3000')
        console.log('Servidor rodando na porta 3000')
    })
})


// http://localhost:3000/teste.txt
