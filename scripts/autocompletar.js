// Lista de sugestões por linguagem
const suggestions = {
  html: ["<!DOCTYPE html>", "<html>", "<head>", "<body>", "<h1>", "<p>", "<div>", "<span>", "<img>", "<a>"],
  css: ["background-color", "color", "font-family", "margin", "padding", "border", "width", "height"],
  js: ["console.log()", "function", "if", "for", "while", "var", "const", "let"]
};

// Função para exibir as sugestões
function showSuggestions() {
  const languageSelect = document.getElementById("language-select");
  const selectedLanguage = languageSelect.value;
  const editorContent = document.getElementById("editor").textContent;
  const suggestionsContainer = document.getElementById("suggestions-container");

  // Limpar sugestões anteriores
  suggestionsContainer.innerHTML = "";

  // Verificar se há texto no editor
  if (editorContent.trim().length === 0) {
    return;
  }

  // Filtrar sugestões com base no texto atual
  const filteredSuggestions = suggestions[selectedLanguage].filter((suggestion) => {
    return suggestion.startsWith(editorContent);
  });

  // Exibir as sugestões
  filteredSuggestions.forEach((suggestion) => {
    const suggestionItem = document.createElement("div");
    suggestionItem.classList.add("suggestion-item");
    suggestionItem.textContent = suggestion;

    suggestionItem.addEventListener("click", () => {
      insertSuggestion(suggestion);
    });

    suggestionsContainer.appendChild(suggestionItem);
  });
}

// Função para inserir a sugestão no editor
function insertSuggestion(suggestion) {
  const editor = document.getElementById("editor");
  const editorContent = editor.textContent;
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  const startNode = range.startContainer;
  const startOffset = range.startOffset;
  const endNode = range.endContainer;
  const endOffset = range.endOffset;

  const beforeText = editorContent.slice(0, startOffset);
  const afterText = editorContent.slice(endOffset);

  editor.textContent = beforeText + suggestion + afterText;

  // Posicionar o cursor após a inserção da sugestão
  const newRange = document.createRange();
  const newSelection = window.getSelection();

  newRange.setStartAfter(endNode);
  newRange.setEndAfter(endNode);

  newSelection.removeAllRanges();
  newSelection.addRange(newRange);
}

// Evento de digitação no editor
const editor = document.getElementById("editor");
editor.addEventListener("input", showSuggestions);
