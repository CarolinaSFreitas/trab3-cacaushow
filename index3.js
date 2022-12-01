// cria referência aos elementos da página 
// PANETONES
const frm3 = document.querySelector("form#frmPrincipal3")
const imagem3 = document.querySelector("#panetones")
const spanTotal3 = document.querySelector("#spanTotal3")

let valorPanetone = 130
let quant3 = 1

// CESTAS
// adiciona "ouvinte" de eventos ao programa
frm3.selPanetone.addEventListener("change", () => {
    valorPanetone = 130
    if (frm3.selPanetone.value == "panetoneFirst") {
        imagem3.src = "panetone1.png"
    } else if (frm3.selPanetone.value == "panetoneSecond") {
        imagem3.src = "panetone2.png"
        valorPanetone = 105
    } else if (frm3.selPanetone.value == "panetoneThird") {
        imagem3.src = "panetone3.png"
        valorPanetone = 110
    }
    mostrarTotal3()
})

function mostrarTotal3() {
    const total3 = quant3 * valorPanetone
    //  muda o conteúdo de uma parte da página
    spanTotal3.innerText =
        total3.toLocaleString("pt-br", { minimumFractionDigits: 2 })
}

//  quando a página é carregada
window.addEventListener("load", () => {
    mostrarTotal3()
})

frm3.selQuant3.addEventListener("change", () => {
    quant3 = Number(frm3.selQuant3.value)
    mostrarTotal3()
})