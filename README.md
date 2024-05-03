# html-css-export-word

A function that converts CSS-styled HTML to a "single-page web page", which can be opened, edited, and saved on Microsoft Word for Mac.

## Demo

[Online](https://3willows.github.io/barAdmission/#/info): click on the lower right hand corner button

(Dedicated demo (with iframe for user-created HTML and CSS) to follow)

On your local machine:

```bash
npm run test
```

(Installs and opens a Vite website on your local machine.)

(The HTML is in "ComponentToPrint.jsx" and the function is called in "App.jsx".)

## Usage

# React
```js
import {htmlCssExportWord} from "html-css-export-word"

<div className="hidden">
    <ComponentToPrint ref={sourceRef} id="source-html" />
</div>
<button onClick={() => htmlCssExportWord(sourceRef.current.innerHTML, cssFile, "exported-document.doc")}>
    Download as Word.doc file
</button>
```

(Detailed tutorial to follow)

## Motivation

There are already a lot of similiar tools out there. I summarise some of them in this [Stack Overflow answer](https://stackoverflow.com/a/78373506/19767032).

This particular npm package is essentially a port of [jQuery-Export-Word](https://github.com/markswindoll/jQuery-Word-Export), only with the jQuery-specific syntax removed, and the image-processing functionality removed altogether.

## How it works

(To follow)

## Limitations

Microsoft Word cannot correct display many CSS features.  In particular, neither flexbox nor grid is supported.  I have considered adding support by using polyfills (with [flexibility](https://github.com/FremyCompany/css-grid-polyfill) for flex and [css-grid-polyfill](https://github.com/jonathantneal/flexibility) for grid): but have not decided whether to spend the time to do so.

## Issues/suggestions/contibution/feature request

Under active development by rubbercapybara until at least 1 June 2024.

Issues/suggestions/contributions/feature request: open [Github issue](https://github.com/3willows/html-css-export-word/issues) or email rubbercapybara@gmail.com 
