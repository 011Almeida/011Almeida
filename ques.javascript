document.getElementById('questionario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const idade = document.querySelector('input[name="idade"]:checked').value;
    const comentarios = document.getElementById('comentarios').value;

    // Exibe os dados em um alerta (ou pode enviar para um servidor)
    alert(`Nome: ${nome}\nIdade: ${idade}\nComentários: ${comentarios}`);

    // Limpa o formulário
    this.reset();
});
