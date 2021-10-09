<?php
    include "conf.php";
    $prestadordal = new CadPrestadorDal($banco);

    if(isset($_POST['Gravar'])){
        $cadprestadpr = new CadPrestadorEntitie();
		$cadprestadpr->setrazao($_POST['razao']);
        $cadprestadpr->setcnpj($_POST['cnpj']);
		$cadprestadpr->setdtabertura($_POST['dtabertura']);
		$cadprestadpr->setemail($_POST['email']);
		$cadprestadpr->settelefone($_POST['telefone']);
		$cadprestadpr->setcep($_POST['cep']);
		$cadprestadpr->setuf($_POST['uf']);
		$cadprestadpr->setcidade($_POST['cidade']);
		$cadprestadpr->setbairro($_POST['bairro']);
		$cadprestadpr->setrua($_POST['rua']);
		$cadprestadpr->setnumero($_POST['numero']);
        $contatos = new CadContatoEntitie();
    
        if($_POST['id'] != 'Novo'){
			$cadpessoa->setid($_POST['id']);
			$PessoaDal->Edit($cadprestadpr);
		}else{	
			
			$id = $prestadordal->insert($cadprestadpr);
           
           //insere contatos se insert do prestador tiver retornado o id
            if(!(is_null($id))){
              
                $contatos->setidprestador($id);
                $cont = count($_POST['nomecont']);
                $contatodal = new CadContatoDal($banco);
				
                for($i=0; $i < $cont; $i++){
                    $nome = $_POST['nomecont'][$i];
                    $departamento =  $_POST['departamentocont'][$i];
                    $email = $_POST['emailcont'][$i];
                    $contatos->setnome($nome);
                    $contatos->setdepartamento($departamento);
                    $contatos->setemail($email);
                    $contatodal->Insert($contatos);
                }//fim do for
				
				/*Gravando os arquivos*/
				$arquivo = $_FILES['arquivo'];
				for ($cont = 0;$cont < count($arquivo);$cont++){
					if(isset($_POST['descricaoarquivo'][$cont])){
						$desc = str_replace(' ', '', $_POST['descricaoarquivo'][$cont]);
						$path =  $arquivo['name'][$cont];
						$ext = pathinfo($path, PATHINFO_EXTENSION);
						$destino = "upload/".$id."_".$desc.".".$ext;
						if(move_uploaded_file($arquivo['tmp_name'][$cont],$destino)){
							$sql = "insert into cad_arquivo  set 
															link = ?,
															idprestador = ?,
															descricao = ?,
															data = now()						
															";
														
								$banco->Insert($sql,array($destino,$id,$_POST['descricaoarquivo'][$cont]));
						}
					
						else{
							echo "erro";
						}
					}
				}//fim do for
				
				/*fim da gravacao de arquivos*/
				?>
					<script>
						alert("registro gravado com sucesso");
					</script>
				<?php
				
            }

		}
        

        
	
    }//fim do insert e edit


?>
<html lang='pt-br'>
<head>
    <meta charsert='utf-8'>
    <title>Pagina</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	
	 <!-- Adicionando Javascript -->
    <script>
    
    function limpa_formulário_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }
        
    function pesquisacep(valor) {
        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('cidade').value="...";
                document.getElementById('uf').value="...";
              

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    };

    </script>
	
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
				<a class="nav-link" href="cadastro.php">Cadastrar</a>
			</li><li>	
			<a class="nav-link" href="configuracao.php">Configuração </a>
			</li>
		</ul>
	</div>
</div>
</nav>

<div class="container">
		<div class='row'><br>
			<h1><br>Cadastro</h1>
		</div>

		<form action='' method='POST' enctype="multipart/form-data">
			<div class="row">
				Id:
			</div>
			<div class="row">
				<input Readonly type='text' name='id' value='Novo'>
			</div>
			<div class="row">
				Razão Social:
			</div>
			<div class="row">
				<input type='text' name='razao' value=''>
			</div>
			<div class="row">
				Cnpj:
			</div>
			<div class="row">
				<input type='text' name='cnpj' value=''>
			</div>
			<div class="row">
				Data Abertura:
			</div>
			<div class="row">
				<input type='date' name='dtabertura' value=''>
			</div>
			<div class="row">
				Telefone:
			</div>
			<div class="row">
				<input type='text' name='telefone' value=''>
			</div>
			<div class="row">
				Email:
			</div>
			<div class="row">
				<input type='Email' required name='email' value=''>
			</div>
			<div class="row">
				Cep:
			</div>
			<div class="row">
				<input type='text' id='cep' name='cep' value='' maxlength="9" onblur="pesquisacep(this.value);">
			</div>
			<div class="row">
				Estado:
			</div>
			<div class="row">
				<input type='text' id='uf' name='uf' value=''>
			</div>
			<div class="row">
				Cidade:
			</div>
			<div class="row">
				<input type='text' id='cidade' name='cidade' value=''>
			</div>
			<div class="row">
				Bairro:
			</div>
			<div class="row">
				<input type='text' name='bairro' value=''>
			</div>
			<div class="row">
				Rua:
			</div>
			<div class="row">
				<input type='text' name='rua' value=''>
			</div>
			<div class="row">
				Numero:
			</div>
			<div class="row">
				<input type='text' name='numero' value=''>
			</div>
			
			<br>
			<b><h2>Contato</h2></b>
			<br>
			<div id='formacao'>
				<button type='button' id='addcontato'>Adicionar Novo Contato</button><br>
				<div class="row">
					Nome.:<input size='60' type='text' name='nomecont[]' value=''> 
					Departamento.:<input type='text' name='departamentocont[]' value='' required> 
					E-mail.:<input type='email' name='emailcont[]' value=''required >
				</div>
				 
			</div>
			<hr>
			<div class='row'>
				<div id='formacaoarquivo'>
					<button type='button' id='addarquivo'>Adicionar outros Arquivo</button><br><br>       
					<div class='row'>
						Descricao.:
						<input type='text' size='20' name='descricaoarquivo[]' value='Alvará de Funcionamento'>
						<input type='file' name='arquivo[]' value=''><br>
					</div>
					<div class='row'>	
						Descricao.:
						<input type='text'  size='45' name='descricaoarquivo[]' required value='Comprovante de Endereço'>
						<input type='file' name='arquivo[]' required value=''><br>
					</div>
				</div>
				<br>
				<br>
				<div class='row'>
					<br><input type='submit' name='Gravar' value='Gravar'>
				</div>
			</div>
		</form>

		<script>
			$("#addcontato").click(function(){
				$("#formacao").append("<div class='row'>Nome.:<input type='text' name='nomecont[]' value=''>");
				$("#formacao").append("Departamento.:<input type='text' name='departamentocont[]' value=''>");
				$("#formacao").append("  E-mail.:<input type='email' name='emailcont[]' value=''></div>");
			});

				
			$("#addarquivo").click(function(){
				$("#formacaoarquivo").append("Descricao.:<input type='text'  size='45' name='descricaoarquivo[]' value=''><input type='file' name='arquivo[]' value=''><br>");
			});
		</script>
	</div>
	
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script>

</body>
</html >