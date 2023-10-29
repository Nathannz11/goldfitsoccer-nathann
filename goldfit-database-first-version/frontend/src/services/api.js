import axios from "axios";

/**
 * TODO: adicionar arquivo .ENV para evitar valores hard coded
 * 
 * TODO: tranformar a API em uma classe e adicioar fuções que se repetem como métodos
 * 
 * TODO: analisar a possibilidade de utilizar um Context de atletas entre outros para utilizar nas páginas
 * dessa forma reduzir código repetido e chamas desnecessárias à API
*/

const api = axios.create ({
    baseURL: "http://localhost:8000"
});


export default api;