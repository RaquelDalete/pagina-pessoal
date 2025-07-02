// Adiciona um ouvinte de evento ao formulário com o ID 'formContato'.
// O evento é disparado quando o formulário é enviado ('submit').
document.getElementById('formContato').addEventListener('submit', function(event) {
    
    // Impede o comportamento padrão do formulário (que seria recarregar a página).
    event.preventDefault();
    
    // Obtém os valores dos campos 'nome', 'email' e 'mensagem' do formulário.
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Verifica se todos os campos foram preenchidos.
    if (nome && email && mensagem) {
        // Se todos os campos estiverem preenchidos, exibe uma mensagem de sucesso.
        document.getElementById('statusMensagem').innerText = "Mensagem enviada com sucesso!";

        // Limpa os campos do formulário.
        document.getElementById('formContato').reset();
    } else {
        // Se algum campo estiver vazio, exibe uma mensagem solicitando o preenchimento.
        document.getElementById('statusMensagem').innerText = "Por favor, preencha todos os campos.";
    }
});
