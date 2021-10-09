import React, { useEffect, useState } from 'react';

import search_icon from '../../assets/icons/search.png';
import see_icon from '../../assets/icons/eyes-icon.png';
import close_icon from '../../assets/icons/close_icon.png'

import './styles.css';
import ProvidersInformation from '../ProvidersInformation';

function GetProviders(props) {
  const [providers, setProvider] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);


  return (
    <div className="container">
      <div className="providers-table">
        <table>
          <thead>
            <tr>
              <th>CNPJ</th>
              <th>Razão sócial</th>
              <th>E-mail</th>
              <th>Visualizar</th>
            </tr>
          </thead>
          <tbody>
            {props.providers.length > 0 ? (
              props.providers.map((provider) => (
                <tr key={provider.id}>
                  <td>{provider.cnpj}</td>
                  <td>{provider.corporate_name}</td>
                  <td>{provider.email}</td>
                  <td><img className="search-icon" src={see_icon} alt="Ver informações" onClick={
                    () => {
                      setIsModalVisible(true)
                      setProvider(provider)
                    }
                  } /></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>Nenhum Prestador de Serviço cadastrado</td>
              </tr>
            )}
          </tbody>
        </table>
        {isModalVisible ? (
          <div className="modal">
            <form className="form-provider see-provider-container">
              <img src={close_icon} className="close-modal-icon" onClick={() => setIsModalVisible(false)} alt="Fechar informações" />
              <h4 className="form-title">Dados do Prestador</h4>
              <label>CNPJ</label>
              <input type="text" name="cnpj" value={providers.cnpj} placeholder={providers.cnpj} disabled />
              <label>Razão social</label>
              <input type="text" name="corporate_name" value={providers.corporate_name} placeholder={providers.corporate_name} disabled />
              <label>Data de abertura</label>
              <input type="text" name="opening_date" value={providers.opening_date} placeholder={providers.opening_date} disabled />
              <label>Telefone</label>
              <input type="text" name="phone" value={providers.phone} placeholder={providers.phone} disabled />
              <label>E-mail</label>
              <input type="text" name="email" value={providers.email} placeholder={providers.email} disabled />
              <h4 className="form-title form-sub-title">Endereço</h4>
              <label>CEP</label>
              <input type="text" name="cep" value={providers.cep} placeholder={providers.cep} disabled />
            </form>
          </div>
        ) : null}
      </div>

    </div>
  )
}

export default GetProviders
