function* geradora1(){
    yield '1';
    yield '2';
    yield '3';
}
const g1 = geradora1()

/*console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)
*/

function* geradora2(){
    let i =0
    while(true){
        yield i;
        i++;
    }

}
const g2 = geradora2()

/* 
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
*/
function* geradora3(){
    yield '1';
    yield '2';
    yield '3';
}
function* geradora4(){
    yield* geradora3();
    yield '4';
    yield '5';
    yield '6';
}

const g4 = geradora4()
/*
for (let valor of g4){
    console.log(valor);
}
*/
function* geradora5(){
    yield  function(){
         console.log('log 1')
    }
//  SE UM RETURN FOR USADO AQUI O RESTO DA GERADORA5 NAO SERA EXECUTADO, ELE MATA O RESTO DA FUNÇÃO
    yield  function(){
        console.log('log 2')
    }
}
const g5 = geradora5();
const g5f1 = g5.next().value
const g5f2 = g5.next().value
g5f1();
g5f2();