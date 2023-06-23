// autocompletar.js

// Sugestões de autocompletar para cada linguagem
const suggestions = {
  html: [
    "<!DOCTYPE html>",
    "<html>",
    "  <head>",
    "    <title></title>",
    "  </head>",
    "  <body>",
    "    ",
    "  </body>",
    "</html>"
  ],
  css: [
    "body {",
    "  ",
    "}",
    "",
    ".container {",
    "  ",
    "}",
    "",
    ".btn {",
    "  ",
    "}"
  ],
  js: [
    "function functionName() {",
    "  ",
    "}",
    "",
    "const variableName = ",
    "",
    "if (condition) {",
    "  ",
    "} else {",
    "  ",
    "}"
  ]
};

// Selecionar elementos
const languageSelect = document.getElementById("language-select");
const editor = document.getElementById("editor");

// Adicionar evento de alteração do seletor de linguagem
languageSelect.addEventListener("change", function() {
  const selectedLanguage = languageSelect.value;
  const selectedSuggestions = suggestions[selectedLanguage];

  if (selectedSuggestions) {
    const datalist = generateDatalist(selectedSuggestions);
    editor.setAttribute("list", datalist.id);
    editor.parentNode.appendChild(datalist);
  } else {
    editor.removeAttribute("list");
  }
});

// Gerar o elemento datalist com as sugestões de autocompletar
function generateDatalist(suggestions) {
  const datalist = document.createElement("datalist");

  const id = "suggestions-" + Math.random().toString(36).substr(2, 9);
  datalist.id = id;

  for (let suggestion of suggestions) {
    const option = document.createElement("option");
    option.value = suggestion;
    datalist.appendChild(option);
  }

  return datalist;
}
