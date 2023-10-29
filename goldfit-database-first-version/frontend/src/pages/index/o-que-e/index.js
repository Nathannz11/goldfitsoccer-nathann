import React from 'react'

import './styles.css'
import logo from '../../../_assets/report_analysis_ 1.svg';

export default function Descricao() {
    return (
      <section>
        <div className='descricao-content'> 
          <img src={logo} alt="Logo do sistema Goldfit Soccer." />
          <div className='descricao-text-content'>
            <h4>O que é?</h4>
            <h3>
              O GoldFit Soccer ® é uma inovação tecnológica para identificação e
              desenvolvimento de talentos no futebol
            </h3>
            <p>
              É um sistema inteligente de avaliação do potencial
              esportivo de jovens futebolistas que tem por finalidade
              identificar talentos e auxiliar os treinadores no
              processo de seleção e desenvolvimento dos atletas,
              maximizando as chances de sucesso no futuro
            </p>
          </div>
        </div>
      </section>
      );
}
