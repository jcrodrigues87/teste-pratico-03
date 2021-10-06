<?php	

	Class TFile{
		
		public function __construct(){}
		
		public function Gravar($arquivo,$descricao,$idprestador){
			var_dump($arquivo);
			exit;
			
			/*echo "dentro da classe:<br>";
			print_r($arquivo);
			echo "<br>";
			
			if(isset($arquivo))
			{
				$desc = str_replace(' ', '', $descricao);
				$uploaddir = 'upload/';
				$path = $_FILES['arquivo']['name'];
				$ext = pathinfo($path, PATHINFO_EXTENSION);
				$name = $idprestador."_".$descricao."_".date('d_m_Y_h_m_s').".".$ext;
				$uploadfile = $uploaddir . $name;
		
				if (move_uploaded_file($_FILES['arquivo']['tmp_name'], $uploadfile)) {
					echo "Arquivo válido e enviado com sucesso.\n";
					$sql = "insert into cad_arquivo  set 
														link = ?,
														idprestador = ?,
														descricao = ?,
														data = now()						
														";
													
					$banco->Salvar($sql,array($uploadfile,$idprestador,$descricao));
					
					
				} else {
					echo "Possível ataque de upload de arquivo!\n";
				}
			}//fim do if
			*/
		}//fim do salvar
	}//fim da classe