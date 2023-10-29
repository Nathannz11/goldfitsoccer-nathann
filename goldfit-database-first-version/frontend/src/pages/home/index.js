import React from 'react'

import './styles.css'

import Sidebar from '../../_components/burger-menu/Sidebar'
import Tabs from './../../_components/table/tabs'
import TexFieldAutoComplete from './../../_components/textfield-autocomplete'
import SectionSportPotencial from './table-pages/sport-potencial'

export default function InitialView(){
    return (
        <div className="home-container">
            <Sidebar/>
            <div className="right-container">
              <div className="options-container">
                <Tabs>
                  <div label="Potencial Esportivo">
                  <SectionSportPotencial/>
                  </div>
                  <div label="Fatores Antropométricos">
                    After 'while, <em>Crocodile</em>!
                  </div>
                  <div label="Fatores Fisico-motores">
                    Nothing to see here, this tab is <em>extinct</em>!
                  </div>
                  <div label="Maturação Biológica">
                    See ya later, <em>Alligator</em>!
                  </div>
                  <div label="Apoio dos Familiares">
                    After 'while, <em>Crocodile</em>!
                  </div>
                  <div label="Habilidades Táticas">
                    Nothing to see here, this tab is <em>extinct</em>!
                  </div>
                </Tabs>
                </div>
                <div className="selectors-container">
              </div> 
            </div>
        </div>
      );
}


/*
CARD
      /*</div>
            <Header/>
            <div className="cards">
                <Card 
                    id="2458795"
                    photo={photo}
                    name="Lucas Morais Costa"
                    date="01/12/1994"
                    position="Goleiro"
                    club="Atlético Mineiro"
                />
            </div>
            </div>*/