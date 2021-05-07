import axios from "axios";

const cep = axios.create({
	baseURL: "http://viacep.com.br/ws",
});

export default cep;