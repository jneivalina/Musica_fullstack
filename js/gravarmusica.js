function voltar(){

    window.location = "musica.html";
}



function gravarmusica(){

    var carta = {
        titulo : document.getElementById("txtnomedamusica").value,
        cadastro : document.getElementById("txtdtcadastro").value,
        lancamento : document.getElementById("cmblancamento").value,
        artista : { 
            id:document.getElementById("cmbartistas").value


        }




    }        

    var envelope = {
        method : "POST" ,
        body : JSON.stringify(carta),
        headers : {
            "content-type" : "application/json"
        }



    };
    fetch("http://localhost:8080/novamusica" , envelope)
        .then(res  => res.json())
        .then(res =>{
            window.alert("A musica nº :  "  + res.id +   " foi cadastrada com sucesso");
            window.location = "gravarartista.html";
        })
        .catch(err => {
            window.alert("Não foi possível cadastrar essa música");
        });


}

function preencherartistas(){

    fetch("http://localhost:8080/artistas")
    .then(res => res.json())
    .then(res =>{
           for(contador=0;contador<res.length;contador++){
               document.getElementById("cmbartistas").innerHTML+=
               "<option value='"+ res[contador].id + "'>" + res[contador].nomeArtistico + "</option>";
           } 


    })
    .catch(err =>{
        window.alert("Não existem artistas!");
        window.location = "gravarartista.html";
    });




}