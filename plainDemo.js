import {htmlCssExportWord} from "./index.js"

const htmlInput = document.getElementById("htmlInput")
const cssInput = document.getElementById("cssInput")
const result = document.getElementById("result").contentWindow.document

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
  // htmlCssExportWord(htmlInput, cssInput)
})
window.onload = updateResult()