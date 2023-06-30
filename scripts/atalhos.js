// Mapeamento das linguagens aos templates de código
var codeTemplates = {
  txt: `
Editor de Código Web,
V 0.6, 
Ultima atualização: 30/06/2023,
Criador: Igor Henrique da Silva`,
  html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Título da Página</title>
</head>
<body>
</body>
</html>`,
  css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  font-family: Arial, sans-serif;
}`,
  js: `console.log("Olá, mundo!");`
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

