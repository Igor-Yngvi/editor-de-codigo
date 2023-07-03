Dim sourceURL, destinationPath

sourceURL = "URL_DO_ARQUIVO" ' Substitua pela URL do arquivo a ser baixado
destinationPath = "CAMINHO_DE_DESTINO" ' Substitua pelo caminho completo onde deseja salvar o arquivo, incluindo o nome do arquivo

' Cria um objeto do Internet Explorer
Set ie = CreateObject("InternetExplorer.Application")

' Define algumas propriedades para garantir o download automático
ie.Visible = False ' Define o Internet Explorer para ser executado em segundo plano
ie.Navigate sourceURL ' Abre a URL do arquivo

' Aguarda até que o download seja concluído
Do While ie.Busy Or ie.ReadyState <> 4
    WScript.Sleep 100
Loop

' Obtém o elemento do link para o arquivo
Set link = ie.Document.getElementById("ELEMENTO_DO_LINK") ' Substitua "ELEMENTO_DO_LINK" pelo ID ou nome do elemento link

' Clica no link para iniciar o download
link.Click

' Aguarda até que o download seja concluído
Do While ie.Busy Or ie.ReadyState <> 4
    WScript.Sleep 100
Loop

' Fecha o Internet Explorer
ie.Quit

' Move o arquivo para o destino especificado
Set fso = CreateObject("Scripting.FileSystemObject")
fso.MoveFile "C:\Caminho\Para\O\Arquivo\Baixado", destinationPath ' Substitua "C:\Caminho\Para\O\Arquivo\Baixado" pelo caminho do arquivo baixado

' Exibe uma mensagem informando que o download foi concluído
MsgBox "O download foi concluído e o arquivo foi salvo em: " & destinationPath, vbInformation
