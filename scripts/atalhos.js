// Mapeamento das linguagens aos templates de código
var codeTemplates = {
  html: `<!-- Template de código HTML -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Título da Página</title>
</head>
<body>
  <h1>Minha Página</h1>
</body>
</html>`,
  css: `/* Template de código CSS */
body {
  background-color: #f1f1f1;
  font-family: Arial, sans-serif;
}

h1 {
  color: blue;
}`,
  js: `// Template de código JavaScript
console.log("Olá, mundo!");`
};

document.addEventListener("keydown", function(event) {
  // Verifica se as teclas pressionadas são "Ctrl + Alt + T"
  if (event.ctrlKey && event.altKey && event.key === "t" && !event.defaultPrevented) {
    event.preventDefault();

    // Obtém a linguagem selecionada no seletor
    var languageSelect = document.getElementById("language-select");
    var selectedLanguage = languageSelect.options[languageSelect.selectedIndex].value;

    // Obtém o template de código correspondente à linguagem selecionada
    var templateCode = codeTemplates[selectedLanguage];

    // Preenche o editor com o template de código
    var editor = document.getElementById("editor");
    editor.textContent = templateCode;
  }
});

