import React, { useState, useEffect, useContext } from "react";
import './styles.css';
import ButtonFilled from '../../_components/button';
import api from "../../services/api";
import AuthContext from "../../context/AuthContext";
import BurgerMenu from '../../_components/burger-menu/Sidebar.js'
import ReactSpeedometer from "react-d3-speedometer"
import recursoFuturo from "../../_assets/recurso_futuro.png"
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

import { Radar, Bar } from 'react-chartjs-2';

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

// TODO: adicionar a seleção de atletas por categoria etária para comparação
// TODO: corrigir a estatura para valor percentil e não absoluto
// TODO corrigir os pontos fracos e fortes
// TODO: corrigir o menu hamburguer
// TODO: faltou a agilidade 

export default function GraphSportsPotential() {
  const { authToken } = useContext(AuthContext);

  const [atletas, setAtletas] = useState([]);
  const [atleta1, setAtleta1] = useState({ nome_completo: 'Atleta 1' });
  const [atleta2, setAtleta2] = useState({ nome_completo: 'Atleta 2' });
  const [atleta3, setAtleta3] = useState(null);

  const [avaliacao1, setAvaliacao1] = useState({
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
  const [avaliacao2, setAvaliacao2] = useState({
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

  const [dataset1, setDataset1] = useState([0, 0, 0, 0, 0, 0, 0, 0,]);
  const [dataset2, setDataset2] = useState([0, 0, 0, 0, 0, 0, 0, 0,]);
  const [dataset3, setDataset3] = useState([0, 0, 0, 0, 0, 0, 0, 0,]);

  const [goldScore, setGoldScore] = useState(0);
  const [potencialEsportivo, setPotencialEsportivo] = useState(0);

  const labels = [
    'Velocidade',
    'Agilidade',
    'Salto Vertical',
    'Resistência',
    'Drible',
    'Habilidades Táticas',
    'Habilidades Psicológicas',
    'Apoio Familiar'
  ];

  const atributos = [
    "velocidade_10m_t1",
    "agilidade_t1",
    "salto_vertical_t1",
    "resistencia",
    "drible_t1",
    "habilidades_taticas",
    "habilidades_psicologicas",
    "suporte_familiar",
  ]

  const convertedLabels = {
    velocidade_10m_t1: "Velocidade",
    agilidade_t1: "Agilidade",
    salto_vertical_t1: "Salto Vertical",
    resistencia: "Resistência",
    drible_t1: "Drible",
    habilidades_taticas: "Habilidades Táticas",
    habilidades_psicologicas: 'Habilidades Psicológicas',
    suporte_familiar: "Apoio Familiar",
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Atleta 1',
        data: dataset1,
        backgroundColor: 'rgba(0,128,0, 0.2)',
        borderColor: 'rgba(0,128,0, 1)',
        borderWidth: 1,
      },
      {
        label: 'Atleta 2',
        data: dataset2,
        backgroundColor: 'rgba(255,215,0, 0.2)',
        borderColor: 'rgba(255,215,0, 1)',
        borderWidth: 1,
      },
    ],
  };

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

  const rows = [
    {
      name: 'Estatura',
      valor_avaliacao1: avaliacao1.estatura,
      valor_avaliacao2: avaliacao2.estatura
    },
    {
      name: 'Velocidade',
      valor_avaliacao1: avaliacao1.velocidade_10m_t1,
      valor_avaliacao2: avaliacao2.velocidade_10m_t1
    },
    {
      name: 'Salto Vertical',
      valor_avaliacao1: avaliacao1.salto_vertical_t1,
      valor_avaliacao2: avaliacao2.salto_vertical_t1
    },
    {
      name: 'Resistência',
      valor_avaliacao1: avaliacao1.resistencia,
      valor_avaliacao2: avaliacao2.resistencia
    },
    {
      name: 'Drible',
      valor_avaliacao1: avaliacao1.drible_t1,
      valor_avaliacao2: avaliacao2.drible_t1
    },
    {
      name: 'Habilidades Táticas',
      valor_avaliacao1: avaliacao1.habilidades_taticas,
      valor_avaliacao2: avaliacao2.habilidades_taticas
    },
    {
      name: 'Motivação',
      valor_avaliacao1: avaliacao1.motivacao,
      valor_avaliacao2: avaliacao2.motivacao
    },
    {
      name: 'Habilidades Psicológicas',
      valor_avaliacao1: avaliacao1.habilidades_psicologicas,
      valor_avaliacao2: avaliacao2.habilidades_psicologicas
    },
    {
      name: 'Suporte Familiar',
      valor_avaliacao1: avaliacao1.suporte_familiar,
      valor_avaliacao2: avaliacao2.suporte_familiar
    },
    {
      name: 'Maturação Biológica',
      valor_avaliacao1: avaliacao1.maturacao_biologica,
      valor_avaliacao2: avaliacao2.maturacao_biologica
    },
    {
      name: 'Idade do PVC',
      valor_avaliacao1: avaliacao1.idade_pvc,
      valor_avaliacao2: avaliacao2.idade_pvc
    },
  ];

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
      avaliacao.resistencia,
      avaliacao.drible_t1,
      avaliacao.habilidades_taticas,
      avaliacao.habilidades_psicologicas,
      avaliacao.suporte_familiar,
    ] : [0, 0, 0, 0, 0, 0, 0, 0]

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
    try {
      if (atleta1) {
        api.get(`api/atleta/${atleta1.id}/av_antropometrica_fisicomotora`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + String(authToken.access),
          },
        })
          .then(response => {
            setAvaliacao1(response.data);
          }
          );
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao recuperar os dados do atleta. Tente novamente!");
    }
  }, [atleta1]);

  useEffect(() => {
    try {
      if (atleta2) {
        api.get(`api/atleta/${atleta2.id}/av_antropometrica_fisicomotora`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + String(authToken.access),
          },
        })
          .then(response => {
            setAvaliacao2(response.data);
          }
          );
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao recuperar os dados do atleta. Tente novamente!");
    }
  }, [atleta2]);

  useEffect(() => {
    getGoldScore(atleta3);

    try {
      if (atleta3) {
        api.get(`api/atleta/${atleta3.id}/av_antropometrica_fisicomotora`, {
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
  }, [atleta3]);

  useEffect(() => {
    const avalicaoConvertida = convertDataset(avaliacao1);
    setDataset1(avalicaoConvertida)
  }, [avaliacao1]);

  useEffect(() => {
    const avalicaoConvertida = convertDataset(avaliacao2);
    setDataset2(avalicaoConvertida)
  }, [avaliacao2]);

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
            <h2>Relatório Individual Comparativo</h2>
          </div>

          <div className="sports-potential-select">
            <FormControl variant="outlined" id='first-select'>
              <InputLabel>Atleta 1</InputLabel>
              <Select value={atleta1} className="select-field" label='Atleta 1' onChange={e => setAtleta1(e.target.value)}>
                {
                  atletas?.map((atleta) => (
                    <MenuItem key={atleta.nome_completo} value={atleta}>{atleta.nome_completo}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>

            <FormControl variant="outlined">
              <InputLabel>Atleta 2</InputLabel>
              <Select value={atleta2} className="select-field" label='Atleta 2' onChange={e => setAtleta2(e.target.value)}>
                {
                  atletas?.map((atleta) => (
                    <MenuItem key={atleta.id} value={atleta}>{atleta.nome_completo}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </div>

          <div className="sports-potential-table">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Categoria</strong></TableCell>
                    <TableCell align="center"><strong>{atleta1.nome_completo}</strong></TableCell>
                    <TableCell align="center"><strong>{atleta2.nome_completo}</strong></TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.valor_avaliacao1}</TableCell>
                      <TableCell align="center">{row.valor_avaliacao2}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <div className="sports-potential-graph">
            <Radar data={data} />
          </div>

          <ButtonFilled text="Sair" route="/menu" className="exit-button-graphs" />
        </div>
      </section>
    </>
  )
}
