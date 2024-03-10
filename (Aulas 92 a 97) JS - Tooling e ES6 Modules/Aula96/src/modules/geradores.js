const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMai = () => String.fromCharCode(rand(64,91))
const geraMin = () => String.fromCharCode(rand(97,123))
const geraNum = () => String.fromCharCode(rand(49,58))
const simbolos = "!@#$%¨&*(){}[]^?/|'´~.,-*"
const geraSim = ()=> simbolos[rand(0, simbolos.length)]

export default function gerador(qtd, maiusculas,minusculas, numeros, simbolos){
  const senha = []
  let qtdCaracteres = Number(qtd)

  for (let i= 0 ; i<= qtdCaracteres; i++){
    maiusculas && senha.push(geraMai())
    if (minusculas) senha.push(geraMin())
    if (numeros) senha.push(geraNum())
    if (simbolos) senha.push(geraSim())
  }
  return senha.join('').slice(0,qtd)
}