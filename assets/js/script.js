let allPokemons;
let allElements;
const urlApi = "https://pokebuildapi.fr/api/v1/pokemon/limit/25";
const urlApiElements = "https://pokebuildapi.fr/api/v1/pokemon/limit/25";
// const urlApiElements = "https://pokebuildapi.fr/api/v1/types";


let radio = document.querySelector("input[type=radio]:checked");
console.log(radio.value);
let radioNom;
radioNom = document.getElementById('radioNom');
// if (contact=radioNom) {
await listPokemons ();
     async function listPokemons () {
          const res = await fetch(urlApi);
         allPokemons = await res.json();
     }
    console.log(allPokemons);
    allPokemons.forEach(pokemon => {
         let monOption = document.createElement("option");
         //  monOption.value = pokemon.name;
         monOption.innerText = pokemon.name;
         document.querySelector('select').appendChild(monOption);       
     })
     document.querySelector("select").addEventListener("change", (optionChange) => {
         console.log("select:", optionChange.target.value);
         let pokemontrouve = allPokemons.find((element) => element.name == optionChange.target.value);
         console.log("image:", pokemontrouve.image);
         document.querySelector(".pokemon-img").setAttribute("src", pokemontrouve.image);
     })
// }
let radioElement;
radioElement = document.getElementById('radioElement');
// if (contact=radioElement) {
await listElements ();
async function listElements () {
    const res = await fetch(urlApiElements);
    allElements = await res.json();
}
    console.log(allElements);
    allElements.forEach(pokemon => {
          let monOption = document.createElement("option");
          // monOption.value = pokemon.stats.HP;
          monOption.innerText = pokemon.name;
         document.querySelector('#pet-select2').appendChild(monOption);       
   })
    document.querySelector("select").addEventListener("change", (optionChange) => {
         console.log("select:", optionChange.target.value);
         let pokemonstats= allPokemons.find((element) => element.name == optionChange.target.value);
         console.log("stats:", pokemonstats.stats);
        //  document.querySelector(".pokemon-stats").setAttribute("innerText", pokemonstats.stats);
         document.documentElement.textContent;
        //  pokemonstats.stats.innerText = pokemon.stats;
     })
// }





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




