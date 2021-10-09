<?php

    class CadContatoEntitie{
        private $id;
		private $idprestador;
		private $nome;
		private $departamento;
		private $email;
		
        public function setid($value){
			$this->id = $value;
		} 
		
		public function getid(){
			return $this->id;
		}

		public function setidprestador($value){
			$this->idprestador = $value;
		} 
		
		public function getidprestador(){
			return $this->idprestador;
		}

		public function setnome($value){
			$this->nome = $value;
		} 
		
		public function getnome(){
			return $this->nome;
		}
		
		public function setdepartamento($value){
			$this->departamento = $value;
		} 
		
		public function getdepartamento(){
			return $this->departamento;
		}

		
		
	
			public function setemail($value){
			$this->email = $value;
		} 
		
		public function getemail(){
			return $this->email;
		}
		
		
		
	
		
		
    }