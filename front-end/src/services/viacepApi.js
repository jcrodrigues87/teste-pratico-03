import axios from "axios";

const get = (cep) => {
  return axios.get({
    baseURL: `https://viacep.com.br/ws/${cep}/json/`
  });
}

const viacep_api = {
  get
}

export default viacep_api;

