$(document).ready(function () {
  $("#cmd").click(function () {
    $("#caixa").load("dadosx.txt", function (responseTxt, statusTxt, xhr) {
      if (statusTxt == "success") {
        alert("Aconteceu uma comunicação com sucesso.");
      }

      if (statusTxt == "error") {
        // alert("Aconteceu uma error na comunicação.");
        alert("Erro: " + xhr.status + ": " + xhr.statusText);
      }
    });
  });
});
