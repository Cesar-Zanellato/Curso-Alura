let jogar = prompt("Quer jogar? (S/N)").toLocaleUpperCase;

if(jogar == "S"){
  
  const numeroSecreto = parseInt(Math.random() * 1000) + 1;
  let chute, qtdeChute = 0;

  while(chute != numeroSecreto) {

      chute = prompt("Digite um número entre 0 e 1000");
      ++qtdeChute;

    if(chute == numeroSecreto){
      alert("Acertou!");
    }else if(chute > numeroSecreto){
      alert(`Errou... o número secreto é menor do que: ${chute} \nVocê já deu ${qtdeChute} chutes.`);
    }else if(chute < numeroSecreto){
      alert(`Errou... o número secreto é maior do que: ${chute} \nVocê já deu ${qtdeChute} chutes.`);
    };

    if(qtdeChute == 10){
      alert("Você atingiu o número máximo de tentativas.");
      break;
    };
  };
};