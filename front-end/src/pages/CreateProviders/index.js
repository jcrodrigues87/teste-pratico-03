import React, { useEffect, useState } from 'react'

import CreateProviderForm from '../../components/CreateProviderForm';
import NavBar from '../../components/NavBar';

import api from '../../services/api';

function CreateProviders() {
  const [providers, setProvider] = useState([]);

  const createProvider = (providers) => {
    api.post('/providers', providers);
  }
  return (
    <div>
      <NavBar />
      <CreateProviderForm createProvider={createProvider} />
    </div>
  )
}

export default CreateProviders
