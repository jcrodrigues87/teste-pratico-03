<?php

    class CadPrestadorDal{

        private $banco;
        
        function __construct($banco) {
            $this->banco = $banco;
        }//fim do constructor

        /*GetWhere*/
        public function SelectWhere($filter = null){
            return $this->banco->select("select * from cad_prestador where (cnpj like '%{$filter}%') or (razao like '%{$filter}%') or (email like '%{$filter}%')",array());        }
        //fim da getwhere
        
        //inicio do insert
        public function insert($entitties){
			
			//verifica se ja existe email/*
			$email = $this->banco->select('SELECT id FROM cad_prestador c where email = ? ',
											array(
												
												$entitties->getemail()
											)
										);
		
			if($email->rowcount()==0){
				$sql = "insert into cad_prestador  set razao =? ,
												dtabertura =? ,
												cnpj = ?,
												telefone  =? ,
												cep  =? ,
												uf  =? ,
												cidade  =? ,
												bairro =? ,
												rua =? ,
												numero =? ,
												email = ?";
			
			
					$dado = array(
									$entitties->getrazao(),
									$entitties->getdtabertura(),
									$entitties->getcnpj(),
									$entitties->gettelefone(),
									$entitties->getcep(),
									$entitties->getuf(),
									$entitties->getcidade(),
									$entitties->getbairro(),
									$entitties->getrua(),
									$entitties->getnumero(),
									$entitties->getemail()
								
					);
					$id = $this->banco->Insert($sql,$dado);
					return $id;
				
					
				
				
			}else{
				return null;
				?>
					<script>alert('Email ja existe')</script>
				<?php
			}
			
			
			
			
		}//fim do insert
		//*********************************************************************************************
			public function Edit($entitties){

				$sql = "update cad_pessoa  set razao =? ,
												dtabertura =? ,
												telefone  =? ,
												cep  =? ,
												uf  =? ,
												cidade  =? ,
												bairro =? ,
												rua =? ,
												numero =? ,
												email = ?,
												complemento =? 
						where id= ?	";
			
			
					$dado = array(
									$entitties->getrazao(),
									$entitties->getdtabertura(),
									$entitties->gettelefone(),
									$entitties->getcep(),
									$entitties->getuf(),
									$entitties->getcidade(),
									$entitties->getbairro(),
									$entitties->getrua(),
									$entitties->getnumero(),
									$entitties->getemail(),
									$entitties->getcomplemento(),
									$entitties->getid()
					);
					
				$this->banco->Insert($sql,$dado);
				$id = $entitties->getid();
		}//fim do Edit
		
		//funcao cria tabela
		public function Criartabela(){
			$sql = "CREATE TABLE cad_prestador (
						  id int(10) UNSIGNED NOT NULL,
						  cnpj varchar(18) DEFAULT NULL,
						  razao varchar(60) DEFAULT NULL,
						  dtabertura date DEFAULT NULL,
						  telefone varchar(25) DEFAULT NULL,
						  email varchar(100) DEFAULT NULL,
						  cep varchar(12) DEFAULT NULL,
						  uf varchar(2) DEFAULT NULL,
						  cidade varchar(45) DEFAULT NULL,
						  bairro varchar(45) DEFAULT NULL,
						  rua varchar(45) DEFAULT NULL,
						  numero varchar(20) DEFAULT NULL
						) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";
				
				$this->banco->Select($sql,array());
				echo "Tabela Cadarquivo criada";
				
				$this->banco->Select("ALTER TABLE cad_prestador  ADD PRIMARY KEY (id);",array());
			
				
				$this->banco->Select("ALTER TABLE cad_prestador   MODIFY id int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;",array());
			
				
				
		}
		
		//fim da funcao cria tabela


    }//fim da classe