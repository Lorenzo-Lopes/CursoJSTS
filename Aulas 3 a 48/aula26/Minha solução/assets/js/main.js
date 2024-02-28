function main (){
    const form = document.querySelector('.form')
    const container = document.querySelector('.container')

    function evento(evento){
        evento.preventDefault();
        const peso = form.querySelector('.pesoDigitado')
        const altura = (form.querySelector('.alturaDigitada'))
        const resultado = container.querySelector('.resultado') 
        const imc =  peso.value/(altura.value*altura.value).toFixed(2)
        
        console.log (`Seu peso é :${peso.value} e sua altura é ${altura.value} = seu imc : ${imc}`);

        if (peso.value=== ''|| altura.value === '' ){
            resultado.innerHTML = '<p class="bad">Verifique os valores inseridos e tente novamente.  </p>'
        }else if  ( imc < 18.5 && imc>0) {
            resultado.innerHTML = `<p class="paragrafo-resultado"> Seu IMC é: ${imc} --> Abaixo do peso</p>`
        }else if (imc>= 18.5 && imc <24.9){
            resultado.innerHTML = `<p class="paragrafo-resultado"> Seu IMC é: ${imc} --> Peso Normal</p>`
        }else if(imc>= 25 && imc <29.9){
            resultado.innerHTML = `<p class="paragrafo-resultado"> Seu IMC é: ${imc} --> Sobrepeso</p>`
        }else if(imc>= 30 && imc <34.9){
            resultado.innerHTML = `<p class="paragrafo-resultado"> Seu IMC é: ${imc} --> Obesidade Grau 1</p>`
        }else if(imc>= 35 && imc <39.9){
            resultado.innerHTML = `<p class="paragrafo-resultado"> Seu IMC é: ${imc} --> Obesidade Grau 2</p>`
        }else if(imc> 40) {
            resultado.innerHTML = `<p class="paragrafo-resultado"> Seu IMC é: ${imc} --> Obesidade Grau 3</p>`
        }
        

    };
    form.addEventListener('submit', evento)
};
main();

/*if ( peso.value === '' || altura.value===''){
            resultado.innerHTML = '<p class="bad"> Deu ruim ? </p>'
            evento.preventDefault();
            
        }else if {
            resultado.innerHTML = '<p class="paragrafo-resultado"> Deu ruim ?</p>'
        }

*/