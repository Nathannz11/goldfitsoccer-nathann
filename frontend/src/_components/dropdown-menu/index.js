import React, { useRef } from "react";

import './styles.css'

import Menu from '../../_assets/menu.svg'
import { useDetectOutsideClick } from "./useDetectOutsideClick";


export default function DropDownMenu() {
  
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    return (
        <div className="menu-container">
            <button onClick={onClick} className="menu-trigger">
            <img src={Menu}></img>
        </button>
        <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
          <ul>
            <li>
              <a href="#">Gerar Relatório do Atleta</a>
            </li>
            <li>
              <a href="#">Visualizar Perfil</a>
            </li>
          </ul>
        </nav>
      </div>
  );
}
