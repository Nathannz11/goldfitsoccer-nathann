import React from 'react'

import './styles.css'
import logo from '../../../_assets/logo-fundo-2 1.svg';
import ButtonFilled from '../../../_components/button';

export default function Inicio(){
    return (
      <section id='section-1'>
        <div className='inicio-content'> 
          <div className='inicio-text-content'>
            <h4>GoldFit Soccer ®</h4>
            <h3>
              Identificação de jovens futebolistas com potencial de se
              tornarem atletas de alto rendimento
            </h3>
            <p>
              Suporte online às decisões dos treinadores quanto à 
              identificação, seleção e desenvolvimento de talentos para
              o futebol brasileiro
            </p>
            <ButtonFilled className="entrar" text="Entrar" route="/menu"/>
          </div>
          <img src={logo} alt="Logo do sistema Goldfit Soccer." />
        </div>
      </section>
      );
}
