<?php
    //devolve as boas vindas ao utilizador com nome e apelido

    if(isset($_GET['n']) and isset($_GET['a'])){
        $nome = $_GET['n'];
        $apelido = $_GET['a'];
        $frase_final = "Seja bem vindo ao servidor, Sr(a) $nome $apelido";
        echo $frase_final;
    }
?>