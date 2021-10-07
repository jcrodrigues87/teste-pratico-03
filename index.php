<?php
	include "conf.php";
	$prestadordal = new CadPrestadorDal($banco);
	
	if(isset($_GET['Pesquisa'])){
		$registro = $prestadordal->SelectWhere($_GET['Pesquisa']);
	
	}else{
		$registro = $prestadordal->SelectWhere();
	}
	
?>
<html lang='pt-br'>
<head>
    <meta charsert='utf-8'>
    <title>Pagina</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>

<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark style="background-color: #ffffff;">
  <a class="navbar-brand" href="#">Prestador de Serviço</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>

	<div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item active">
				<a class="nav-link" href="index.php">Home <span class="sr-only">(página atual)</span> </a>
			</li><li>
				<a class="nav-link" href="cadastro.php">Cadastrar </a>
			</li><li>	
			<a class="nav-link" href="configuracao.php">Configuração </a>
			</li>
		</ul>
				<form action='' method='get' class="form-inline my-2 my-lg-0">
					<label>Pesquisar</label>
					<input type='search' class="form-control mr-sm-2" name='Pesquisa' placeholder="Pesquisar" aria-label="Pesquisar" value="<?php if(isset($_GET['Pesquisa'])){echo $_GET['Pesquisa'];}?>">
					<button class="btn btn-outline-info my-2 my-sm-0" name='Buscar' type="submit">Pesquisar</button>
				</form>
			
		
	</div>
</nav>
<div class="container">
<div class='row'>
			<h1><br>Listar parceiros</h1>
		</div>
	
	
   
    <table class='table table-hover' border=1 >
        <thead >
            <tr>
			<th>ID</th>
			 <th>Data Abertura</th>	
			<th>Razão Social / CNPJ</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereco</th>
            
            <th>Ação</th>
           
            </tr>
        </thead>
        <tbody>
        <?php
            foreach($registro as $row){
                echo "<tr>";
				echo "<td>{$row['id']}</td>";
				echo "<td>{$row['dtabertura']}</td>";
				echo "<td>{$row['razao']}<br>CNPJ:{$row['cnpj']}</td>";
				echo "<td>{$row['email']}</td>";
				echo "<td>{$row['telefone']}</td>";
				echo "<td>
						{$row['cep']} -
						{$row['cidade']}/
						{$row['uf']} -
						{$row['bairro']} - 
						{$row['rua']},
						{$row['numero']}
					</td>";

				if(isset($_GET['id'])&&($_GET['id']==$row['id'])){
					echo "<td><a href='index.php";
						if(isset($_GET['Pesquisa']))
						{
							echo "?pesquisa=".$_GET['Pesquisa'];
						}
					echo "'>Ocultar</a></td>";
					echo "</tr>";
				}else{	
					echo "<td><a href='?&id={$row['id']}";
						if(isset($_GET['pesquisa']))
						{
							echo "&pesquisa=".$_GET['Pesquisa'];
						}
					echo "'>Expandir</a></td>";
					echo "</tr>";

				}
				/*Listando contados*/
				if(isset($_GET['id'])&&($_GET['id']==$row['id'])){
					$contatos = new CadContatoDal($banco);
					$arquivos = new CadArquivo($banco);
					
					$reg = $contatos->selectwhere($_GET['id']);
					$regarq = $arquivos->selectwhere($_GET['id']);
					
					if($reg->rowcount()!=0){
						echo "<tr><th colspan='6'>Contatos</th></tr>";
						foreach($reg as $contreg){
							echo "<tr>";
								echo "<td colspan='2'>{$contreg['nome']}</td>";
								echo "<td colspan='2'>{$contreg['email']}</td>";
								echo "<td colspan='2'>{$contreg['departamento']}</td>";
							echo "</tr>";
						}
					}//fim do if
					
					//listando arquivos
					if($regarq->rowcount()!=0){
							echo "<tr><th colspan='6'>Arquivos</th></tr> <tr><td colspan=6>";
						foreach($regarq as $contreg){
							echo "<a download href='{$contreg['link']}'>{$contreg['descricao']}</a> | ";
						}
						echo "</td></tr>";
					}
					//fim da listagem dos arquivos
					
				}//fim do if
              
            }//fim do foreach
        ?>
        </body>

    </table>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script>

</body>
</html >