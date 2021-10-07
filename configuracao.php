<?php
	include "modell/DataAcess/Prestador.Model.Database.php";
	include "modell/dal/Prestador.modell.dal.cadprestador.php";
	include "modell/dal/Prestador.modell.dal.cadcontato.php";
	include "modell/dal/Prestador.modell.dal.cadarquivo.php";	
				
				
	
    
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
			header("location:configuracao.php");
		}
	

    $conf = parse_ini_file("conf.ini");
?>
<html lang='pt-br'>
<head>
    <meta charsert='utf-8'>
    <title>Configuracao Banco de Dados</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark style="background-color: #ffffff;">
  <div class="container">
  <a class="navbar-brand" href="#">Prestador de Serviço</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>

	<div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item active">
				<a class="nav-link" href="index.php">Home </a>
			</li><li>
				<a class="nav-link" href="cadastro.php">Cadastrar </a>
			</li><li>	
			<a class="nav-link" href="configuracao.php">Configuração   </a>
			</li>
		</ul>
				
		
	</div>
</div>
</nav>
<div class='container'>


    
    <h1>Configuracao Banco de Dados</h1>

    <form method='POST'>
        <div class='row'>Host.:</div><div class='row'><input type='text' value='<?php echo $conf['host'];?>' name='host'></div>
        <div class='row'>Usuario.:</div><div class='row'><input type='text' value='<?php echo $conf['user'];?>' name='user'><br></div>
        <div class='row'>Senha.:</div><div class='row'><input type='text' value='<?php echo $conf['psw'];?>' name='psw'><br></div>
        <div class='row'>Database.:</div><div class='row'><input type='text' value='<?php echo $conf['database'];?>' name='database'><br><br>
        <input type='submit' value='Salvar' name='Salvar'>
    </form>
    
    <?php
        //verificando se conectou co, sucesso
        
        if($banco = new Database('conf.ini')){
            echo "<h2>sucesso ao conectar com banco de dados</h2>";
			echo "<a href='configuracao.php?table=true'>Criar tabelas</a>";
			if(isset($_GET['table']))
			{
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
</div>


</body>
</html >