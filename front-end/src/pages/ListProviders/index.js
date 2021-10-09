import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import GetProviders from '../../components/GetProviders'

import api from '../../services/api';


function ListProviders() {
  const [providers, setProvider] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get();
      setProvider(response.data);
    })();
  }, []);

  return (
    <div>
      <NavBar />
      <GetProviders providers={providers} />
    </div>
  )
}

export default ListProviders
