
// let allPokemons;
// let allElements;

// const urlApi = "https://pokebuildapi.fr/api/v1/pokemon/limit/25";
// const urlApiElements = "https://pokebuildapi.fr/api/v1/types";

// let radioElement;
// radioElement = document.getElementById('radioElement');


// // const radioSelected = document.querySelector("input[type='radio']:checked");
// // console.log(radioSelected);
// // console.log(radioSelected.value);
// // let pokemonSelected = document.querySelector("select").value;
// listPokemons();
// document.querySelectorAll("input[type='radio']").forEach(async radio => {
//      radio.addEventListener("change", async () => {
//      document.querySelector('select').innerHTML = "";
//          if (radio.value == "nom") {
//              console.log("NOM");
//              await listPokemons ();
//          } 
//          else {
//              console.log("ELEMENT");
//              await listElements ();
//          }  
//     })        
//  });
//  async function listPokemons() {
//      const res = await fetch(urlApi);
//      allPokemons = await res.json();
//      console.log(allPokemons);
//         allPokemons.forEach(pokemon => {
//             let monOption = document.createElement("option");
//             monOption.value = pokemon.name;
//             monOption.innerText = pokemon.name;
//             document.querySelector('select').appendChild(monOption);
            
//         })
        
// }

// async function listElements () {
//     const res = await fetch(urlApiElements);
//     allElements = await res.json();
//     console.log(allElements);
//         allElements.forEach(element => {
//             let monOption = document.createElement("option");
//             monOption.value = element.name;
//             monOption.innerText = element.name;
//             document.querySelector('select').appendChild(monOption);       
//     });   
    
// document.querySelector("button").addEventListener("click", () => {
//      const radioSelected = document.querySelector("input[type='radio']:checked");
//      console.log(radioSelected);
//      console.log(radioSelected.value);
//             // Si radioSelected.value = nom on doit chercher dans allPokemons le pokemon qui est choisi dans la select liste
//             // et ajouter dans la page :
//              if (radioSelected.value == "nom") {
//                  let pokemonSelected = document.querySelector("select").value;
//                  document.querySelector(".pokemon-stats").innerHTML= "";
//                  document.querySelector(".pokemon-stats1").innerHTML= "";
//                  document.querySelector(".pokemon-stats2").innerHTML= ""; 
//                  document.querySelector(".pokemon-stats3").innerHTML= "";
//                  document.querySelector(".pokemon-stats4").innerHTML= "";
//                  document.querySelector(".pokemon-stats5").innerHTML= ""; 
//                  let pokemontrouve = allPokemons.find((element) => element.name == pokemonSelected);
//                  console.log("image:", pokemontrouve.image);
//                  document.querySelector(".pokemon-img").setAttribute("src", pokemontrouve.image);
//                  console.log("stats:", pokemontrouve.stats); 
//                  document.querySelector(".pokemon-stats").innerHTML= "HP : " + pokemontrouve.stats.HP;
//                  document.querySelector(".pokemon-stats1").innerHTML= "attack : " + pokemontrouve.stats.attack;
//                  document.querySelector(".pokemon-stats2").innerHTML= "defense : " + pokemontrouve.stats.defense; 
//                  document.querySelector(".pokemon-stats3").innerHTML= "special_attack : " + pokemontrouve.stats.special_attack;
//                  document.querySelector(".pokemon-stats4").innerHTML= "special_defense : " + pokemontrouve.stats.defense;
//                  document.querySelector(".pokemon-stats5").innerHTML= "speed : " + pokemontrouve.stats.speed;   
//             }
//              if (radioSelected.value == "element") {   
//                  let elementSelected = document.querySelector("select").value;
//                  document.querySelector(".pokemon-stats").innerHTML= "";
//                  document.querySelector(".pokemon-stats1").innerHTML= "";
//                  document.querySelector(".pokemon-stats2").innerHTML= ""; 
//                  document.querySelector(".pokemon-stats3").innerHTML= "";
//                  document.querySelector(".pokemon-stats4").innerHTML= "";
//                  document.querySelector(".pokemon-stats5").innerHTML= ""; 
//                      let pokemontrouvea = allElements.find((element) => element.name == elementSelected);
//                      console.log("image:", pokemontrouvea.image);
//                      document.querySelector(".pokemon-img").setAttribute("src", pokemontrouvea.image);
//                      console.log("name:", pokemontrouvea.name); 
//                      document.querySelector(".pokemon-stats").innerHTML= "name : " + pokemontrouvea.name;
//             } 
//     })  

// }
