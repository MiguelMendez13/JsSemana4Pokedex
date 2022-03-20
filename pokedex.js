const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("pokebola.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            
           
            datosCambiar(data);


            console.log(data);
        }
    });
}


function datosCambiar(data){
 //console.log(pokeImg);
    let altura= document.getElementById("pantallaAltura");
    console.log(data.height);
    let alText= "Altura: "+String(data.height);

    let peso= document.getElementById("pantallaPeso");
    console.log(data.weight);
    let peText= "Peso: "+String(data.weight);

    let idPokemon=document.getElementById("idPokemon");
    console.log(data.id);
    let idText="ID: "+String(data.id);

    let tiPokemon=document.getElementById("tipo");
    console.log(data.types[0]["type"]["name"]);
    let tiText="Tipo: "+String(data.types[0]["type"]["name"]);




    altura.innerHTML=alText;
    peso.innerHTML=peText;
    idPokemon.innerHTML=idText;
    tiPokemon.innerHTML=tiText;
   //"AlturaP">Altura: 00.00

}



const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
