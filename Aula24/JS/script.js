let hr = 1

if (hr < 12 && hr >5){
    console.log('Bom dia!')
}else if ( hr < 18 && hr >=12){
    console.log('Boa tarde!')
}else if(hr<=23 && hr >=18) {
    console.log('Boa noite')
}else if(hr < 5 || hr == 24) {
    console.log ('vai dormir')
};