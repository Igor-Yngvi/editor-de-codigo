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
        },
        vbs: {
          iconPath: "icons/vbs.png",
          color: "#40dfdf"
        }
      };
      
      //Mudando o editor
      if (selectedLanguage in languageData) {
        var data = languageData[selectedLanguage];
        iconLink.href = data.iconPath;
        document.body.style.background = data.color;
      }
    }