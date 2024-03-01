(function(idade,peso,altura){
    const sobrenome = 'Lopes'
    function criaNome(nome){
        return `${nome} ${sobrenome}`;
    }

    (function (){
        console.log(criaNome('Lorenzo'))
        console.log(idade,peso,altura)
    }());

})(25, 80, 1.80);

console.log('fora da função IIFE')