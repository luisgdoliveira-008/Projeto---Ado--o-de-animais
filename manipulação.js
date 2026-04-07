document.getElementById("formAdocao").addEventListener("submit", function (e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let moradia = document.getElementById("moradia").value;
  let quintal = document.querySelector('input[name="quintal"]:checked');
  let pet = document.querySelector('input[name="pet"]:checked');
  let telefone = document.getElementById("moradia").value;
  let cpf = document.getElementById("cpf").value;
  let idade = document.getElementById("idade").value;
  let cidade = document.querySelector('input[name="cidade"]:checked');
  let horas = document.querySelector('input[name="horas"]:checked');
  let motivo = document.querySelector('input[name="motivo"]:checked');
  let aceitar= document.querySelector('input[name="aceitar"]:checked');






  if(nome.length < 3) return alert("Nome Inválido");

  document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;
});