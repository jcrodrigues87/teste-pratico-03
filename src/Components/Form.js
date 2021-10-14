import React, { useState } from "react";
import Contatos from "./contatos/Contatos";
import Documents from "./documents/Documents";
import "./Form.css";

const Form = (props) => {
  // fetch("https://canex-cf7ba-default-rtdb.firebaseio.com/prestadores.json")
  //   .then((response) => response.json())
  //   .then((jsonParsed) => console.log(jsonParsed));

  const initialState = {
    cnpj: "",
    razao: "",
    data: "",
    telefone: "",
    email: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
    contatos: [],
    documents: [],
  };

  const [dataForm, setDataForm] = useState(initialState);

  const [addContatos, setAddContatos] = useState(false);
  const [addDocuments, setAddDocuments] = useState(false);

  const handleUploadFile = (e) => {
    setDataForm((prevForm) => {
      return {
        ...prevForm,
        documents: [...prevForm.documents, e.target.files[0]],
      };
    });

    // console.log(e.target.files)
  };

  const onAddContatosHandler = () => {
    setAddContatos(true);
  };

  const onCloseContatosHandler = () => {
    setAddContatos(false);
  };

  const onAddDocumentsHandler = () => {
    setAddDocuments(true);
  };

  const onCloseDocumentsHandler = () => {
    setAddDocuments(false);
  };

  const onChangeHandler = (event) => {
    setDataForm((prevForm) => {
      return {
        ...prevForm,
        [event.target.id]: event.target.value,
      };
    });
    const cepNumber = `${event.target.value}`.replace("-", "");
    if (
      cepNumber.length === 8 &&
      event.target.id === "cep" &&
      Number.isInteger(Number(cepNumber))
    ) {
      fetch(`https://viacep.com.br/ws/${cepNumber}/json/`)
        .then((response) => response.json())
        .then((jsonParsed) => {
          setDataForm((prevForm) => {
            return {
              ...prevForm,
              logradouro: jsonParsed.logradouro,
              bairro: jsonParsed.bairro,
              cidade: jsonParsed.localidade,
              uf: jsonParsed.uf,
            };
          });
        });
    }
  };

  const addNovoContato = (novoContato) => {
    if (
      novoContato.nome.length > 0 &&
      novoContato.departamento.length > 0 &&
      novoContato.emailContato.length > 0
    ) {
      setDataForm((prevForm) => {
        return {
          ...prevForm,
          contatos: [...prevForm.contatos, novoContato],
        };
      });
      onCloseContatosHandler();
    }
  };

  const addNewDocument = (newDocument) => {
    setDataForm((prevForm) => {
      return {
        ...prevForm,
        documents: [...prevForm.documents, newDocument],
      };
    });
    onCloseDocumentsHandler();
  };

  const deleteContatoHandler = (event) => {
    const contatoRemovido = [];
    dataForm.contatos.forEach((contato) => {
      if (Number(contato.id) !== Number(event.target.value)) {
        contatoRemovido.push(contato);
      }
    });
    setDataForm((prevForm) => {
      return {
        ...prevForm,
        contatos: contatoRemovido,
      };
    });
  };

  const deleteDocumentHandler = (event) => {
    const documentRemoved = [];
    dataForm.documents.forEach((document) => {
      if (Number(document.id) !== Number(event.target.value)) {
        documentRemoved.push(document);
      }
    });
    setDataForm((prevForm) => {
      return {
        ...prevForm,
        documents: documentRemoved,
      };
    });
  };

  const onEnviarHandler = async () => {
    if (dataForm.contatos.length === 0) {
      alert("Informe no mínimo 1 contato!");
      return;
    }

    if (props.providersEmails.indexOf(dataForm.email) !== -1) {
      alert("E-mail já cadastrado");
      return;
    }

    if (
      dataForm.cnpj.toString().replace(/\D+/g, "").length !== 14 ||
      dataForm.razao === "" ||
      dataForm.data === "" ||
      dataForm.telefone.toString().trim().replace(/\D+/g, "").length < 10 ||
      dataForm.telefone.toString().trim().replace(/\D+/g, "").length > 11 ||
      dataForm.email.toString().indexOf("@") === -1 ||
      dataForm.cep.toString().replace(/\D+/g, "").length !== 8 ||
      dataForm.logradouro === "" ||
      dataForm.numero === "" ||
      dataForm.bairro === "" ||
      dataForm.cidade === "" ||
      dataForm.uf === ""
    ) {
      return;
    }

    const newDataForm = { ...dataForm };

    newDataForm.cnpj = dataForm.cnpj.toString().trim().replace(/\D+/g, "");
    newDataForm.telefone = dataForm.telefone
      .toString()
      .trim()
      .replace(/\D+/g, "");
    newDataForm.cep = dataForm.cep.toString().trim().replace(/\D+/g, "");

    await fetch(
      "https://canex-cf7ba-default-rtdb.firebaseio.com/prestadores.json",
      {
        method: "POST",
        body: JSON.stringify(newDataForm),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(dataForm);
    setDataForm(initialState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form-dados" onSubmit={submitHandler}>
      <div className="form-container">
        <button className="button-page" onClick={props.buttonPage}>
          Lista de Prestadores
        </button>

        <div className="form-dados">
          <label htmlFor="cnpj">CNPJ:</label>
          <input
            id="cnpj"
            type="text"
            value={dataForm.cnpj}
            onChange={onChangeHandler}
            pattern="[0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2}"
            required
          />
        </div>

        <div className="form-dados">
          <label htmlFor="razao">Razão Social:</label>
          <input
            id="razao"
            type="text"
            value={dataForm.razao}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="form-dados">
          <label htmlFor="data">Data de abertura:</label>
          <input
            id="data"
            type="date"
            value={dataForm.data}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="form-dados">
          <label htmlFor="telefone">Telefone:</label>
          <input
            id="telefone"
            type="tel"
            value={dataForm.telefone}
            onChange={onChangeHandler}
            pattern="^\(?\d{2}\)?[\s-]?[\s9]?[\s-]?\d{4}-?\d{4}$"
            required
          />
        </div>

        <div className="form-dados">
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type="email"
            value={dataForm.email}
            onChange={onChangeHandler}
            required
          />
        </div>

        <hr />
        <h2>Endereço</h2>

        <div className="form-dados">
          <label htmlFor="cep">CEP:</label>
          <input
            id="cep"
            type="text"
            value={dataForm.cep}
            onChange={onChangeHandler}
            pattern="^\d{5}-?\d{3}$"
            required
          />
        </div>

        <div className="form-dados">
          <label htmlFor="logradouro">Logradouro:</label>
          <input
            id="logradouro"
            type="text"
            value={dataForm.logradouro}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="form-dados">
          <label htmlFor="numero">Numero:</label>
          <input
            id="numero"
            type="number"
            value={dataForm.numero}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="form-dados">
          <label htmlFor="bairro">Bairro:</label>
          <input
            id="bairro"
            type="text"
            value={dataForm.bairro}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="form-dados">
          <label htmlFor="cidade">Cidade:</label>
          <input
            id="cidade"
            type="text"
            value={dataForm.cidade}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="form-dados">
          <label htmlFor="uf">UF:</label>
          <input
            id="uf"
            type="text"
            value={dataForm.uf}
            onChange={onChangeHandler}
            required
          />
        </div>

        <hr />
        <section>
          <h2>Contatos</h2>
          <div className="contatos">
            {dataForm.contatos.map((contato) => (
              <>
                <div key={contato.id} className="contato">
                  <p>
                    Nome: <span>{contato.nome}</span>
                  </p>
                  <p>
                    Departamento: <span>{contato.departamento}</span>
                  </p>
                  <p>
                    E-mail: <span>{contato.emailContato}</span>
                  </p>
                  <button
                    className="button-delete"
                    type="button"
                    onClick={deleteContatoHandler}
                    value={contato.id}
                  >
                    &#128465;
                  </button>
                </div>
              </>
            ))}
          </div>

          {addContatos && (
            <Contatos
              onClose={onCloseContatosHandler}
              onSave={addNovoContato}
              idContato={dataForm.contatos.length}
            />
          )}

          <button
            type="button"
            onClick={onAddContatosHandler}
            className="button-add"
          >
            &#10133; Adicionar novo contato
          </button>
        </section>
        <hr />
        <section>
          <h2>Documentos</h2>

          {/* <div>
          <input key={0} type="file" accept="application/pdf" onChange={handleUploadFile } />
          {dataForm.documents.map((document) => {
            return <input key={dataForm.documents.length} type="file" accept="application/pdf" onChange={handleUploadFile } />;
          })}
        </div> */}

          <div>
            {dataForm.documents.map((document) => (
              <>
                <div className="contato">
                  <p>
                    Documento: <span>{document.name}</span>
                  </p>
                  <button
                    className="button-delete"
                    type="button"
                    onClick={deleteDocumentHandler}
                    value={document.id}
                  >
                    &#128465;
                  </button>
                </div>
              </>
            ))}
          </div>

          {addDocuments && (
            <Documents
              onClose={onCloseDocumentsHandler}
              onSave={addNewDocument}
              idDocuments={dataForm.documents.length}
            />
          )}

          <button
            type="button"
            onClick={onAddDocumentsHandler}
            className="button-add"
          >
            &#10133; Adicionar documento
          </button>
        </section>

        <div className="div-buttons">
          <button
            type="submit"
            className="button-enviar"
            onClick={onEnviarHandler}
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
