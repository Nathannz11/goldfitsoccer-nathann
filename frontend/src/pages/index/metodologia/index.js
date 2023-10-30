import React from "react";

import './styles.css';
import logo from '../../../_assets/manual-image.svg';
import ButtonFilled from '../../../_components/button';

export default function Metodologia () {
  return (
    <section className='metodologia' >
        <h4>Metodologia</h4>
        <h3>Conheça o protocolo de testes do GoldFit Soccer ®</h3>
        <p>
          Os jovens futebolistas são submetidos a uma bateria de testes
          antropométricos, físico-motores, maturacionais, psicológicos,
          socioambientais e técnico-táticos, além de serem avaliados por 
          seus treinadores quanto aos aspectos intangíveis do potencial 
          esportivo. Utilizando técnicas de modelagem estatística, 
          desenvolvemos um modelo matemático híbrido que estima o potencial 
          sucesso do jovem futebolista, utilizando a Ciência de Dados e o 
          conhecimento dos treinadores numa perspectiva dinâmica e 
          longitudinal.
        </p>
        <h5>
          Projeto Atletas de Ouro - Avaliação do Potencial Esportivo de 
          Jovens Futebolistas
        </h5>

        <iframe width="780" height="400" src="https://www.youtube.com/embed/xMgUYqHtgEI" title="LABESPEE - Projeto Atletas de Ouro - Avaliação do Potencial Esportivo de Jovens Futebolistas" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

        {/* <h5 id='manual-atleta-title'>Manual de Aplicação de Testes do GoldFit Soccer ®</h5>   

        <img src={logo} alt='Imagem do manual de esportes GoldFit'/>
        <ButtonFilled text="Acessar o Manual"/> */}
    </section>
  );
}