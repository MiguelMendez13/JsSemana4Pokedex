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


    let movimientos=document.getElementById('movimientosSelect');

    let habilidades=document.getElementById('habilidadesSelect');


    for (let i = habilidades.options.length; i >= 0; i--) {
        habilidades.remove(i);
    }
    
    const opcion = document.createElement('option');
    textoAgregar="Habilidades";
    opcion.value=textoAgregar;
    opcion.text=textoAgregar;
    habilidades.appendChild(opcion);

    for(var i=0;i<data.abilities.length;i++){
        console.log(data.abilities[i].ability["name"]);

        let opcion = document.createElement('option');
        textoAgregar=String(data.abilities[i].ability["name"]);
        opcion.value=textoAgregar;
        opcion.text=textoAgregar;
        habilidades.appendChild(opcion);

    }


    for (let i = movimientos.options.length; i >= 0; i--) {
        movimientos.remove(i);
    }
    
    let opcion2 = document.createElement('option');
    textoAgregar="Movimientos";
    opcion2.value=textoAgregar;
    opcion2.text=textoAgregar;
    movimientos.appendChild(opcion2);

    for(var i=0;i<data.moves.length;i++){
        //console.log(data.moves[i].move["name"]);

        const opcion = document.createElement('option');
        textoAgregar=String(data.moves[i].move["name"]);
        opcion.value=textoAgregar;
        opcion.text=textoAgregar;
        movimientos.appendChild(opcion);

    }







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
