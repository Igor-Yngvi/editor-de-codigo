document.getElementById("download-button").addEventListener("click", function() {
  // Exibe o formulário
  document.getElementById("filename-form").style.display = "flex";
  // Adiciona a classe 'no-scroll' ao body para desabilitar o scroll da página
  document.body.classList.add("no-scroll");
});

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
  // Obtém o nome do arquivo inserido no formulário
  var fileName = document.getElementById("filename-input").value;

  // Verifica se o nome do arquivo não está vazio
  if (fileName.trim() === "") {
    alert("Por favor, insira um nome de arquivo válido.");
    return;
  }

  var languageSelect = document.getElementById("language-select");
  var language = languageSelect.options[languageSelect.selectedIndex].value;
  var code = document.getElementById("editor").textContent;

  fileName += "." + language;

  var element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(code));
  element.setAttribute("download", fileName);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);

  // Esconde o formulário
  document.getElementById("filename-form").style.display = "none";
  // Remove a classe 'no-scroll' do body para habilitar o scroll da página
  document.body.classList.remove("no-scroll");
});

document.addEventListener("keydown", function(event) {
  // Verifica se as teclas pressionadas são "Ctrl + D"
  if (event.ctrlKey && event.key === "d") {
    event.preventDefault();

    // Dispara o evento de clique no botão de download
    document.getElementById("download-button").click();
  }
});
