function Calculadora(){
    this.display = document.querySelector('.display'),
    this.inicia = () => {
        cliqueBotoes();
        enter();
        teclaBackSpace()

    };
     const  cliqueBotoes = ()=>{
        document.addEventListener('click',(e)=>{
        const element = e.target;
        
        if(element.classList.contains('btn-num')){
          btnParaDisplay(element.innerText);
          this.display.focus();
        }
          if(element.classList.contains('btn-clear')){
            this.display.focus();
            clearDisplay();
          }
          if(element.classList.contains('btn-del')){
            this.display.focus();
            backSpace();
          }
          if(element.classList.contains('btn-eq')){
            this.display.focus();
            equal();
          }
          this.display.focus();
  
      });
        
      };
      const btnParaDisplay= (valor)=>{
        this.display.value += valor
      };
      const clearDisplay = ()=>{
        this.display.value=''
      };
      backSpace=()=>{
        this.display.value=this.display.value.slice(0,-1)
     };
    const equal=()=>{
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
      };
    const  enter= () => {
        this.display.addEventListener('keyup', e => {
          if (e.keyCode === 13) {
          equal();
          console.log(e)
          }
        });
      };
      const teclaBackSpace = ()=> {
        this.display.addEventListener('keypress', e =>{
          if(e.keyCode===8){
            backSpace();
          }
        })
      };



}
const calculadora = new Calculadora();
calculadora.inicia()