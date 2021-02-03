

let dada=()=>{
    let pokeInput=document.getElementsByClassName('pokeInput')
    let vals=pokeInput[0].value.toLowerCase();


let uobject={
    url:'https://pokeapi.co/api/v2/',
    path:'pokemon/',
    name:vals,
}

let fullURL=uobject.url+uobject.path+uobject.name;
console.log(fullURL);
fetch(fullURL)
.then((data) => data.json())
.then((pokemon)=>datadikhao(pokemon))

let datadikhao=(data)=>{
    let html=`
    <div class="result">
                <h2 class="center"> ${data.name.toUpperCase()} </h2>
                <div class="images">
                <img src="${data.sprites.other.dream_world.front_default}" alt="">
                <img src=${data.sprites.front_shiny} alt="">
                <img src=${data.sprites.back_default} alt="">
                
                </div>
            <h2  class="center">Height - ${data.height}</h2>
            <h2 class="center">Weight - ${data.weight}</h2>
        
            </div>
    `
    console.log(data.name)
    let result=document.getElementsByClassName('result')
result[0].innerHTML=html;
}
}