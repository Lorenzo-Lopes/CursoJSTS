const express = require('express')
const app = express()

//CRUD - create, read, update, delete >> post , get , put, delete


// http:// meusite.com/profiles/LorenzoLopes
app.get('/',(req, res)=>{
     res.send(`
     <form action="/" method="POST">
     Nome: <input type="text" name="nome">
     <button>Enviar aaa.</button>
     </form>
     `)
});
app.post('/', (req,res)=>{
    res.send('recebi o formulario.')
})

app.listen(3000, () =>{
    console.log('acessar http://localhost:3000')
    console.log('Servidor rodando na porta 3000')
})