// cria referência aos elementos da página 
// CAIXAS
const frm2 = document.querySelector("form#frmPrincipal2")
const imagem2 = document.querySelector("#caixas")
const spanTotal2 = document.querySelector("#spanTotal2")

let valorCaixa = 31
let quant2 = 1

// CESTAS
// adiciona "ouvinte" de eventos ao programa
frm2.selCaixa.addEventListener("change", () => {
    valorCaixa = 31
    if (frm2.selCaixa.value == "caixaFirst") {
        imagem2.src = "caixa1.png"
    } else if (frm2.selCaixa.value == "caixaSecond") {
        imagem2.src = "caixa2.png"
        valorCaixa = 54
    } else if (frm2.selCaixa.value == "caixaThird") {
        imagem2.src = "caixa4.png"
        valorCaixa = 46
    }
    mostrarTotal2()
})

function mostrarTotal2() {
    const total2 = quant2 * valorCaixa
    //  muda o conteúdo de uma parte da página
    spanTotal2.innerText =
        total2.toLocaleString("pt-br", { minimumFractionDigits: 2 })
}

//  quando a página é carregada
window.addEventListener("load", () => {
    mostrarTotal2()
})

frm2.selQuant2.addEventListener("change", () => {
    quant2 = Number(frm2.selQuant2.value)
    mostrarTotal2()
})