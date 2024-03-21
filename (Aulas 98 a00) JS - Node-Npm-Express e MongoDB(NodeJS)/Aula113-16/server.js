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
}).catch(e => console.log(e))

const session = require('express-session')
const MongoStore =  require('connect-mongo')(session);
const flash = require('connect-flash')
const path = require('path')
const {meuMiddleWare} =require('./src/middleware/middleware')
const routes = require('./routes')
// const {middlewareGlobal} = require('./src/middleware/middleware')
// const { toPrimitive } = require('core-js/fn/symbol')
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname,"public")))

const sessionOp =session({
    secret:'gvhbjkljhbfcvgbhnjkm',
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    resave: false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*60*24*7,
        httpOnly:true
    }
})
app.use(sessionOp)
app.use(flash());

app.set('views', path.resolve(__dirname,'src','views'))
app.set('view engine','ejs')

app.use(meuMiddleWare)
app.use(routes)


app.on('pronto',()=> {
    app.listen(3000, () =>{
        console.log('acessar http://localhost:3000')
        console.log('Servidor rodando na porta 3000')
    })
})


// http://localhost:3000/teste.txt
