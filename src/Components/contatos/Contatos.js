import "./Contatos.css";

import { useState } from "react";

const Contatos = (props) => {
  const [dadosContato, setDadosContato] = useState({
    id: props.idContato,
    nome: "",
    departamento: "",
    emailContato: "",
  });

  const onSave = () => {
    props.onSave(dadosContato);
  }

  const onChangeHandler = (event) => {
    setDadosContato((prevForm) => {
      return {
        ...prevForm,
        [event.target.id]: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="backdrop" onClick={props.onClose}></div>
      <form className="container-contatos" onSubmit={submitHandler}>
        <h1>Contatos</h1>

        <div className="form-dados">
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            value={dadosContato.nome}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="form-dados">
          <label htmlFor="departamento">Departamento:</label>
          <input
            id="departamento"
            type="text"
            value={dadosContato.departamento}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="form-dados">
          <label htmlFor="email-contato">E-mail:</label>
          <input
            id="emailContato"
            type="email"
            value={dadosContato.emailContato}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div>
          <button type="submit" onClick={onSave} className="button-enviar">Salvar</button>
          <button type="button" onClick={props.onClose} className="button-contatos-cancelar">
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
};

export default Contatos;
