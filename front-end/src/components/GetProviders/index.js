import React, { useEffect, useMemo, useState } from 'react';

import see_icon from '../../assets/icons/eyes-icon.png';
import close_icon from '../../assets/icons/close_icon.png'

import './styles.css';
import api from '../../services/api';

function GetProviders() {
  const [providers, setProviders] = useState([]);
  const [seeFullProvider, setSeeFullProvider] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const params = {};
    if (search) {
      params.cnpj_like = search
    }

    api.get('/providers', { params })
      .then((response) => {
        setProviders(response.data);
      })
  }, [search]);

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setSearch(value);
  };

  return (
    <div className="container">
      <div className="providers-table">
        <label className="search-provider">
          <button type="button" className="btn-search">
            Buscar
          </button>
          <input
            type="search"
            value={search}
            onChange={handleFilterChange}
            placeholder="Consultar por CNPJ, razão social ou email . . ."
          />
        </label>
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
            {providers.length > 0 ? (
              providers.map((provider) => (
                <tr key={provider.id}>
                  <td>{provider.cnpj}</td>
                  <td>{provider.corporate_name}</td>
                  <td>{provider.email}</td>
                  <td><img className="see-icon" src={see_icon} alt="Ver informações" onClick={
                    () => {
                      setIsModalVisible(true)
                      setSeeFullProvider(provider)
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
              <input type="text" name="cnpj" value={seeFullProvider.cnpj} placeholder={seeFullProvider.cnpj} disabled />
              <label>Razão social</label>
              <input type="text" name="corporate_name" value={seeFullProvider.corporate_name} placeholder={seeFullProvider.corporate_name} disabled />
              <label>Data de abertura</label>
              <input type="text" name="opening_date" value={seeFullProvider.opening_date} placeholder={seeFullProvider.opening_date} disabled />
              <label>Telefone</label>
              <input type="text" name="phone" value={seeFullProvider.phone} placeholder={seeFullProvider.phone} disabled />
              <label>E-mail</label>
              <input type="text" name="email" value={seeFullProvider.email} placeholder={seeFullProvider.email} disabled />
              <h4 className="form-title form-sub-title">Endereço</h4>
              <label>CEP</label>
              <input type="text" name="cep" value={seeFullProvider.cep} placeholder={seeFullProvider.cep} disabled />
            </form>
          </div>
        ) : null}
      </div>

    </div>
  )
}

export default GetProviders
