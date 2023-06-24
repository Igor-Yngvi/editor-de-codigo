document.getElementById("download-button").addEventListener("click", function() {
  var languageSelect = document.getElementById("language-select");
  var language = languageSelect.options[languageSelect.selectedIndex].value;
  var code = document.getElementById("editor").textContent;

  var fileName = "code." + language;

  var element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(code));
  element.setAttribute("download", fileName);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
});