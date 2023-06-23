// autocompletar.js

// Sugestões de autocompletar para cada linguagem
const suggestions = {
  html: [
    "<!DOCTYPE html>",
    "<html>",
    "<head>",
    "<title></title>",
    "</head>",
    "<body>",
    "</body>",
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
const editor = document.getElementById("editor");
const suggestionsContainer = document.getElementById("suggestions-container");

// Adicionar evento de digitação no editor de código
editor.addEventListener("input", function() {
  const text = editor.innerText;
  const languageSelect = document.getElementById("language-select");
  const selectedLanguage = languageSelect.value;
  const selectedSuggestions = suggestions[selectedLanguage];

  if (selectedSuggestions) {
    const filteredSuggestions = getSuggestionsStartingWith(selectedSuggestions, text);
    showSuggestions(filteredSuggestions);
  } else {
    clearSuggestions();
  }
});

// Obter sugestões que começam com o texto digitado
function getSuggestionsStartingWith(suggestions, text) {
  return suggestions.filter(suggestion => suggestion.startsWith(text));
}

// Mostrar sugestões na tela
function showSuggestions(suggestions) {
  suggestionsContainer.innerHTML = "";

  for (let suggestion of suggestions) {
    const suggestionItem = document.createElement("div");
    suggestionItem.classList.add("suggestion-item");
    suggestionItem.innerText = suggestion;

    suggestionsContainer.appendChild(suggestionItem);
  }
}

// Limpar as sugestões
function clearSuggestions() {
  suggestionsContainer.innerHTML = "";
}

// Adicionar evento de clique às sugestões
suggestionsContainer.addEventListener("click", function(event) {
  const clickedSuggestion = event.target.innerText;
  const currentText = editor.innerText;
  const newText = currentText.replace(/\s+$/, "") + clickedSuggestion;
  editor.innerText = newText;
  clearSuggestions();
});
