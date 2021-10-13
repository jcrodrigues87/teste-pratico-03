import React from 'react'
import { useHistory } from 'react-router-dom';

import './styles.css';

function NavBar() {
  const history = useHistory();

  const pushProviders = () => {

  }

  return (
    <div>
      <nav className="navbar">
        <a href="/providers">Cadastrar Prestador</a>
        <a href="/register">Prestadores Cadastrados</a>
      </nav>
    </div>
  )
}

export default NavBar
