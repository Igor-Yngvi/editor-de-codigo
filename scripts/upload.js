function handleFileUpload(event) {
      var fileUpload = event.target;
      var editor = document.getElementById("editor");
      var file = fileUpload.files[0];
      var reader = new FileReader();
      
      reader.onload = function(event) {
        editor.innerHTML = "";
        var lines = event.target.result.split('\n');
        lines.forEach(function(line) {
          var span = document.createElement('span');
          span.textContent = line;
          editor.appendChild(span);
          editor.appendChild(document.createElement('br'));
        });
      };
      
      reader.readAsText(file);
}