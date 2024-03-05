function Conta(agencia, conta, saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}
Conta.prototype.saca = function(valor){
    if(valor >this.saldo) return console.log(`SALDO INSUFICIENTE: ${this.saldo}`)

    this.saldo -= valor
    return console.log(`Sacado ${valor}, SALDO RESTANTE : ${this.saldo}`)

}
Conta.prototype.deposita = function(valor){
    this.saldo += valor
    return console.log(`Depositado ${valor}, SALDO ATUAL : ${this.saldo}`)
}

function CC (agencia,conta, saldo,limite){
    Conta.call(this,agencia,conta,saldo);
    this.limite = limite
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }
}
function CP (agencia,conta, saldo){
    Conta.call(this,agencia,conta,saldo);
    
}
CP.prototype= Object.create(Conta.prototype);
CP.prototype.constructor=CP

const cp1 = new CP(99,88,77)
cp1.saca(120)

/*
  const cc1 = new CC(11,22,33,150)
  cc1.saca(50)
  cc1.deposita(100)








const c1 = new Conta(11,22,100)
c1.saca(50)
c1.deposita(100)
*/