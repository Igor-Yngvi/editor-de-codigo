// Função para alterar a cor do texto com base nas tags da linguagem selecionada
function changeTextColor() {
  var languageSelect = document.getElementById("language-select");
  var selectedLanguage = languageSelect.value;

  var editor = document.getElementById("editor");
  var code = editor.innerHTML;

  // Objeto com mapeamento de tags para cores
  var tagColors = {
    html: {
      tag: "&lt;[a-z]+&gt;",
      color: "#e96228"
    },
    css: {
      tag: "[a-z-]+(?=[:{])",
      color: "#2862e9"
    },
    js: {
      tag: "[a-zA-Z]+(?=\()",
      color: "#efd81d"
    },
    vbs: {
      tag: "[a-zA-Z]+(?=\()",
      color: "#40dfdf"
    }
  };

  // Verifica se a linguagem selecionada está no mapeamento de tags
  if (selectedLanguage in tagColors) {
    var languageData = tagColors[selectedLanguage];
    var tagRegex = new RegExp(languageData.tag, "g");
    var color = languageData.color;

    // Aplica a cor às tags correspondentes no código
    code = code.replace(tagRegex, function(match) {
      return '<span style="color: ' + color + ';">' + match + '</span>';
    });
  }

  // Atualiza o conteúdo do editor com o código modificado
  editor.innerHTML = code;
}

// Evento 'input' para chamar a função sempre que o texto do editor for alterado
document.getElementById("editor").addEventListener("input", changeTextColor);
