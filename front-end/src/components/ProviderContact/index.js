import React from 'react'

import './styles.css'

function ProviderContact() {
  return (
    <div>
      <h4 className="form-title form-sub-title">Contatos</h4>
      <label>Nome do contato</label>
      <input type="text" name="cep" placeholder="Digite o CEP..." />
      <label>Departamento</label>
      <input type="text" name="cep" placeholder="Digite o CEP..." />
      <label>E-mail</label>
      <input type="text" name="cep" placeholder="Digite o CEP..." />
    </div>
  )
}

export default ProviderContact
