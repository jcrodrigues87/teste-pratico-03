import React, { useState, useEffect } from "react";
import "./ProvidersList.css";
import DetailedList from "./DetailedList";

const ProvidersList = (props) => {
  const [providers, setProviders] = useState(props.providers);
  const [detailList, setDetailList] = useState(false);
  const [provider, setProvider] = useState("");
  
  useEffect(() => {
    setProviders(props.providers);
  }, [props.buttonPage]);

  const onDetailedListHandler = (event) => {
    let selectedProvider;
    providers.forEach((element) => {
      if (element.id === event.target.accessKey) {
        selectedProvider = element;
      }
    });
    setProvider(selectedProvider);
    setDetailList(true);
  };

  const onChangeSearch = (event) => {
    
    const cnpj = document.getElementById('cnpjSearch').value
    const razao = document.getElementById('razaoSearch').value
    const email = document.getElementById('emailSearch').value

    let newProviders = [];
    props.providers.forEach((element) => {
      if (
        element.cnpj.startsWith(cnpj) &&
        element.razao
          .toUpperCase()
          .startsWith(razao.toUpperCase()) &&
        element.email.toUpperCase().startsWith(email.toUpperCase())
      ) {
        newProviders.push(element);
      }
    });
    setProviders(newProviders);
  };

  return (
    <div className="providers-list">
      <button className="button-page" onClick={props.buttonPage}>
        Cadastro
      </button>
      <h2>Pesquisa</h2>
      <div>
        <div className="form-dados">
          <label htmlFor="cnpjSearch">CNPJ:</label>
          <input
            id="cnpjSearch"
            type="number"
            accessKey="cnpj"
            onChange={onChangeSearch}
          />
        </div>

        <div className="form-dados">
          <label htmlFor="razaoSearch">Razão Social:</label>
          <input
            id="razaoSearch"
            type="text"
            accessKey="razao"
            onChange={onChangeSearch}
          />
        </div>

        <div className="form-dados">
          <label htmlFor="emailSearch">E-mail:</label>
          <input
            id="emailSearch"
            type="text"
            accessKey="email"
            onChange={onChangeSearch}
          />
        </div>
      </div>
      <table className="provider-table">
        <tr>
          <th>CNPJ</th>
          <th>Razão Social</th>
          <th>E-mail</th>
        </tr>
        {providers.map((provider) => (
          <tr
            className="provider-line"
            key={provider.id}
            accessKey={provider.id}
            onClick={onDetailedListHandler}
          >
            <td accessKey={provider.id}>
              {provider.cnpj.substr(0, 2) +
                "." +
                provider.cnpj.substr(2, 3) +
                "." +
                provider.cnpj.substr(5, 3) +
                "/" +
                provider.cnpj.substr(8, 4) +
                "-" +
                provider.cnpj.substr(12, 2)}
            </td>
            <td accessKey={provider.id}>{provider.razao}</td>
            <td accessKey={provider.id}>{provider.email}</td>
          </tr>
        ))}
      </table>
      {detailList && <DetailedList provider={provider} />}
    </div>
  );
};

export default ProvidersList;
