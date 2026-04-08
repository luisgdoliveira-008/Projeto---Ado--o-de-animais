    
document.getElementById("FormularioAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let pet = document.querySelector('input[name="pet"]:checked');
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
    let permite = document.getElementById("permite").checked;
    let seguro = document.getElementById("seguro").checked;
    let financeiro = document.getElementById("financeiro").checked;
    let impulso = document.getElementById("impulso").checked;
    let termo = document.getElementById("termo").checked;

    let cpfCadastrados = ["125678900", "111111111"];

    if (nome.length < 3) return alert("Nome Inválido");
    if (!email.includes("@")) return alert("Email Inválido");
    if (telefone.length < 8) return alert("Telefone Inválido");
    if (cpf == "") return alert("CPF Obrigatório");
    if (cpfCadastrados.includes(cpf)) return alert("CPF já cadastrado");
    if (idade < 18) return alert("Deve ser maior de 18!");
    if (cidade == "") return alert("Cidade obrigatória");
    if (moradia == "") return alert("Moradia");
    if (!quintal) return alert("Informe sobre Quintal!");
    if (!pet) return alert("Informe se já teve pet!");
    if (horas == "" || isNaN(horas)) return alert("Horas Inválidas");
    if (motivo.length < 10) return alert("Motivo muito curto!");
    if (!termo) return alert("Aceite os termos para a adoção!");

    if (moradia == "apartamento" && quintal.value == "sim") {
        return alert("Apartamento não pode ter quintal!");
    }

    if (moradia == "apartamento" && !permite) {
        return alert("Apartamento não permite animais!");
    }

    

    alert("Formulário enviado com sucesso!");
    
});