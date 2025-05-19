
const blocos = [
    "Kaizen significa <strong>melhoria contínua</strong>. É um conceito japonês que envolve todos na organização.",
  "O foco do Kaizen está em <em>melhorar processos continuamente</em>, mesmo que em pequenos passos.",
  "Envolver todos os colaboradores é essencial: <u>do chão de fábrica à diretoria</u>.",
  "A filosofia Kaizen preza por eliminar desperdícios e aumentar a eficiência.",
  "Ela é base para outras ferramentas como os 5S, PDCA e o Diagrama de Ishikawa."
];

let indiceAtual = 0
const divTexto = document.getElementById("blocoTexto");
const botao = document.getElementById("botaoAvancar");

function mostrarTexto() {
    if (indiceAtual < blocos.length) {
        divTexto.innerHTML = blocos[indiceAtual];
        indiceAtual++;
    } else {
        divTexto.innerHTML = "🌟 Fim do conteúdo sobre Kaizen! Você pode voltar ou revisar.";
        botao.disabled = true;
        botao.textContent = "Concluído";
    }
}

botao.addEventListener("click", mostrarTexto);

mostrarTexto();

