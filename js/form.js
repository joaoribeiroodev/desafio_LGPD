
//class contato

class Contato {

    constructor(nome, sobrenome, email, cpf, telefone, mensagem, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.mensagem = mensagem;
        this.contato = contato;
    }

}


function Post(event, form) {

    event.preventDefault();

    const data = new Contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("mensagem").value,
        form.elements.namedItem("contato").value
    );

    Enviar(data);

    document.getElementById("formulario").reset();

}

function Enviar(data) {

    if (data.nome !== "") {

        alert(`Obrigado sr(a) ${data.nome} ${data.sobrenome} seus dados foram encaminhados com sucesso!`);

        console.log(data);
    }

}

const checkboxTermos = document.getElementById("termos");
const btnEnviar = document.getElementById("btnEnviar");

checkboxTermos.addEventListener("change", function () {
    btnEnviar.disabled = !this.checked;
});