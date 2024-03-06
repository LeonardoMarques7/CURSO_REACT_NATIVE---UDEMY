// Switch

function pedir() {
    var valor = prompt("Digite um valor de 1 a 4"); // Lembrando que ele retornará uma string

    // Convertendo para número
    var valorNumber = Number(valor);

    switch (valorNumber) {
        case 1:
            alert("Você escolheu suco!");
            break;
        case 2:
            alert("Você água gelada!");
            break;
        case 3:
            alert("Você refrigerante!");
            break;
        case 4:
            alert("Você chamou o garçom!");
            break;
        default:
            alert("Escolha uma opção de 1 a 4");
            break;
    }

    // Switch com texto

    var nomeDoUser = prompt("Digite o nome do usuário");

    switch (nomeDoUser) {
        case "Leonardo":
            alert("Seu pedido será entregue em breve, Leonardo!");
            break;
        case "Daniel":
            alert("Seu pedido será entregue em breve, Daniel!");
            break;
        case "Miguel":
            alert("Seu pedido será entregue em breve, Miguel!");
            break;
        default:
            alert(
                "Seu pedido foi cancelado, por motivos de falta de autenticação1"
            );
            break;
    }
}
