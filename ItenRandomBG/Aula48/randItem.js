const itens = [
    'Machado de Guerra',    ,'Machado de Guerra',    ,'Machado de Guerra'    ,'Espada Longa'    ,'Espada Longa'    ,'Espada Longa'    ,'Adaga do ritual'    ,'Adagadoritual'    ,'Adaga do ritual'    ,'Espada Grande'    ,'Espada Grande'    ,'Machado Grade'    ,'Machado Grade'    ,'Demon Slayer'    ,'Armadura de Couro'
    ,'Armadura de Couro'    ,'Armadura de Couro'    ,'Escudo'    ,'Escudo'    ,'Escudo'    ,'Armadura de Talas'    ,'Armadura de Talas'    ,'Escudo de Corpo'
    ,'Escudo de Corpo'    ,'Armadura da Fenix'    ,'Botas de Velociodade'    ,'Botas de Velociodade'    ,'Botas de Velociodade'    ,'Manto de invisibilidade'
    ,'Manto de invisibilidade'    ,'Manto de invisibilidade'    ,'Luva de Precisão'     ,'Luva de Precisão'    ,'item pica'    ,'Poção Basica'    ,'Poção Basica'
    ,'Poção Basica'    ,'Poção Basica'    ,'Poção Basica'    ,'Poção Avançada'    ,'Poção Avançada'    ,'Poção Avançada'    ,'Poção Avançada'     ,'Poção Heroica'
    ,'Poção Heroica'    ,'Bombas'    ,'Bombas'    ,'Bombas'    ,'Bombas'    ,'Bombas'
]
    function rand(min, max){
        const item = Math.floor(Math.random()* (max-min)+min);
        console.log(itens.splice(item,1))

       return 
}
console.log(itens[rand(1,itens.length)])
console.log (itens)
