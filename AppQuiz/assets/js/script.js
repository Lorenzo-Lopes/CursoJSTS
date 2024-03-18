var opcao = document.querySelectorAll('[type=radio]')

for (let i =0 ; opcao.length; i++){
    opcao[i].addEventListener('change',function(e){
        let marcado = e.target.value;
        console.log(marcado)
        if(marcado ==='correto'){
            let= pai= e.target.parentNode;
            pai.style.backgroundColor='green'

            let els = pai.parentNode.querySelectorAll("[type=radio]")

            for (let n =0 ; n < els.length;n++){
                els[n].disabled=true
            }

        }else {
            let marcado = e.target.value;
            console.log(marcado)
            let= pai= e.target.parentNode;
            pai.style.backgroundColor='red'

            let els = pai.parentNode.querySelectorAll("[type=radio]")

            for (let n =0 ; n < els.length;n++){
                els[n].disabled=true
            }
            let correta = pai.parentNode.querySelector('[value=correto')
            
            correta.parentNode.style.backgroundColor='green'
        }
    })
}