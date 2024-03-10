const path = require('path')
const axios = require('axios')
const mod1 = require('./mod1');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log (response.data))
.catch(e => console.log(e))

const p1 = new mod1.Pessoa('Lorenzooo')

console.log(p1.nome)