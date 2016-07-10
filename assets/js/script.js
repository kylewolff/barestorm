$(document).ready(function() {
  $('#jBold').click(function() {
    document.execCommand('bold');
  });
  $('#jUnderline').click(function() {
    document.execCommand('underline');
  });
   $('#jItalic').click(function() {
    document.execCommand('italic');
  });
  function changeFont() {
    document.execCommand("fontSize", false, "7");
    var fontElements = document.getElementsByTagName("font");
    for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == "7") {
            fontElements[i].removeAttribute("size");
            fontElements[i].style.fontSize = "30px";
        }
    }
}):
