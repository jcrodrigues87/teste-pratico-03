<?php

    if(isset($_POST['Salvar'])){
        $arquivo = fopen('conf.ini','w');
        if ($arquivo == false) die('Não foi mecher no no arquivo.');
			$aux = "[conexao]
			host=".$_POST['host']."
			user=".$_POST['user']."
			psw=".$_POST['psw']."
			database=".$_POST['database']."
			";
			fwrite($arquivo,$aux);
			fclose($arquivo);
		}

    $conf = parse_ini_file("conf.ini");
?>
<html lang='pt-br'>
<head>
    <meta charsert='utf-8'>
    <title>Configuracao Banco de Dados</title>
</head>
<body>
    <a href='index.php'>Voltar</a>
    <h1>Configuracao Banco de Dados</h1>

    <form method='POST'>
        Host.:<input type='text' value='<?php echo $conf['host'];?>' name='host'>
        Usuario.:<input type='text' value='<?php echo $conf['user'];?>' name='user'>
        Senha.:<input type='text' value='<?php echo $conf['psw'];?>' name='psw'>
        Database.:<input type='text' value='<?php echo $conf['database'];?>' name='database'>
        <input type='submit' value='Salvar' name='Salvar'>
    </form>
    
    <?php
        //verificando se conectou co, sucesso
        include "modell/DataAcess/Prestador.Model.Database.php";
        if($banco = new Database('conf.ini')){
            echo "<h2>sucesso ao conectar com banco de dados</h2>";
			echo "<a href='configuracao.php?table=true'>Criar tabelas</a>";
			
			if(isset($_GET['table'])){
				
				include "modell/dal/Prestador.modell.dal.cadprestador.php";
				include "modell/dal/Prestador.modell.dal.cadcontato.php";
				include "modell/dal/Prestador.modell.dal.cadarquivo.php";	
				
				
				$banco = new Database('conf.ini');
				$prestadordal = new CadPrestadorDal($banco);
				$contatos = new CadContatoDal($banco);
				$arquivos = new CadArquivo($banco);
				
				$prestadordal->Criartabela();
				$contatos->Criartabela();
				$arquivos->Criartabela();
				
			}
			
        }
        else{
            echo "erro ao conectar banco";
        }
        
    ?>



</body>
</html >