import React from 'react';
import { Link} from 'react-router-dom';

import './styles.css';
import Logo from '../../_assets/logo.png'

export default function Header() {
    return(
        <header className="nav-bar">
            <img src={Logo} alt="logo" id="header-image"/>
                <section className="navigation">
                    <a href="/#section-1" className="nav-item">Início</a> 
                    <a href="/#section-2" className="nav-item">O que é?</a> 
                    <a href="/#vantagens" className="nav-item">Vantagens</a> 
                    <a href="/#metodologia" className="nav-item">Metodologia</a> 
                    <a href="/#sobre-o-sistema" className="nav-item">Sobre o Sistema</a> 
                    <a href="/#section-6" className="nav-item">Contato</a> 
                </section>
        </header>
)}
