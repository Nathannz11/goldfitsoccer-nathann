import { createContext, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

// TODO: Adicionar arquivo .ENV para definir url base e afins

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({children}) => {

  let [authToken, setAuthToken] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
  let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
  let [loading, setLoading] = useState(true);
  const history = useHistory();

  let loginUser = async event => {
    event.preventDefault();
    console.log('submitted form')

    let response = await fetch('http://127.0.0.1:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'username': event.target.username.value, 
        'password': event.target.password.value
      })
    })

    let data = await response.json();

    if(response.status === 200) {
      setAuthToken(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem('authTokens', JSON.stringify(data));
      history.push('/menu');
    }

    if(response.status !== 200) {
      alert("Erro de autenticação, tente novamente!");
    }
  }

  let logoutUser = ()=> {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    history.push('/');
  }

  let updateToken = async ()=> {
    let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'refresh': authToken.refresh 
      })
    })

    let data = await response.json();

    if (response.status === 200) {
      setAuthToken(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem('authTokens', JSON.stringify(data));
    } else {
      logoutUser();
    }

    if(loading) {
      setLoading(false);
    }
  }

  let contextData = {
    authToken: authToken,
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
    updateToken: updateToken
  }

  useEffect(() => {
    if (loading){
      updateToken();
    }

    let fourMinutes = 1000 * 60 * 4;

    let intervalID = setInterval(() => {
      if(authToken) 
        updateToken();
    }, fourMinutes)

    return () => clearInterval(intervalID);
  }, [authToken, loading]);

  return (
      <AuthContext.Provider value={contextData}>
          {children}
      </AuthContext.Provider>
  )
}
