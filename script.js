let lista = document.getElementById("lista");
let nome = document.getElementById("nome");
let preco = document.getElementById("preco");
let total = document.getElementById("total");

let itens = JSON.parse(localStorage.getItem("itens")) || [];
mostrar();

document.getElementById("btnAdd").onclick = function() {
    let n = nome.value.trim();
    let p = parseFloat(preco.value);

    if (n !== "" && !isNaN(p)) {
        itens.push({ nome: n, preco: p });
        salvar();
        mostrar();
        nome.value = "";
        preco.value = "";
    }
};

function mostrar() {
    lista.innerHTML = "";
    let soma = 0;

    itens.forEach((obj, i) => {
        soma += obj.preco;

        let li = document.createElement("li");
        li.innerHTML = obj.nome + " - R$ " + obj.preco.toFixed(2) +
        "<span>" +
        "<button onclick='excluir(" + i + ")'>X</button>" +
        "</span>";
        lista.appendChild(li);
    });

    total.innerHTML = "Total estimado: R$ " + soma.toFixed(2);
}

function excluir(i) {
    itens.splice(i, 1);
    salvar();
    mostrar();
}

function salvar() {
    localStorage.setItem("itens", JSON.stringify(itens));
}