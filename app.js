//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function limparCampo(){
  let campo = document.querySelector('input');
  campo.value = '';
}

function adicionarAmigo(){
  let nome = document.getElementById('amigo').value;
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