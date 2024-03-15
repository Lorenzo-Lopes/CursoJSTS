const boxes = document.querySelector('.poke-boxes')
fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
.then(response => response.json())
.then(allPokemon => {
    const poke =[];
     let i =0
 allPokemon.results.map((val)=>{
   
     fetch(val.url)
     .then(response => response.json())
     .then(pokemonSingle =>{
                setTimeout(() => {
            poke.push({nome:val.name,imagem:pokemonSingle.sprites.front_default});
            boxes.innerHTML+= `<div class="poke-box">
            <p>${poke[i].nome.toUpperCase()}</p>
            <img src="${poke[i].imagem}"" alt="" srcset="">
            ` 
            i++
            
            if(poke.length===10){
            //ACABOU
                console.log(poke)
            
         
            }
        }, 500);
    })
        
})
})
