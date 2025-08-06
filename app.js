//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

function limparCampo(){
  let campo = document.querySelector('input');
  campo.value = '';
}

function adicionarAmigo(){
  let nome = document.getElementById('amigo').value;
  nomes.push(nome);
  limparCampo();
  console.log(nomes);
}