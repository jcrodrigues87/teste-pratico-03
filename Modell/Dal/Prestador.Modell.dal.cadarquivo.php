<?php

    class CadArquivo{
		  private $banco;
        
        function __construct($banco) {
            $this->banco = $banco;
        }//fim do constructor
		
		 public function SelectWhere($id){
            return $this->banco->select("select * from cad_arquivo where idprestador = ?",array($id));
        }
		
		public function Criartabela(){
			$sql = "CREATE TABLE cad_arquivo (
				  id int(10) UNSIGNED NOT NULL,
				  idprestador int(10) UNSIGNED NOT NULL DEFAULT 0,
				  descricao varchar(45) NOT NULL DEFAULT '',
				  link varchar(300) NOT NULL DEFAULT '',
				  data datetime DEFAULT NULL
				) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";
				
				$this->banco->Select($sql,array());
				echo "Tabela Cadarquivo criada";
				
				$this->banco->Select("ALTER TABLE cad_arquivo   ADD PRIMARY KEY (id),  ADD KEY FK_cad_arquivo_cad_prestador (idprestador);",array());
			
				
				$this->banco->Select("ALTER TABLE cad_arquivo   MODIFY id int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;",array());
			
				
				$this->banco->Select("ALTER TABLE cad_arquivo   ADD CONSTRAINT FK_cad_arquivo_cad_prestador FOREIGN KEY (idprestador) REFERENCES cad_prestador (id);",array());
				$this->banco->Select("",array());
				
				
		}
		
		
		
	}//fim da classe