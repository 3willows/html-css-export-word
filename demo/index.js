import {htmlCssExportWord} from "html-css-export-word"

const htmlInput = document.getElementById("htmlInput")
const cssInput = document.getElementById("cssInput")
const result = document.getElementById("result").contentWindow.document

const input = document.querySelector("input")
const button = document.querySelector("button")

function updateResult() {
  result.open()
  result.write(
    `<html><head><style>${cssInput.value}</style></head><body>${htmlInput.value}</body></html>`
  )
  result.close()
}

htmlInput.addEventListener("input", updateResult)
cssInput.addEventListener("input", updateResult)

button.addEventListener("click", ()=>{
  console.log("hihi")
  htmlCssExportWord(htmlInput.value, cssInput.value, input.value)
})
window.onload = updateResult()