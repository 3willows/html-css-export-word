# html-css-export-word

A function that converts CSS-styled HTML to a "single-page web page", which can be opened, edited, and saved on Microsoft Word for Mac.

## Origins

This is a port of [jQuery-Export-Word](https://github.com/markswindoll/jQuery-Word-Export), only with the jQuery-specific syntax removed, and the image-processing functionality removed. The hard work was already done by [Mark Swindoll](https://github.com/markswindoll) 10 years ago in 2014.

## Other tools

My research on other similiar existing tools are in this [Stack Overflow answer](https://stackoverflow.com/a/78373506/19767032).

Specially, on the server side, [pandoc-server](https://pandoc.org/pandoc-server.html) in pandoc is worth considering. But it comes with some extra costs as elaborated in my answer [above](https://stackoverflow.com/a/78373506/19767032).

On the choice of .doc over .docx, see this [article](https://github.com/metanorma/html2doc/wiki/Why-not-docx%3F) for [this Ruby tool](https://github.com/metanorma/html2doc).

## Demo

[Interactive demo](https://3willows.github.io/html-css-export-word-demo/): enter html and css and download the resulting Word file. 
[Example in use](https://3willows.github.io/barAdmission/#/info): the "Download as Word.doc file" button at the lower right corner.

On your local machine:

```bash
npm run test
# Installs and opens a Vite website on your local machine.
# See "demo/src/ComponentToPrint.jsx"and "demo/src/App.jsx".
```

## Usage

### React

```jsx
import {htmlCssExportWord} from "html-css-export-word"

<div className="hidden">
    <ComponentToPrint ref={sourceRef} id="source-html" />
</div>
<button onClick={() => {
    htmlCssExportWord(
    sourceRef.current.innerHTML, cssFile, 
    "exported-document.doc")}}>
    Download as Word.doc file
</button>
```

## How it works

1. Imports:

- The "file-saver" module is imported to save files generated on the client-side.

2. Function Declaration:

- The function has three parameters:
  - **html**: HTML content to be exported to Word.
  - **styles**: Optional CSS styles to be applied to the exported content. Defaults to an empty string.
  - **filename**: Optional filename for the exported Word document. Defaults to "exported-document.doc".

3. Generating MHTML:

- The function prepares a representation of the content in MHTML format. MHTML is a way to package HTML content along with its resources like images and stylesheets into a single file.
- Specifically, the function defines
  - a template for the top part of the MHTML file, including metadata and the HTML content.
  - a template for the bottom part of the MHTML file.
- The function then aggregates these templates and the actual HTML content into a single string representing the entire MHTML file.

4. Creating Blob:

- The function then creates a Blob (Binary Large Object) containing the MHTML content. A Blob represents raw data and can be of any type.
- The Blob constructor takes two parameters: an array containing the data, and an options object specifying the MIME type: in this case `application/msword;charset=utf-8`.

5. Saving the File:

- The function uses the imported saveAs function to save the Blob as a file with the specified filename.

## Compatibility

- I have yet to consider a systematic way on testing on different devices. Based on anecodtal reports.

- Does *not* work on:
  - Mobile
  - Linux ubuntu 24.04 + Chrome

- Works on:
  - Windows 11 + Chrome
  - Mac 14.4.1 + Chrome + Firefoox

## Limitations

- Microsoft Word cannot correct display many CSS features. In particular, neither flexbox nor grid is supported.
- I have considered adding support by using polyfills (with [flexibility](https://github.com/FremyCompany/css-grid-polyfill) for flex and [css-grid-polyfill](https://github.com/jonathantneal/flexibility) for grid): but have not decided whether to spend the time to do so.

## To do

- Dedicated online demo (with iframe for user-created HTML and CSS)
- Detailed tutorial for plain HTML
- Change test script: even though it is innocuous, [socket.dev](https://socket.dev/npm/package/html-css-export-word/overview/0.0.11) sees the install scripts as a supply chain vulnerability.
- (Possible future modification, inspired by a conversation with [Georgios Christou](linkedin.com/in/georgioschristou)) add an optional 4th argument so that user can download data in different [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types).
  
## Contact

- Under active development by rubbercapybara until at least 1 June 2024.

- Issues/comments:
  
    - comment on this [Code Review Stack Exchange question](https://codereview.stackexchange.com/questions/291920/convert-css-styled-html-to-word-file-without-a-server)
    - open [Github issue](https://github.com/3willows/html-css-export-word/issues)

- As explained in this [post](https://dev.to/andyrichardsonn/how-i-exploited-npm-downloads-and-why-you-shouldn-t-trust-them-4bme), npm downloads are not an accurate guide to actual usage. If you are a human who actually tried this tool, say hi by opening issue/sending email!
