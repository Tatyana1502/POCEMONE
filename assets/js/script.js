let allPokemons;
let allElements;
let saisies = [];
const urlApi = "https://pokebuildapi.fr/api/v1/pokemon/limit/25";
const urlApiElements = "https://pokebuildapi.fr/api/v1/types";
let radioElement;
radioElement = document.getElementById('radioElement');
// saisies = [];  
document.querySelectorAll("input[type='radio']").forEach(async radio => {
    radio.addEventListener("change", async () => {
        document.querySelector('select').innerHTML = "";
        if (radio.value == "nom") {
        await listPokemons ();
    } else {
        await listElements ();
    }
    })    
// });
await listPokemons ();
     async function listPokemons () {
         const res = await fetch(urlApi);
         allPokemons = await res.json();
         console.log(allPokemons);
         allPokemons.forEach(pokemon => {
             let monOption = document.createElement("option");
             monOption.value = pokemon.name;
             monOption.innerText = pokemon.name;
             document.querySelector('select').appendChild(monOption);
                    
         });
         document.querySelector("select").addEventListener("change", (optionChange) => {
             console.log("select:", optionChange.target.value);
                 let pokemontrouve = allPokemons.find((element) => element.name == optionChange.target.value);
             console.log("image:", pokemontrouve.image);
                 document.querySelector(".pokemon-img").setAttribute("src", pokemontrouve.image);
             console.log("stats:", pokemontrouve.stats); 
                 document.querySelector(".pokemon-stats").innerHTML= "HP : " + pokemontrouve.stats.HP;
                 document.querySelector(".pokemon-stats1").innerHTML= "attack : " + pokemontrouve.stats.attack;
                 document.querySelector(".pokemon-stats2").innerHTML= "defense : " + pokemontrouve.stats.defense; 
                 document.querySelector(".pokemon-stats3").innerHTML= "special_attack : " + pokemontrouve.stats.special_attack;
                 document.querySelector(".pokemon-stats4").innerHTML= "special_defense : " + pokemontrouve.stats.defense;
                 document.querySelector(".pokemon-stats5").innerHTML= "speed : " + pokemontrouve.stats.speed; 
                   
        })
    }
await listElements (); 
async function listElements () {
    const res = await fetch(urlApiElements);
    allElements = await res.json();
    console.log(allElements);
    allElements.forEach(element => {
        let monOption = document.createElement("option");
        monOption.value = element.name;
        monOption.innerText = element.name;
       document.querySelector('select').appendChild(monOption);       
 })
    document.querySelector("select").addEventListener("change", (optionChange) => {
    console.log("select:", optionChange.target.value);
    let pokemontrouve = allElements.find((element) => element.name == optionChange.target.value);
    console.log("image:", pokemontrouve.image);
    document.querySelector(".pokemon-img").setAttribute("src", pokemontrouve.image);
  
})
    // console.log(allElements);
    
}

});






     document.querySelector("#Chercher").addEventListener("click", (clickEvent) => {  

            //  let allPokemons;
            //  const urlApi = "https://pokebuildapi.fr/api/v1/pokemon/limit/25";
            //  await lsitPokemons ();
            //  async function lsitPokemons () {
            //      const res = await fetch(urlApi);
            //      allPokemons = await res.json();
            //  }
            //      console.log(allPokemons);
            //      allPokemons.forEach(pokemon => {
            //          let monOption = document.createElement("option");
            //         //  monOption.value = pokemon.name;
            //          monOption.innerText = pokemon.name;
            //          document.querySelector('select').appendChild(monOption);       
            //     })
             
             
         
        //  if (clickEvent.target.innerText == "Par element" && clickEvent.target.innerText == "Chercher") {
        //     async function lsitPokemons () {
        //     let allPokemons;
        //     const urlApi = "https://pokebuildapi.fr/api/v1/pokemon/limit/25";
        //     await lsitPokemons();
        //     const res = await fetch(urlApi);
        //     allPokemons = await res.json();
        //     console.log(allPokemons);
        //         allPokemons.forEach(pokemon => {
        //             let monOption = document.createElement("option");
        //             monOption.value = pokemon.name;
        //             monOption.innerText = pokemon.name;
        //             document.querySelector("select").appendChild(monOption);       
        //        })
        //     }
        //     document.querySelector("select").addEventListener("change", (optionChange) => {
        //         console.log("select:", optionChange.target.value);
        //         let pokemontrouve = allPokemons.find((element) => element.name == optionChange.target.value);
        //         console.log("image:", pokemontrouve.image);
        //         document.querySelector(".pokemon-img").setAttribute("src", pokemontrouve.image);
        //     })
        
     })




