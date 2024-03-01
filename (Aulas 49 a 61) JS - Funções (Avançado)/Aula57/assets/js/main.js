function criaCalculadora(){
  return{
    display: document.querySelector('.display'),

    inicia(){
      this.cliqueBotoes();
      this.enter();
      this.teclaBackSpace()
    },
    
    cliqueBotoes(){
      document.addEventListener('click',(e)=>{
      const element = e.target;
      
      if(element.classList.contains('btn-num')){
        this.btnParaDisplay(element.innerText);
        this.display.focus();
      }
        if(element.classList.contains('btn-clear')){
          this.display.focus();
          this.clearDiplay();
        }
        if(element.classList.contains('btn-del')){
          this.display.focus();
          this.backSpace();
        }
        if(element.classList.contains('btn-eq')){
          this.display.focus();
          this.equal();
        }
        this.display.focus();

    });
      
    },

    btnParaDisplay(valor){
      this.display.value += valor
      
    },
    clearDiplay(){
      this.display.value=''
    },
    backSpace(){
       this.display.value=this.display.value.slice(0,-1)
    },

    equal(){
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if(!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta);
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    },
    enter(){
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
        this.equal();
        console.log(e)
        }
      });
    },
    teclaBackSpace(){
      this.display.addEventListener('keypress', e =>{
        if(e.keyCode===8){
          this.backSpace();
        }
      })
    }
  
  };
}
const calculadora = criaCalculadora();
calculadora.inicia()