import React from "react";
import "./styles.css";

import logo from "../../_assets/logo-fundo-2 1.svg";
import webLogo from "../../_assets/mdi_web.svg";
import emailLogo from "../../_assets/ic_outline-email.svg";
import locationLogo from "../../_assets/ic_outline-location-on.svg";
import ufopLogo from "../../_assets/ufop-logo.svg";
import labespeeLogo from "../../_assets/labespee-logo.svg";
import decomLogo from "../../_assets/decom-logo.svg";
import eefLogo from "../../_assets/eefufop-logo.svg";

export default function Footer() {
  return (
    <footer>
      <div className="logo-container">
        <img src={logo} id="footer-logo" alt="Logo do sistema Goldfit"/>
      </div>
        
      <div className="contato-details">
        <h5>Contato</h5>
        <div className="contato-item">
          <img src={webLogo} alt="Logo de WWW"/>
          <a href="http://www.labespee.ufop.br" target="blank">http://www.labespee.ufop.br</a>
        </div>

        <div className="contato-item">
          <img src={emailLogo} alt="Logo de WWW"/>
          <a href="mailto:f.zacaron@ufop.edu.br">f.zacaron@ufop.edu.br</a>
        </div>

        <div className="contato-item">
          <img src={emailLogo} alt="Logo de WWW"/>
          <a href="mailto:emersoncoelho@hotmail.com">emersoncoelho@hotmail.com</a>
        </div>
      </div>

      <div className="location-details">
        <div className="contato-item">
          <img src={locationLogo} alt="Logo de WWW"/>
          <p>
            Universidade Federal de Ouro Preto
            Escola de Educação Física
            Ginásio de Esportes 
            LABESPEE - Segundo andar, sala 22/23
          </p>
        </div>
      </div>

      <div className="logos-footer">
        <a href="https://ufop.br/" target="blank">
          <img src={ufopLogo} alt="Logo da Universidade Federal de Ouro Preto"></img>
        </a>

        <a href="https://eefufop.ufop.br/" target="blank">
          <img src={eefLogo} alt="Logo da Universidade Federal de Ouro Preto" />
        </a>

        <a href="http://www3.decom.ufop.br/decom/inicio/" target="blank">
          <img src={decomLogo} alt="Logo da Universidade Federal de Ouro Preto" />
        </a>
        
        <a href="https://labespee.ufop.br/" target="blank">
          <img src={labespeeLogo} alt="Logo da Universidade Federal de Ouro Preto" />
        </a>
      </div>
    </footer>
  );
}