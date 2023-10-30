import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../_assets/logo.png'
import ButtonFilled from '../../_components/button/index.js'


import './styles.css'

export default function ModalConfirmationRegistry(){

    {/*esse css tem q ser externo*/}
    const pStyle = {
        fontSize: '18px',
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
                <br></br>
                <p>O registro foi cadastrado com sucesso! <br></br>Clique em sair para retornar à página inicial.</p>
            </div>
            <div style={buttonStyle} >
                <ButtonFilled className="btn-login" route="/menu" text="Sair"/>
            </div>
           
        </div>
    )
}