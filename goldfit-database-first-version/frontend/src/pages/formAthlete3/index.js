import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import ButtonFilledCancel from "../../_components/button-cancel/index.js";
import BurgerMenu from "../../_components/burger-menu/Sidebar.js";
import GreenButton from "../../_components/green-button";
import validationSchema from "./formValidation";
import GreenRadio from "../../_components/green-radio/index.js";
import ButtonFilled from "../../_components/button/index.js";

import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  TextField,
} from '@material-ui/core/';

import { useFormik } from "formik";
import api from "../../services/api";
import AuthContext from "../../context/AuthContext";
import CompPercebida from "./components/index.js";
import "./styles.css";

export default function FormAthlete3() {
  const history = useHistory();
  const { authToken } = useContext(AuthContext);
  const [atletas, setAtletas] = useState([]);
  const [atleta, setatleta] = useState({});

  const getAtletas = () => {
    try {
      api
        .get("api/atleta/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(authToken.access),
          },
        })
        .then((response) => {
          setAtletas(response.data);
        });
    } catch (error) {
      console.log(error);
      alert("Erro ao recuperar os atletas cadastrados. Tente novamente!");
    }
  };

  useEffect(() => {
    getAtletas();
  }, []);

  async function createQCompPercebida(data) {
    try {
      let response = await api.post("api/qcompetencia_suporte/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authToken.access),
        },
      });

      if (response.status === 201) {
        history.push("/cadastro-sucesso");
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao cadastrar a avaliação, tente novamente!");
      history.push("/login-credentials");
    }
  }

  // TODO: corrigir o useFormik
  const formik = useFormik({
    initialValues: {
      desempenho_percebido: '1',
      desempenho_comparativo: '1',
      questao1: '',
      questao2: '',
      questao3: '',
      questao4: '',
      questao5: '',
      questao6: '',
      questao7: '',
      questao8: '',
      questao9: '',
      questao10: ''
    },

    validationSchema: validationSchema,
    onSubmit: data => {
      atleta ?
        data.atleta = atleta.id :
        data.atleta = null;
        createQCompPercebida(data);
    }
  });

  return (
    <>
      <BurgerMenu />
      <div className="box-container">
        <section className="box">
          <div className="title-container">
            <h1 className="forms-title">Competência Percebida</h1>
          </div>

          <section className="create-new-athlete" id="create-new-athlete-1">
              <ButtonFilled btn="btn-novo" route="/cadastro-atleta" text="Novo" />
              <div className="input-deficiency">
                <FormControl variant="outlined">
                  <InputLabel id="evaluate-athlete1-atleta-label">
                    Atleta
                  </InputLabel>
                  <Select
                    className="text-field"
                    labelId="evaluate-athlete1-atleta-label"
                    id="evaluate-athlete1-atleta-input"
                    value={atleta}
                    label="Atleta"
                    onChange={e => setatleta(e.target.value)}
                  >
                    {
                      atletas?.map((atleta) => (
                        <MenuItem key={atleta.nome_completo} value={atleta}>
                          {atleta.nome_completo}
                        </MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
              </div>
            </section>

          <form onSubmit={formik.handleSubmit}>
            <div className="form-item">
              <p className="form-subtitle">
                Considerando os fatores físicos, sociais, mentais e habilidades envolvidas no
                FUTEBOL, como você classifica o seu <strong>DESEMPENHO ESPORTIVO ATUAL</strong>?
              </p>
              <RadioGroup
                id="desempenho_percebido"
                name="desempenho_percebido"
                label="Habilidade de Drible"
                value={formik.values.desempenho_percebido}
                onChange={formik.handleChange}
                error={
                  formik.touched.desempenho_percebido &&
                  Boolean(formik.errors.desempenho_percebido)
                }
                helperText={
                  formik.touched.desempenho_percebido && formik.errors.desempenho_percebido
                }
                color="secondary"
                row
                variant="outlined"
                defaultValue={"1"}
              >
                <FormControlLabel value={"1"} control={<GreenRadio />} label="Fraco" />
                <FormControlLabel value={"2"} control={<GreenRadio />} label="Razoável" />
                <FormControlLabel value={"3"} control={<GreenRadio />} label="Bom" />
                <FormControlLabel value={"4"} control={<GreenRadio />} label="Muito Bom" />
                <FormControlLabel value={"5"} control={<GreenRadio />} label="Excelente" />
              </RadioGroup>
            </div>

            <div className="form-item">
              <p className="form-subtitle">
                Como você classifica o seu desempenho esportivo <strong>EM COMPARAÇÃO COM OUTROS ATLETAS</strong> que disputam competições com você?
              </p>
              <RadioGroup
                id="desempenho_comparativo"
                name="desempenho_comparativo"
                label="Habilidade de Drible"
                value={formik.values.desempenho_comparativo}
                onChange={formik.handleChange}
                error={
                  formik.touched.desempenho_comparativo &&
                  Boolean(formik.errors.desempenho_comparativo)
                }
                helperText={
                  formik.touched.desempenho_comparativo && formik.errors.desempenho_comparativo
                }
                color="secondary"
                row
                variant="outlined"
                defaultValue={"1"}
              >
                <FormControlLabel value={"1"} control={<GreenRadio />} label="Fraco" />
                <FormControlLabel value={"2"} control={<GreenRadio />} label="Razoável" />
                <FormControlLabel value={"3"} control={<GreenRadio />} label="Bom" />
                <FormControlLabel value={"4"} control={<GreenRadio />} label="Muito Bom" />
                <FormControlLabel value={"5"} control={<GreenRadio />} label="Excelente" />
              </RadioGroup>
            </div>

            <div className="title-container" id="suporte-familiar-title">
              <h1 className="forms-title">Suporte Familiar</h1>
              <p className="form-subtitle">
                Leia atentamente cada item abaixo e marque um número de 1 a 4, com base na
                frequência com que seus pais realizam as práticas apontadas por cada item.
              </p>
            </div>

            <div className="suporte-familiar-questions">
              <CompPercebida
                id="questao1"
                name="questao1"
                description="Meus pais comparecem às minhas competições."
                value={formik.values.questao1}
                error={
                  formik.touched.questao1 &&
                  Boolean(formik.errors.questao1)
                }
                helperText={formik.touched.questao1 && formik.errors.questao1}
                onChange={formik.handleChange}
              />

              <CompPercebida
                id="questao2"
                name="questao2"
                description="Meus pais modificam a rotina deles devido a minha
                prática esportiva."
                value={formik.values.questao2}
                error={
                  formik.touched.questao2 &&
                  Boolean(formik.errors.questao2)
                }
                helperText={formik.touched.questao2 && formik.errors.questao2}
                onChange={formik.handleChange}
              />

              <CompPercebida
                id="questao3"
                name="questao3"
                description="Meus pais me ajudam a conciliar os meus
                treinamentos com minhas outras obrigações."
                value={formik.values.questao3}
                error={
                  formik.touched.questao3 &&
                  Boolean(formik.errors.questao3)
                }
                helperText={formik.touched.questao3 && formik.errors.questao3}
                onChange={formik.handleChange}
              />

              <CompPercebida
                id="questao4"
                name="questao4"
                description="Meus pais conversam com meus treinadores sobre o meu desempenho no 
                esporte."
                value={formik.values.questao4}
                error={
                  formik.touched.questao4 &&
                  Boolean(formik.errors.questao4)
                }
                helperText={formik.touched.questao4 && formik.errors.questao4}
                onChange={formik.handleChange}
              />

              <CompPercebida
                id="questao5"
                name="questao5"
                description="Meus pais me incentivam a participar de competições."
                value={formik.values.questao5}
                error={
                  formik.touched.questao5 &&
                  Boolean(formik.errors.questao5)
                }
                helperText={formik.touched.questao5 && formik.errors.questao5}
                onChange={formik.handleChange}
              />

              <CompPercebida
                id="questao6"
                name="questao6"
                description="Meus pais me ajudam a superar momentos de dificuldade,
                devido a treinamentos intensos, cansaço e contusões."
                value={formik.values.questao6}
                error={
                  formik.touched.questao6 &&
                  Boolean(formik.errors.questao6)
                }
                helperText={formik.touched.questao6 && formik.errors.questao6}
                onChange={formik.handleChange}
              />

              <CompPercebida
                id="questao7"
                name="questao7"
                description="Meus pais incentivam a minha busca por um desempenho cada vez 
                melhor no esporte."
                value={formik.values.questao7}
                error={
                  formik.touched.questao7 &&
                  Boolean(formik.errors.questao7)
                }
                helperText={formik.touched.questao7 && formik.errors.questao7}
                onChange={formik.handleChange}
              />

              <CompPercebida
                id="questao8"
                name="questao8"
                description="Meus pais me cobram dedicação aos treinamentos."
                value={formik.values.questao8}
                error={
                  formik.touched.questao8 &&
                  Boolean(formik.errors.questao8)
                }
                helperText={formik.touched.questao8 && formik.errors.questao8}
                onChange={formik.handleChange}
              />

              <CompPercebida
                id="questao9"
                name="questao9"
                description="Meus pais financiam os meus gastos com esporte."
                value={formik.values.questao9}
                error={
                  formik.touched.questao9 &&
                  Boolean(formik.errors.questao9)
                }
                helperText={formik.touched.questao9 && formik.errors.questao9}
                onChange={formik.handleChange}
              />

              <CompPercebida
                id="questao10"
                name="questao10"
                description="Meus pais se informam sobre o meu esporte."
                value={formik.values.questao10}
                error={
                  formik.touched.questao10 &&
                  Boolean(formik.errors.questao10)
                }
                helperText={formik.touched.questao10 && formik.errors.questao10}
                onChange={formik.handleChange}
              />
            </div>

            <div className='save-button'>
              <GreenButton
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Cadastrar
              </GreenButton>
            </div>
          </form>
          <div className='cancel-button'>
            <ButtonFilledCancel route="/menu" text="Cancelar" type="button" />
          </div>
        </section>
      </div>
    </>
  );
}