import React, { useState, useEffect, useCallback } from "react";
import Form from "./Components/Form";
import "./App.css";
import ProvidersList from "./Components/ProvidersList";

function App() {
  const [page, setPage] = useState(true);
  const [providers, setProviders] = useState([]);
  const [providersEmails, setProvidersEmails] = useState([]);

  const onChangePage = () => {
    setPage(!page);
  };

  const fetchProvidersHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://canex-cf7ba-default-rtdb.firebaseio.com/prestadores.json"
      );
      const data = await response.json();
      const loadedProviders = [];
      const loadedProvidersEmails = [];
      for (const key in data) {
        loadedProvidersEmails.push(data[key].email);
        loadedProviders.push({
          id: key,
          cnpj: data[key].cnpj,
          razao: data[key].razao,
          data: data[key].data,
          telefone: data[key].telefone,
          email: data[key].email,
          cep: data[key].cep,
          logradouro: data[key].logradouro,
          numero: data[key].numero,
          bairro: data[key].bairro,
          cidade: data[key].cidade,
          uf: data[key].uf,
          contatos: data[key].contatos,
          documents: data[key].documents,
        });
      }
      setProviders(loadedProviders);
      setProvidersEmails(loadedProvidersEmails);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchProvidersHandler();
  }, [fetchProvidersHandler]);

  return (
    <div className="App">
      {page ? (
        <ProvidersList providers={providers} buttonPage={onChangePage} />
      ) : (
        <Form providersEmails={providersEmails} buttonPage={onChangePage} />
      )}
    </div>
  );
}

export default App;
