    function changeIcon() {
      var languageSelect = document.getElementById("language-select");
      var icon = document.getElementById("language-icon");
      var selectedLanguage = languageSelect.value;
      
      // Defina os caminhos dos ícones correspondentes a cada linguagem
      var iconPaths = {
        html: "icons/html.png",
        css: "icons/css.png",
        js: "icons/js.png"
      };
      
      // Atualize o ícone com base na linguagem selecionada
      if (selectedLanguage in iconPaths) {
        icon.src = iconPaths[selectedLanguage];
      }
    }
