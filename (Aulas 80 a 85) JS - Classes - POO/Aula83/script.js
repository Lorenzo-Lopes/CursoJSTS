//Metodos estaticos.
class ControleRemoto {
    constructor(tv){
        this.tv=tv
        this.vol = 0
    }
      //metodo de instacia
    aumentarVolume(){
        this.vol+= 2;
    }
      //metodo de instacia
    diminuirVolume(){
        this.vol-= 2;
    }
    
    //metodo estatico
    static trocaPilha(){
        console.log('Pilha trocada')
    }
}

const tv = new ControleRemoto('tv')
tv.aumentarVolume()
tv.aumentarVolume()
tv.aumentarVolume()
console.log (tv.vol)
tv.diminuirVolume()
console.log (tv.vol)

ControleRemoto.trocaPilha();