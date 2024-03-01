function Calculadora(){
    this.display = document.querySelector('.display')
    this.inicia = () => {
        this.display.focus();
        cliqueBotoes();
        enter();
        keyBackSpace();
    };
    const cliqueBotoes = () => {
        document.addEventListener('click', e =>{
            const el = e.target;
            if(el.classList.contains('btn-num')){
                setDiplay(el.innerText)
                this.display.focus();
            }
            if(el.classList.contains('btn-clear')){
                displayClear();
                this.display.focus();
            }
            if(el. classList.contains('btn-del')){
               del();
               this.display.focus();
            }
            if(el.classList.contains('btn-eq')){
                equal();
                this.display.focus();
            }
            this.display.focus();
        })
    
    };
    const setDiplay = (valor) =>{
        this.display.value += valor;
    }
    const displayClear = () =>{
        this.display.value = ''
    }
    const del = ()=>{
        this.display.value = this.display.value.slice(0,-1);
    }

    const equal = () =>{
        let result = this.display.value;
        try{
            result = eval(result)
        this.display.value = result
        }catch{
            alert('Sentença inválida ')
            displayClear();
        }   
    }
    const enter = ()=>{
        this.display.addEventListener("keypress", e =>{
            if (e.keyCode === 13){
                equal();
            }
        })
    }
    const keyBackSpace = () =>{
        this.display.addEventListener("keypress",e =>{
            if(e.keyCode===8){
                del();
            }

        })
    }


}
const calculadora= new Calculadora();
calculadora.inicia()
