import React, { useState } from 'react';
import ImageUpload from '../ImageUpload';

import './styles.css';

import api from '../../services/api';


function CreateProviderForm() {
  const initialFormState = {
    cnpj: '',
    corporate_name: '',
    opening_date: '',
    phone: '',
    email: '',
    cep: ''
  }

  const [provider, setProvider] = useState(initialFormState);


  const createProvider = (providers) => {
    api.post('/providers', providers);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setProvider({ ...provider, [name]: value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!provider) return
    console.log(provider)
    createProvider(provider);
    setProvider(initialFormState);
  }

  return (
    <div className="container">
      <form type="submit" className="form-provider" onSubmit={onSubmit}>
        <h4 className="form-title">Dados do Prestador</h4>
        <label>CNPJ</label>
        <input type="text" name="cnpj" value={provider.cnpj} onChange={handleInputChange} placeholder="Digite o CNPJ . . ." />
        <label>Razão social</label>
        <input type="text" name="corporate_name" value={provider.corporate_name} onChange={handleInputChange} placeholder="Digite a razão social . . ." />
        <label>Data de abertura</label>
        <input type="text" name="opening_date" value={provider.opening_date} onChange={handleInputChange} placeholder="Digite a data de abertura (Ex: dd/mm/aaaa) . . ." />
        <label>Telefone</label>
        <input type="text" name="phone" value={provider.phone} onChange={handleInputChange} placeholder="Digite o telefone (Ex: (DD) 0 0000-0000) . . ." />
        <label>E-mail</label>
        <input type="text" name="email" value={provider.email} onChange={handleInputChange} placeholder="Digite o e-mail . . ." />
        <h4 className="form-title form-sub-title">Endereço</h4>
        <label>CEP</label>
        <input type="text" name="cep" value={provider.cep} onChange={handleInputChange} placeholder="Digite o CEP . . ." />
        {/* <h4 className="form-title form-sub-title">Contatos</h4>
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
        </div> */}
        <button className="form-btn"> Realizar Cadastro</button>
      </form>
    </div>
  )
}

export default CreateProviderForm
