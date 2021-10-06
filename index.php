<?php
	include "conf.php";
	$prestadordal = new CadPrestadorDal($banco);
	
	if(isset($_GET['pesquisa'])){
		$registro = $prestadordal->SelectWhere($_GET['pesquisa']);
	
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
<div class="container">
<div class='row'>
			<center><h1>Listar parceiros</h1></center>
		</div>
		<div class='row'>
			<div col='col'>
				<a href='index.php' class='btn btn-primary'>Listagem</a> 
				<a href='cadastro.php'  class='btn btn-primary'>Cadastrar</a>
				<a href='configuracao.php' class='btn btn-primary'>Configuracao</a>
			</div>
		</div>
	
	<form action='' method='get'>
		<label>Pesquisar</label>
			<input type='text' name='pesquisa' value="<?php if(isset($_GET['pesquisa'])){echo $_GET['pesquisa'];}?>">
			<input type='submit' name='Buscar' value='Buscar'>
	</form>
   
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
						if(isset($_GET['pesquisa']))
						{
							echo "?pesquisa=".$_GET['pesquisa'];
						}
					echo "'>Ocultar</a></td>";
					echo "</tr>";
				}else{	
					echo "<td><a href='?&id={$row['id']}";
						if(isset($_GET['pesquisa']))
						{
							echo "&pesquisa=".$_GET['pesquisa'];
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
</body>
</html >