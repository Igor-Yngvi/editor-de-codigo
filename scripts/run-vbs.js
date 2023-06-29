function executarVBS() {
  var shell = new ActiveXObject("WScript.Shell");
  shell.Run("caminho_completo_para_o_arquivo/download.vbs", 1, false);
}