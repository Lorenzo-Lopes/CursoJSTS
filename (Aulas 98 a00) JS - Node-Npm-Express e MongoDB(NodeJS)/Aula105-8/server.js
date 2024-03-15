const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}));
//CRUD - create, read, update, delete >> post , get , put, delete
// http:// meusite.com/profiles/LorenzoLopes'
app.get('/',(req, res)=>{
     res.send(`
     <form action="/" method="POST">
     Nome do Cliente: <input type="text" name="nome">
     <button>Enviar Formulario.</button>
     </form>
     `)
});
app.get('/test/:iUsuarios?/:parametro?',(req, res) =>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.parametro)
})

app.post('/', (req,res)=>{
    res.send('recebi o formulario.')
})

app.listen(3000, () =>{
    console.log('acessar http://localhost:3000')
    console.log('Servidor rodando na porta 3000')
})