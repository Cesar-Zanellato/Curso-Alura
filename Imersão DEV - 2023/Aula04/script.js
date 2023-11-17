let listaFilmes = [];
let listaTrailersFilmes = [];

function adicionarFilme(){
  let filmeFavorito = document.getElementById('filme').value;
  let trailersFilme = document.getElementById('trailer').value;

  if(filmeFavorito.endsWith("jpg") || filmeFavorito.endsWith("jpeg")){

    document.getElementById("mensagemDeErro").innerHTML = "";
    listaFilmes.push(filmeFavorito);
    listaTrailersFilmes.push(trailersFilme);

    limparCampos();
    carregarFilmes();
  }else{
    document.getElementById("mensagemDeErro").innerHTML = "Endereço de imagem inválido, tente novamente";
    limparCampos();
  };
};

function carregarFilmes(){

  let elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = "";

  for(i = 0; i < listaFilmes.length; i++){

    elementoListaFilmes.innerHTML += `<a href="${listaTrailersFilmes[i]}">
                                        <img src="${listaFilmes[i]}"/>
                                      </a>`;
  };
};

function limparCampos(){
  document.getElementById('filme').value = '';
  document.getElementById('trailer').value = '';
};