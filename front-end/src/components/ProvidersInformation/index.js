import React, { useState } from 'react'

import './styles.css';

function ProvidersInformation(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [provider] = useState(props.provider);

  ((props) => {
    (props.see) ? setIsModalVisible(true) : setIsModalVisible(false);
  })();

  console.log("caiu")

  return (
    <div>
      {isModalVisible ? (
        <div className="modal">
          <form className="form-provider see-provider-container">
            <h4 className="form-title">Dados do Prestador</h4>
            <label>CNPJ</label>
            <input type="text" name="cnpj" value={provider.cnpj} placeholder={provider.cnpj} disabled />
            <label>Razão social</label>
            <input type="text" name="corporate_name" value={provider.corporate_name} placeholder={provider.corporate_name} disabled />
            <label>Data de abertura</label>
            <input type="text" name="opening_date" value={provider.opening_date} placeholder={provider.opening_date} disabled />
            <label>Telefone</label>
            <input type="text" name="phone" value={provider.phone} placeholder={provider.phone} disabled />
            <label>E-mail</label>
            <input type="text" name="email" value={provider.email} placeholder={provider.email} disabled />
            <h4 className="form-title form-sub-title">Endereço</h4>
            <label>CEP</label>
            <input type="text" name="cep" value={provider.cep} placeholder={provider.cep} disabled />
          </form>
        </div>
      ) : null}
    </div>
  )
}

export default ProvidersInformation
