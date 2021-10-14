import "./DetailedList.css";

const DetailedList = (props) => {
  const provider = props.provider;

  return (
    <div className="detailed-list">
      <div key={provider.id} className="providers-list">
        <h2>Dados:</h2>
        <p>
          CNPJ:{" "}
          <span className="answer">
            {provider.cnpj.substr(0, 2) +
              "." +
              provider.cnpj.substr(2, 3) +
              "." +
              provider.cnpj.substr(5, 3) +
              "/" +
              provider.cnpj.substr(8, 4) +
              "-" +
              provider.cnpj.substr(12, 2)}
          </span>
        </p>
        <p>
          Razão Social: <span className="answer">{provider.razao}</span>
        </p>
        <p>
          Data de abertura:{" "}
          <span className="answer">
            {provider.data.substr(8, 2) +
              "/" +
              provider.data.substr(5, 2) +
              "/" +
              provider.data.substr(0, 4)}
          </span>
        </p>
        <p>
          Telefone:{" "}
          <span className="answer">
            {"(" +
              provider.telefone.substr(0, 2) +
              ")" +
              provider.telefone.substr(2)}
          </span>
        </p>
        <p>
          E-mail: <span className="answer">{provider.email}</span>
        </p>
        <p>
          Endereço:{" "}
          <span className="answer">
            {provider.logradouro +
              ", " +
              provider.numero +
              " - " +
              provider.bairro +
              " - " +
              provider.cidade +
              "/" +
              provider.uf +
              " (" +
              provider.cep.substr(0, 5) +
              "-" +
              provider.cep.substr(5) +
              ")"}
          </span>
        </p>
        <hr />
        <h2>Contatos</h2>
        {provider.contatos.map((contato) => (
          <div key={contato.id} className="contato-list">
            <p>Nome: {contato.nome}</p>
            <p>Departamento: {contato.departamento}</p>
            <p>E-mail: {contato.emailContato}</p>
          </div>
        ))}
        <hr />
        {provider.documents ? (
          <>
            <h2>Documentos</h2>
            <div className="div-flex">
              {provider.documents.map((document) => (
                <a
                  key={document.id}
                  className="download-document"
                  download={document.name}
                  href={document.document}
                >
                  {document.name}
                </a>
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default DetailedList;
