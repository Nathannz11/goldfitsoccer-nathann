import React from 'react';

import './styles.css';
import Header from '../../_components/header';
import Inicio from './inicio';
import Descricao from './o-que-e';
import Vantagens from './vantagens';
import Metodologia from './metodologia';
import Sobre from './sobre';
import Footer from '../../_components/footer';

export default function Index(){
    return (
        <section className="index-container">
          <Header />
          <Inicio />
          <Descricao />
          <Vantagens />
          <Metodologia />
          <Sobre/>
          <Footer />
        </section>
      );
}
