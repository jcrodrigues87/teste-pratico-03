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
</head>
<body>
<a href='index.php'>Listagem</a>   |  
<a href='cadastro.php'>Cadastrar</a>   |  

<a href='configuracao.php'>Configuracao</a><hr>
	
	<form action='' method='get'>
		<label>Pesquisar</label>
			<input type='text' name='pesquisa' value="<?php if(isset($_GET['pesquisa'])){echo $_GET['pesquisa'];}?>">
			<input type='submit' name='Buscar' value='Buscar'>
	</form>
   
    <table class='table table-hover' border=1 >
        <thead >
            <tr>
			<th>id</th>
            <th>CNPJ</th>
            <th>Razão Social</th>
            <th>Data Abertura</th>
            <th>telefone</th>
            <th>email</th>
            <th>cep</th>
            <th>estado</th>
            <th>cidade</th>
            <th>bairro</th>
            <th>rua</th>
            <th>Numero	</th>
            </tr>
        </thead>
        <tbody>
        <?php
            foreach($registro as $row){
                echo "<tr>";
				echo "<td>{$row['id']}</td>";
                echo "<td>{$row['cnpj']}</td>";
                echo "<td>{$row['razao']}</td>";
                echo "<td>{$row['dtabertura']}</td>";
                echo "<td>{$row['telefone']}</td>";
                echo "<td>{$row['email']}</td>";
                echo "<td>{$row['cep']}</td>";
                echo "<td>{$row['uf']}</td>";
                echo "<td>{$row['cidade']}</td>";
                echo "<td>{$row['bairro']}</td>";
                echo "<td>{$row['rua']}</td>";
                echo "<td>{$row['numero']}</td>";
				echo "</tr>";
              
            }
        ?>
        </body>

    </table>


</body>
</html >