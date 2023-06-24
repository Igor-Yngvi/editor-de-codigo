const fileInput = document.getElementById('file-upload');
const editor = document.getElementById('editor');

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const fileContent = event.target.result;
    editor.innerHTML = fileContent;
  };

  reader.readAsText(file);
});