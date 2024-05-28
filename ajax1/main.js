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
    document.getElementById("caixa").innerHTML = this.responseText;
  };

  pedido.open("GET", "dados.txt", true);
  pedido.send();
}
