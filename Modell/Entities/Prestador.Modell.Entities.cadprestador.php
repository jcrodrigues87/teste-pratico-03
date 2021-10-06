<?php

    class CadPrestadorEntitie{
        private $id;
		private $nome;
		private $dtabertura;
		private $cpnj;
		private $email;
		private $telefone;
		private $cep;
		private $uf;
		private $cidade;
		private $bairro;
		private $rua;
		private $numero;
	
        public function setid($value){
			$this->id = $value;
		} 
		
		public function getid(){
			return $this->id;
		}
		
		public function setrazao($value){
			$this->nome = $value;
		} 
		
		public function getrazao(){
			return $this->nome;
		}

		public function setcnpj($value){
			$this->cnpj = $value;
		} 
		
		public function getcnpj(){
			return $this->cnpj;
		}
		
		public function setdtabertura($value){
			$this->dtabertura = $value;
		} 
		
		public function getdtabertura(){
			return $this->dtabertura;
		}
		
			public function setemail($value){
			$this->email = $value;
		} 
		
		public function getemail(){
			return $this->email;
		}
		
			public function settelefone($value){
			$this->telefone = $value;
		} 
		
		public function gettelefone(){
			return $this->telefone;
		}
		
		public function setcep($value){
			$this->cep = $value;
		} 
		
		public function getcep(){
			return $this->cep;
		}
		
			public function setuf($value){
			$this->uf = $value;
		} 
		
		public function getuf(){
			return $this->uf;
		}
		
		public function setcidade($value){
			$this->cidade = $value;
		} 
		
		public function getcidade(){
			return $this->cidade;
		}
		
			public function setbairro($value){
			$this->bairro = $value;
		} 
		
		public function getbairro(){
			return $this->bairro;
		}
		
			public function setrua($value){
			$this->rua = $value;
		} 
		
		public function getrua(){
			return $this->rua;
		}
		
		public function setnumero($value){
			$this->numero = $value;
		} 
		
		public function getnumero(){
			return $this->numero;
		}
		
    }