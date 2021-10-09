import React from 'react';
import ImageUpload from '../ImageUpload';

import './styles.css';

function CreateProviderForm() {
  return (
    <div className="container">
      <form type="submit" className="form-provider">
        <h4 className="form-title">Dados do Prestador</h4>
        <label>CNPJ</label>
        <input type="text" name="cnpj" placeholder="Digite o CNPJ . . ." />
        <label>Razão social</label>
        <input type="text" name="corporate_name" placeholder="Digite a razão social . . ." />
        <label>Data de abertura</label>
        <input type="text" name="opening_date" placeholder="Digite a data de abertura (Ex: dd/mm/aaaa) . . ." />
        <label>Telefone</label>
        <input type="text" name="phone" placeholder="Digite o telefone (Ex: (DD) 0 0000-0000) . . ." />
        <label>E-mail</label>
        <input type="text" name="email" placeholder="Digite o e-mail . . ." />
        <h4 className="form-title form-sub-title">Endereço</h4>
        <label>CEP</label>
        <input type="text" name="cep" placeholder="Digite o CEP . . ." />
        <h4 className="form-title form-sub-title">Contatos</h4>
        <label>Nome do contato</label>
        <input type="text" name="cep" placeholder="Digite o nome do contato . . ." />
        <label>Departamento</label>
        <input type="text" name="cep" placeholder="Digite o departamento . . ." />
        <label>E-mail</label>
        <input type="text" name="cep" placeholder="Digite o e-mail do contato . . ." />
        <h4 className="form-title form-sub-title">Documentos</h4>
        <div>
          <p className="upload-text">**Favor enviar os documentos necessários para o cadastro</p>
          <ImageUpload />
        </div>
        <button className="form-btn"> Realizar Cadastro</button>
      </form>
    </div>
  )
}

export default CreateProviderForm
