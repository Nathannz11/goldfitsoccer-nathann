import React, { useState, useEffect, useContext } from "react";
import './styles.css';
import ButtonFilled from '../../_components/button';
import api from "../../services/api";
import AuthContext from "../../context/AuthContext";
import BurgerMenu from '../../_components/burger-menu/Sidebar.js'
import ReactSpeedometer from "react-d3-speedometer"
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link
} from '@material-ui/core';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
  LinearScale,
  CategoryScale,
  BarElement,
  LineController,
  BarController
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ArcElement,
  LineController,
  BarController
);

const dominancia = {
  1: "Destro",
  2: "Canhoto",
  3: "Ambidestro"
}

const formatDate = date => {
  if (date) {
    let objectDate = new Date(date.replace(/-/g, '\/'));
  
    let day = objectDate.getDate();
  
    let month = objectDate.getMonth();
  
    let year = objectDate.getFullYear();
    
    return `${day}/${month}/${year}`;
  }
  
  return "Sem data";
}

// TODO: adicionar a seleção de atletas por categoria etária para comparação
// TODO: corrigir a estatura para valor percentil e não absoluto
// TODO corrigir os pontos fracos e fortes
// TODO: corrigir o menu hamburguer
// TODO: faltou a agilidade 
// TODO: adicionar cálculo de idade e da data atual

export default function AthleteData() {
  const { authToken } = useContext(AuthContext);

  const [atletas, setAtletas] = useState([]);
  const [atleta, setAtleta] = useState(null);
  const [avaliacao3, setAvaliacao3] = useState({
    estatura: 0,
    salto_vertical_t1: 0,
    velocidade_10m_t1: 0,
    velocidade_20m_t1: 0,
    agilidade_t1: 0,
    drible_t1: 0,
    resistencia: 0,
    habilidades_taticas: 0,
    motivacao: 0,
    habilidades_psicologicas: 0,
    suporte_familiar: 0,
    maturacao_biologica: 0,
    idade_pvc: 0,
  });

  const [dataset3, setDataset3] = useState([0, 0, 0, 0, 0, 0]);

  const [goldScore, setGoldScore] = useState(0);
  const [potencialEsportivo, setPotencialEsportivo] = useState(0);

  const labels = [
    'Velocidade',
    'Agilidade',
    'Salto Vertical',
    'Drible',
    'Flexibilidade',
    'Preensão Manual',
  ];

  const atributos = [
    "velocidade_10m_t1",
    "agilidade_t1",
    "salto_vertical_t1",
    "drible_t1",
    "flexibilidade_t1",
    "preensao_manual_t1",
  ]

  const convertedLabels = {
    velocidade_10m_t1: "Velocidade",
    agilidade_t1: "Agilidade",
    salto_vertical_t1: "Salto Vertical",
    resistencia: "Resistência",
    drible_t1: "Drible",
    flexibilidade_t1: "Flexibilidade",
    preensao_manual_t1: 'Preensão Manual',
  }

  const data2 = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Percentil 50",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: labels.map(() => 50)
      },
      {
        type: "bar",
        label: "Atleta",
        backgroundColor: "rgb(75, 192, 192)",
        data: dataset3,
        borderColor: "white",
        borderWidth: 2
      },
    ]
  }

  const getAtletas = () => {
    try {
      api.get("api/atleta/", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + String(authToken.access),
        },
      })
        .then(response => {
          setAtletas(response.data)
        }
        );
    } catch (error) {
      console.log(error);
      alert("Erro ao recuperar os atletas cadastrados. Tente novamente!");
    }
  }

  const convertDataset = (avaliacao) => {
    const convertedDataset = avaliacao ? [
      avaliacao.velocidade_10m_t1,
      avaliacao.agilidade_t1,
      avaliacao.salto_vertical_t1,
      avaliacao.drible_t1,
      avaliacao.flexibilidade_t1,
      avaliacao.preensao_manual_t1,
    ] : [0, 0, 0, 0, 0, 0]

    return convertedDataset;
  }

  const getGoldScore = (atleta) => {
    try {
      if (atleta) {
        api.get(`api/atleta/${atleta.id}/gold_score`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + String(authToken.access),
          },
        })
          .then(response => {
            setGoldScore(response.data.gold_score)
            console.log(response.data.potencial_esportivo)
            setPotencialEsportivo(response.data.probabilidade_sucesso)
          }
          );
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao calcular o Gold Score do Atleta. Tente novamente!");
    }
  }

  useEffect(() => {
    getAtletas();
  }, []);

  useEffect(() => {
    getGoldScore(atleta);

    try {
      if (atleta) {
        api.get(`api/atleta/${atleta.id}/av_antropometrica_fisicomotora`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + String(authToken.access),
          },
        })
          .then(response => {
            setAvaliacao3(response.data);
          }
          );
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao recuperar os dados do atleta. Tente novamente!");
    }
  }, [atleta]);


  useEffect(() => {
    const avalicaoConvertida = convertDataset(avaliacao3);
    setDataset3(avalicaoConvertida);
  }, [avaliacao3]);


  return (
    <>
      <BurgerMenu />

      <section className="sports-potential-container">
        <div className="sports-potential-box">
          <div className="sports-potential-titles">
            <h1>Avaliação do Potencial Esportivo</h1>
            <h2>Relatório Individual</h2>
            <p id="title-athlete-data">Entenda os seus resultados </p>
          </div>

          <div className="sports-potential-select">
            <FormControl variant="outlined" id='first-select'>
              <InputLabel>Atleta</InputLabel>
              <Select value={atleta} className="select-field" label='Atleta' onChange={e => setAtleta(e.target.value)}>
                {
                  atletas?.map((atleta) => (
                    <MenuItem key={atleta.id} value={atleta}>{atleta.nome_completo}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </div>


          <h3>Atleta</h3>

          <section className="data-display">
            <div className="column">
              <p><strong>Nome:</strong> {atleta?.nome_completo}</p>
              <p><strong>Sexo:</strong> {atleta? (atleta?.sexo === 1 ? "Masculino" : "Feminino") : ""}</p>
              <p><strong>Data de Nascimeto:</strong> {atleta? formatDate(atleta?.data_nascimento) : ""}</p>
              <p><strong>Posição de Jogo:</strong> {atleta?.posicao_jogo}</p>
            </div>

            <div className="column">
              <p><strong>Dominância:</strong> {dominancia[atleta?.dominancia_pes]}</p>
              <p><strong>Instituição/Clube:</strong> {atleta?.instituicao_clube}</p>
              <p><strong>Cidade:</strong> {atleta?.cidade}</p>
              <p><strong>Estado:</strong> {atleta?.estado}</p>
            </div>
          </section>

          <div className="sports-potential-graph-gauge">
            <ReactSpeedometer
              needleTransitionDuration={4000}
              needleTransition="easeElastic"
              fluidWidth={true}
              maxValue={100}
              segments={3}
              value={goldScore}
              segmentColors={['#aa8736', '#9f9ea3', '#Ffd700']}
              needleColor="#313B44"
              customSegmentStops={[0, 40, 70, 100]}
              currentValueText={`GOLD SCORE SOCCER: ${goldScore.toFixed(1)}%`}
              // currentValueText=""
              customSegmentLabels={[
                {
                  text: 'Bronze',
                  position: 'INSIDE',
                  color: '#555',
                },
                {
                  text: 'Prata',
                  position: 'INSIDE',
                  color: '#555',
                },
                {
                  text: 'Ouro',
                  position: 'INSIDE',
                  color: '#555',
                },
              ]}
            />
          </div>

          {/* TODO: verificar se esse número está em escala de porcentagem */}
          <h3>Probabilidade de Sucesso: {(potencialEsportivo * 100).toFixed(1)}%</h3>
          {
            potencialEsportivo * 100 < 16 ? <h3>Baixo Potencial</h3> : <h3>Alto Potencial</h3>
          }

          <Bar data={data2} />

          <section className="attributes-container">
            <h3>Pontos Fracos:</h3>
            <ul className="attributes">
              {
                atributos.map(item => {
                  if (avaliacao3[item] >= 0 && avaliacao3[item] < 30)
                    return <li>{convertedLabels[item]}</li>
                  return "";
                })
              }
            </ul>

            <h3>Pontos Fortes:</h3>
            <ul className="attributes">
              {
                atributos.map(item => {
                  if (avaliacao3[item] > 70)
                    return <li>{convertedLabels[item]}</li>
                  return "";
                })
              }
            </ul>
          </section>

          {/* TODO: adicionar imagem com recurso futuro*/}
          <ButtonFilled text="Sair" route="/menu" className="exit-button-graphs" />
        </div>
      </section>
    </>
  )
}
