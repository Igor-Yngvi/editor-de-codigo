    function changeIconAndBackground() {
      var languageSelect = document.getElementById("language-select");
      var iconLink = document.getElementById("icon-link");
      var selectedLanguage = languageSelect.value;
      
      // Defina os caminhos dos ícones e cores predominantes correspondentes a cada linguagem
      var languageData = {
        txt: {
          iconPath: "icons/vscw.png",
          color: "#f2f2f2"
        },
        html: {
          iconPath: "icons/html.png",
          color: "#e96228"
        },
        css: {
          iconPath: "icons/css.png",
          color: "#2862e9"
        },
        js: {
          iconPath: "icons/js.png",
          color: "#efd81d"
        }
      };
      
      // Atualize o atributo href do link do ícone com base na linguagem selecionada
      // e atualize o fundo da página com o gradiente correspondente à cor predominante
      if (selectedLanguage in languageData) {
        var data = languageData[selectedLanguage];
        iconLink.href = data.iconPath;
        document.body.style.background = data.color;
      }
    }