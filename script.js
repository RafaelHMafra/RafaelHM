const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Os carros de competição de Le Mans utilizam motores híbridos",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "1-Certo"
            },
            {
                texto: "Não",
                afirmacao: "1-Errado"
            }
        ]
    },
    {
        enunciado: "Os carros da categoria LMP1 são os mais rápidos de Le Mans?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "2-Certo"
            },
            {
                texto: "Não",
                afirmacao: "2-Errado"
            }
        ]
    },
    {
        enunciado: "Os carros de Le Mans utilizam pneus de rua comuns?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "3-Errado"
            },
            {
                texto: "Não",
                afirmacao: "3-Certo"
            }
        ]
    },
    {
        enunciado: "A corrida de Le Mans dura 24 horas?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "4-Certo"
            },
            {
                texto: "Não",
                afirmacao: "4-Errado"
            }
        ]
    },
    {
        enunciado: "A corrida de Le Mans é realizado em circuito oval?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "5-Errado"
            },
            {
                texto: "Não",
                afirmacao: "5-Certo"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Respostas:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
