<?php

    class CadContatoDal{

        private $banco;
        
        function __construct($banco) {
            $this->banco = $banco;
        }//fim do constructor

        /*GetWhere*/
        public function SelectWhere($id){
            return $this->banco->select("select * from cad_contato where idprestador = ?",array($id));
        }
        //fim da getwhere
        
        //inicio do insert
        public function Insert($entitties){
         
                         $this->banco->insert("insert into cad_contato set 
                                                idprestador = ?,
                                                nome = ?,
                                                departamento = ?,
                                                email = ?"
                                        ,array(
                                            $entitties->getidprestador(),
                                            $entitties->getnome(),
                                            $entitties->getdepartamento(),
                                            $entitties->getemail()
                                        )
                                    );
            
        
        echo  $entitties->getidprestador();
        echo  " - ".$entitties->getnome();
        echo  " - ".$entitties->getemail();
        echo  " - ".$entitties->getdepartamento()."<hr>";
    
        }//fim do insert
		
		public function Criartabela(){
			$sql = "CREATE TABLE cad_contato (
					  id int(10) UNSIGNED NOT NULL,
					  idprestador int(10) UNSIGNED DEFAULT NULL,
					  nome varchar(45) DEFAULT NULL,
					  departamento varchar(45) DEFAULT NULL,
					  email varchar(100) DEFAULT NULL
					) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";
				
				$this->banco->Select($sql,array());
				echo "Tabela Cadarquivo criada<br>";
				
				
				$this->banco->Select("ALTER TABLE cad_contato   ADD PRIMARY KEY (id),  ADD KEY FK_cad_contato_cad_prestador (idprestador);",array());
			
				
				$this->banco->Select("ALTER TABLE cad_contato   MODIFY id int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;",array());
				
				
				$this->banco->Select("ALTER TABLE cad_contato
										ADD CONSTRAINT FK_cad_contato_cad_prestador FOREIGN KEY (idprestador) REFERENCES cad_prestador (id);
									COMMIT;",array());
			
				
				
				
				
				
		}

    }//fim da classe