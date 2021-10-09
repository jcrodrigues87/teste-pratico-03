import React from 'react'

import search_icon from '../../assets/icons/search.png'

import './styles.css'

function GetProviders(props) {
  return (
    <div className="container">
      <div className="providers-table">
        <table>
          <thead>
            <tr>
              <th>CNPJ</th>
              <th>E-mail</th>
              <th>Visualizar</th>
            </tr>
          </thead>
          <tbody>
            {props.providers.length > 0 ? (
              props.providers.map((provider) => (
                <tr key={provider.id}>
                  <td>{provider.cnpj}</td>
                  <td>{provider.email}</td>
                  <td><img src={search_icon} alt="Buscar" /></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>Nenhum Prestador de Serviço cadastrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default GetProviders
