<?php

    $nome= addcslashes($_POST['nome']);
    $email= addcslashes($_POST['email']);
    $telefone= addcslashes($_POST['telefone']);
    $mensagem= addcslashes($_POST['mensagem']);

    $para = "rocha.giovanne07@gmail.com";
    $assunto = "Mensagens do meu Portifolio - GR";

    $corpo = "Nome: ".$nome. "\n".
             "Email: ".$email. "\n".
             "Telefone: ".$telefone. "\n".
             "Mensagem: ".$mensagem. "\n";

    $cabecalho = "From: ".$nome. "\n".
                "Reply-To: ".$email. "\n".
                "X=Mailer: PHP/".phpversion();


    if(mail($para, $assunto, $corpo, $cabecalho)){
        echo("Email enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o email!");
    }
?>