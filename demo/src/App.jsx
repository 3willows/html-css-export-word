import { useRef } from "react"
import { ComponentToPrint } from "./ComponentToPrint"
import "./App.css"
import {htmlCssExportWord} from "html-css-export-word"

function App() {
  const sourceRef = useRef(null)

  return (
    <>
      <div className="hidden">
        <ComponentToPrint ref={sourceRef} id="source-html" />
      </div>
      <button onClick={() => htmlCssExportWord(sourceRef.current.innerHTML)}>
        Download as Word.doc file
      </button>
    </>
  )
}

export default App
