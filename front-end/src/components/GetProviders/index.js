import React, { useEffect, useMemo, useState } from 'react';

import see_icon from '../../assets/icons/eyes-icon.png';
import close_icon from '../../assets/icons/close_icon.png'

import './styles.css';

function GetProviders(props) {
  const [seeProvider, setSeeProvider] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filterInput, setFilterInput] = useState("");

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilterInput(value);
  };

  useEffect(() => {
    (async () => {


    })();
  }, []);

  const providersFilter = useMemo(() => {
    const lowerFilter = filterInput.toLowerCase();
    return props.providers.filter((provider) =>
      provider.toLowerCase().includes(lowerFilter)
    );
  }, [filterInput]);


  return (
    <div className="container">
      <div className="providers-table">
        <label className="search-provider">
          <button type="button" className="btn-search">
            Buscar
          </button>
          <input
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={"Consultar por CNPJ, razão social ou email . . ."}
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
            {props.providers.length > 0 ? (
              props.providers.map((provider) => (
                <tr key={provider.id}>
                  <td>{provider.cnpj}</td>
                  <td>{provider.corporate_name}</td>
                  <td>{provider.email}</td>
                  <td><img className="see-icon" src={see_icon} alt="Ver informações" onClick={
                    () => {
                      setIsModalVisible(true)
                      setSeeProvider(provider)
                      console.log("oi")
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
              <input type="text" name="cnpj" value={seeProvider.cnpj} placeholder={seeProvider.cnpj} disabled />
              <label>Razão social</label>
              <input type="text" name="corporate_name" value={seeProvider.corporate_name} placeholder={seeProvider.corporate_name} disabled />
              <label>Data de abertura</label>
              <input type="text" name="opening_date" value={seeProvider.opening_date} placeholder={seeProvider.opening_date} disabled />
              <label>Telefone</label>
              <input type="text" name="phone" value={seeProvider.phone} placeholder={seeProvider.phone} disabled />
              <label>E-mail</label>
              <input type="text" name="email" value={seeProvider.email} placeholder={seeProvider.email} disabled />
              <h4 className="form-title form-sub-title">Endereço</h4>
              <label>CEP</label>
              <input type="text" name="cep" value={seeProvider.cep} placeholder={seeProvider.cep} disabled />
            </form>
          </div>
        ) : null}
      </div>

    </div>
  )
}

export default GetProviders
