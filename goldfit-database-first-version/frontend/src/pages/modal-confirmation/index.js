import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../_assets/logo.png'
import ButtonFilled from '../../_components/button/index.js'

import TextField from '@material-ui/core/TextField';

import './styles.css'

export default function ModalConfirmation (){

    {/*esse css tem q ser externo*/}
    const pStyle = {
        fontSize: '16px',
        textAlign: 'center',
        fontWeight: 'bold' 
    };

    const buttonStyle = {
        marginBottom: '5%'
    };

    return (
        <div className="block">
            <img className="logo-img" src={Logo} alt="logo"/>
            <div className="content">
                <p style={pStyle}>Cadastro realizado com sucesso! </p>
                <p>O administrador irá autorizar o cadastro e em breve você receberá um e-mail de confirmação. </p>
            </div>
            <div style={buttonStyle} >
                <ButtonFilled className="btn-login" route="/home" text="Sair"/>
            </div>
           
        </div>
    )
}