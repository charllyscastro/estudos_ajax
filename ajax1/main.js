window.onload = function () {
  document.getElementById("btn").addEventListener("click", btn_click);
};

function btn_click() {
  // document.getElementById("caixa").innerHTML = "Este é um texto alterado";

  //ajax
  //criamos o objeto request
  let pedido = new XMLHttpRequest();

  //definir a funcao que vai atuar mediante a resposta
  pedido.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("caixa").innerHTML = this.responseText;
    } else {
      document.getElementById("caixa").innerHTML = "Tente mais tarde";
    }
  };

  //preparar o pedido
  pedido.open("GET", "dados.txt", true);

  //enviar o pedido
  pedido.send();
}
