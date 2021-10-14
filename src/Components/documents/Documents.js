import "./Documents.css";

import { useState } from "react";

const Documents = (props) => {
  const [document, setDocument] = useState({ id: null, document: {} });

  const onSave = () => {
    if (document.id === null) {
      alert("Faça o upload de um arquivo pdf");
      return;
    }
    props.onSave(document);
  };

  const handleUploadFile = (event) => {
    const fileReader = new FileReader();
    let base64;
    fileReader.onload = function (fileLoadedEvent) {
      base64 = fileLoadedEvent.target.result;
      setDocument({
        id: props.idDocuments,
        name: event.target.files[0].name,
        document: base64,
      });
    };
    fileReader.readAsDataURL(event.target.files[0]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="backdrop" onClick={props.onClose}></div>
      <div className="container-contatos" onSubmit={submitHandler}>
        <input
          className="input-file"
          type="file"
          onChange={handleUploadFile}
          accept="application/pdf"
          required
        />

        <div>
          <button type="button" onClick={onSave} className="button-enviar">
            Salvar
          </button>
          <button
            type="button"
            onClick={props.onClose}
            className="button-contatos-cancelar"
          >
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
};

export default Documents;
