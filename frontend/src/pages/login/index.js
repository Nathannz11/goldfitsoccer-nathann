import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

import Logo from '../../_assets/logo.png'
import Coach from '../../_assets/coach.svg'
import Athlete from '../../_assets/athlete.svg'
import Researcher from '../../_assets/research.svg'
import Admnistrator from '../../_assets/adm.svg'

export default function Login() {
    return (
        <section className='login-as-section'>
            <div className="login-as-container">
                <img className="img-logo" src={Logo} alt="logo"/>
                <h3 className="text-header">Realizar login como:</h3>

                <div className="grid-icons">
                    <figure>
                        <img className="img-login-as" src={Coach} alt="Treinador"/>
                        <Link className="link-login-as" to="/login-credentials">Treinador</Link>
                    </figure>
                    <figure>
                        <img className="img-login-as" src={Athlete} alt="Atleta"/>
                        <Link className="link-login-as" to="/login-credentials">Atleta</Link>
                    </figure>
                    <figure>
                        <img className="img-login-as" src={Researcher} alt="Pesquisador"/>
                        <Link className="link-login-as" to="/login-credentials">Pesquisador</Link>
                    </figure>
                    <figure>
                        <img className="img-login-as" src={Admnistrator} alt="Admnistrador"/>
                        <Link className="link-login-as" to="/login-credentials">Administrador</Link>
                    </figure>
                </div>
                <div className="grid-register">
                    <div className="coach">
                        <p>É um treinador? &nbsp;</p>
                        <Link className="white-link" to="/login-credentials">Cadastre-se aqui</Link>
                    </div>
                    <div className="athlete">
                        <p>É um atleta? &nbsp;</p>
                        <Link className="white-link" to="/login-credentials">Cadastre-se aqui</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}