//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function limparCampo(){
  let campo = document.querySelector('input');
  campo.value = '';
}

function adicionarAmigo(){
  let nome = document.getElementById('amigo').value;

  if(nome === null){
    alert("Digite um nome válido");
    return;
  }

  if(amigos.includes(nome)){
    alert('Este nome já foi adicionado');
    return;
  }

  amigos.push(nome);
  limparCampo();
  exibirAmigos();
  console.log(amigos);
}

function exibirAmigos(){
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for(let i = 0; i < amigos.length; i++){
      const item = document.createElement("li");
      item.textContent = amigos[i];

      lista.appendChild(item);
  }
}

function pegarIndiceAleatorio(){
  let indice = parseInt(Math.random() * amigos.length);
  return amigos[indice];
}

function sortearAmigo(){
  if (amigos.length < 2) {
    alert("Adicione pelo menos 2 amigos para realizar o sorteio");
    return;
  }

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  const nome = document.createElement("li");
  nome.textContent = "O(a) amigo(a) sorteado(a) foi " + pegarIndiceAleatorio();

  resultado.appendChild(nome);
}

function reiniciar(){
  amigos = [];
  document.getElementById('listaAmigos').innerHTML = '';
  document.getElementById('resultado').innerHTML = '';
}