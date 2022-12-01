// cria referência aos elementos da página 
// CESTAS
const frm = document.querySelector("form#frmPrincipal")
const imagem = document.querySelector("#cestas")
const spanTotal = document.querySelector("#spanTotal")

let valorCesta = 250
let quant = 1

// CESTAS
// adiciona "ouvinte" de eventos ao programa
frm.selCesta.addEventListener("change", () => {
  valorCesta = 250
  if (frm.selCesta.value == "magiam") {
    imagem.src = "cesta1.png"
  } else if (frm.selCesta.value == "magiag") {
    imagem.src = "cesta2.png"
    valorCesta = 239
  } else if (frm.selCesta.value == "magiap") {
    imagem.src = "cesta3.png"
    valorCesta = 166
  }
  mostrarTotal()
})

function mostrarTotal() {
  const total = quant * valorCesta
  //  muda o conteúdo de uma parte da página
  spanTotal.innerText =
    total.toLocaleString("pt-br", { minimumFractionDigits: 2 })
}

//  quando a página é carregada
window.addEventListener("load", () => {
  mostrarTotal()
})

frm.selQuant.addEventListener("change", () => {
  quant = Number(frm.selQuant.value)
  mostrarTotal()
})