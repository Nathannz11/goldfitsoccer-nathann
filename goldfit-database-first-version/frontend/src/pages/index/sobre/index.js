import React from "react";

import './styles.css';
import soccer from "../../../_assets/soccer.svg";
import checkmark from "../../../_assets/checkmark.svg";

export default function Sobre() {
	return (
		<section className="sobre">
			<div className="sobre-text-content">
				<h4>Sobre o Sistema</h4>
				<h3>
					Métodos consolidados que garantem resultados promissores na 
					detecção de jovens talentos
				</h3>
			</div>

			<div className="sobre-content">
				<div className="sobre-image-container">
					<img id="logo-sobre" src={soccer} alt="Imagem de uma pessoa jogando futebol"/>
				</div>
				<ul>
					<li className="sobre-list-item">
						<img src={checkmark} alt="Imagem de um símbolo de check"/>
						<p>
							Abordagem Dinâmica do Talento Esportivo
						</p>
					</li>

					<li className="sobre-list-item">
						<img src={checkmark} alt="Imagem de um símbolo de check"/>
						<p>
							Avaliação da Maturação Biológica
						</p>
					</li>

					<li className="sobre-list-item">
						<img src={checkmark} alt="Imagem de um símbolo de check"/>
						<p>
							Modelagem Estatística
						</p>
					</li>

					<li className="sobre-list-item">
						<img src={checkmark} alt="Imagem de um símbolo de check"/>
						<p>
							Monitoramento Longitudinal
						</p>
					</li>

					<li className="sobre-list-item">
						<img src={checkmark} alt="Imagem de um símbolo de check"/>
						<p>
							Feedback Individualizado
						</p>
					</li>

					<li className="sobre-list-item">
						<img src={checkmark} alt="Imagem de um símbolo de check"/>
						<p>
							Relatórios Gerenciais
						</p>
					</li>

					<li className="sobre-list-item">
						<img src={checkmark} alt="Imagem de um símbolo de check"/>
						<p>
							Bateria de Testes Multidimensional conjugada com o Olhar do
							Treinador
						</p>
					</li>
				</ul>
			</div>
    </section>
	);
}