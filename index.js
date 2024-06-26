import saveAs from "file-saver"

export function htmlCssExportWord(
  html,
  styles = "",
  filename = "exported-document.doc"
) {  
  const statiC = {
    mhtml: {
      top:
        "Mime-Version: 1.0\nContent-Base: " +
        window.location.href +
        '\nContent-Type: Multipart/related; boundary="NEXT.ITEM-BOUNDARY";type="text/html"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset="utf-8"\nContent-Location: ' +
        window.location.href +
        "\n\n<!DOCTYPE html>\n<html>\n_html_</html>",
      head: '<head>\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n<style>\n_styles_\n</style>\n</head>\n',
      body: "<body>_body_</body>",
    },
  }

  // Prepare bottom of mhtml file with image data
  const mhtmlBottom = "\n" + "--NEXT.ITEM-BOUNDARY--"

  // Aggregate parts of the file together
  const fileContent =
    statiC.mhtml.top.replace(
      "_html_",
      statiC.mhtml.head.replace("_styles_", styles) +
        statiC.mhtml.body.replace("_body_", html)
    ) + mhtmlBottom

  // Create a Blob with the file contents
  const blob = new Blob([fileContent], {
    type: "application/msword;charset=utf-8",
  })
  saveAs(blob, filename)
}

