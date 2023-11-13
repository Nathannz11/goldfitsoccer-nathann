import axios from "axios";

/**
 * TODO: adicionar arquivo .ENV para evitar valores hard coded
 * 
 * TODO: tranformar a API em uma classe e adicioar fuções que se repetem como métodos
 * 
 * TODO: analisar a possibilidade de utilizar um Context de atletas entre outros para utilizar nas páginas
 * dessa forma reduzir código repetido e chamas desnecessárias à API
*/
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const api = axios.create ({
    baseURL: "https://goldfitsoccer-test-02f0da80e648.herokuapp.com/admin"
});


export default api;