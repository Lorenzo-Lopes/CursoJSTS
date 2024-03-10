import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function(){
  const gera = new GeraCPF()
  let cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML =gera.geraCpf()
  
})();