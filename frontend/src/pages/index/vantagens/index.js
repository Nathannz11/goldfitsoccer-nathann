import React from 'react'

import './styles.css'
import image1 from '../../../_assets/257_personal_data_flatline.svg';
import image2 from '../../../_assets/256_personal_data_flatline.svg';
import image3 from '../../../_assets/248_checklist_flatline.svg';
import ButtonFilled from '../../../_components/button';

export default function Vantagens() {
    return (
      <section id='vantagens'>
          <div className='vantagens-text-content'>
            <h4>Vantagens</h4>
            <h3>Conheça algumas das vantagens do GoldFit Soccer ®</h3>
          </div>

          <section className="vantagens-card-container">
            <div className="vantagens-card">
              <img src={ image1 } alt="Imagem simulando uma dashboard"/>
              <p>
                Identifica jovens futebolistas com maior potencial
                de sucesso futuro
              </p>
            </div>

            <div className="vantagens-card">
              <img src={ image2 } alt="Imagem de uma prancheta com dados de uma pessoa"/>
              <p>
                Auxilia os treinadores na gestão do potencial dos
                seus atletas
              </p>
            </div>

            <div className="vantagens-card">
              <img src={ image3 }  alt="Imagem de uma prancheta com um checklist"/>
              <p>
                Reduz os erros de seleção e a perda de potenciais talentos
              </p>
            </div>
          </section>
          
          <div className='vantagens-text-content' id="second-vantagens-text-content">
            <h4>Conheça Mais da Ferramenta</h4>
            <h3>
              Navegue pela versão completa da ferramenta em 
              seu protótipo e conheça todas as funcionalidades
            </h3>
            {/* <h4>Conheça Mais da Ferramenta</h4>
            <h3>
              Participe de nossa Avaliação dos Determinantes para 
              o desenvolvimento de Jovens Futebolistas em prol do 
              futebol de base brasileiro
            </h3> */}


            {/* <ButtonFilled text="Visitar!" > */}
              <a 
                href="https://www.figma.com/proto/OcAlLFQycG9CrSLpnUcvFs/GoldFit?node-id=174-750&starting-point-node-id=238%3A212"
                className="figma-link nav-item"
                target="_blank"
              >
                Visitar
              </a>
            {/* </ButtonFilled> */}
          </div>
        </section>
      );
}
