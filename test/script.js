const htmlCssExportWord = require("html-css-export-word")

const html = `<h1>Hello World!</h1>
<body>
  <button id="btn">Click me</button>
</body>`

const styles = `
$blue: #a3d5d3;

body {
  background-color: $blue;
}
`

htmlCssExportWord(html)
