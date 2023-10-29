import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import GreenButton from "../../_components/green-button/index.js";
import BurgerMenu from "../../_components/burger-menu/Sidebar.js";
import validationSchema from "./formValidation";
import api from "../../services/api";
import SOQ from "./components/index.js";
import AuthContext from "../../context/AuthContext";
import ButtonFilledCancel from "../../_components/button-cancel/index.js";
import ButtonFilled from "../../_components/button/index.js";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core"

import "./styles.css";

export default function FormAthlete2() {
  const history = useHistory();
  const { authToken } = useContext(AuthContext);
  const [atletas, setAtletas] = useState([]);
  const [atleta, setatleta] = useState({});

  async function createQSOQ(data) {
    try {
      let response = await api.post("api/qsoq/", data, {
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

  const formik = useFormik({
    initialValues: {
      questao1: '',
      questao2: '',
      questao3: '',
      questao4: '',
      questao5: '',
      questao6: '',
      questao7: '',
      questao8: '',
      questao9: '',
      questao10: '',
      questao11: '',
      questao12: '',
      questao13: '',
      questao14: '',
      questao15: '',
      questao16: '',
      questao17: '',
      questao18: '',
      questao19: '',
      questao20: '',
      questao21: '',
      questao22: '',
      questao23: '',
    },

    validationSchema: validationSchema,
    onSubmit: data => {
      atleta ?
        data.atleta = atleta.id :
        data.atleta = null;
        createQSOQ(data);
    }
  });

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

  return (
    <>
      <BurgerMenu />

      <div className="box-container">
        <section className="box">
          <div className="title-container">
            <h1 className="forms-title">Orientação Motivacional (SOQ) </h1>
            <p className="form-subtitle">
            As afirmativas abaixo descrevem reações e situações esportivas. Queremos 
            saber como você se sente, normalmente, em relação aos esportes e à 
            competição. Leia cada afirmativa e marque a letra que indica o grau de 
            concordância ou discordância de cada uma delas.
            </p>
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
            <SOQ
              id="questao1"
              name="questao1"
              description="Eu sou um competidor determinado."
              value={formik.values.questao1}
              error={
                formik.touched.questao1 &&
                Boolean(formik.errors.questao1)
              }
              helperText={formik.touched.questao1 && formik.errors.questao1}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao2"
              name="questao2"
              description="Vencer é importante."
              value={formik.values.questao2}
              error={
                formik.touched.questao2 &&
                Boolean(formik.errors.questao2)
              }
              helperText={formik.touched.questao2 && formik.errors.questao2}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao3"
              name="questao3"
              description="Eu sou uma pessoa competitiva."
              value={formik.values.questao3}
              error={
                formik.touched.questao3 &&
                Boolean(formik.errors.questao3)
              }
              helperText={formik.touched.questao3 && formik.errors.questao3}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao4"
              name="questao4"
              description="Eu estabeleço objetivos próprios quando estou competindo."
              value={formik.values.questao4}
              error={
                formik.touched.questao4 &&
                Boolean(formik.errors.questao4)
              }
              helperText={formik.touched.questao4 && formik.errors.questao4}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao5"
              name="questao5"
              description="Eu tento vencer com muito empenho."
              value={formik.values.questao5}
              error={
                formik.touched.questao5 &&
                Boolean(formik.errors.questao5)
              }
              helperText={formik.touched.questao5 && formik.errors.questao5}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao6"
              name="questao6"
              description="Marcar mais pontos que o adversário é muito importante
              para mim."
              value={formik.values.questao6}
              error={
                formik.touched.questao6 &&
                Boolean(formik.errors.questao6)
              }
              helperText={formik.touched.questao6 && formik.errors.questao6}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao7"
              name="questao7"
              description="Eu fico na expectativa para competir."
              value={formik.values.questao7}
              error={
                formik.touched.questao7 &&
                Boolean(formik.errors.questao7)
              }
              helperText={formik.touched.questao7 && formik.errors.questao7}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao8"
              name="questao8"
              description="Eu sou mais competitivo quando estabeleço objetivos
              pessoais."
              value={formik.values.questao8}
              error={
                formik.touched.questao8 &&
                Boolean(formik.errors.questao8)
              }
              helperText={formik.touched.questao8 && formik.errors.questao8}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao9"
              name="questao9"
              description="Eu odeio perder."
              value={formik.values.questao9}
              error={
                formik.touched.questao9 &&
                Boolean(formik.errors.questao9)
              }
              helperText={formik.touched.questao9 && formik.errors.questao9}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao10"
              name="questao10"
              description="Eu me supero nas competições."
              value={formik.values.questao10}
              error={
                formik.touched.questao10 &&
                Boolean(formik.errors.questao10)
              }
              helperText={formik.touched.questao10 && formik.errors.questao10}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao11"
              name="questao11"
              description="Eu tento o máximo quando tenho um objetivo específico."
              value={formik.values.questao11}
              error={
                formik.touched.questao11 &&
                Boolean(formik.errors.questao11)
              }
              helperText={formik.touched.questao11 && formik.errors.questao11}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao12"
              name="questao12"
              description="Meu objetivo é ser o melhor atleta possível."
              value={formik.values.questao12}
              error={
                formik.touched.questao12 &&
                Boolean(formik.errors.questao12)
              }
              helperText={formik.touched.questao12 && formik.errors.questao12}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao13"
              name="questao13"
              description="Só me sinto satisfeito quando venço."
              value={formik.values.questao13}
              error={
                formik.touched.questao13 &&
                Boolean(formik.errors.questao13)
              }
              helperText={formik.touched.questao13 && formik.errors.questao13}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao14"
              name="questao14"
              description="Desempenhar da melhor maneira é muito importante
              para mim."
              value={formik.values.questao14}
              error={
                formik.touched.questao14 &&
                Boolean(formik.errors.questao14)
              }
              helperText={formik.touched.questao14 && formik.errors.questao14}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao15"
              name="questao15"
              description="Eu trabalho duro para ter sucesso no esporte."
              value={formik.values.questao15}
              error={
                formik.touched.questao15 &&
                Boolean(formik.errors.questao15)
              }
              helperText={formik.touched.questao15 && formik.errors.questao15}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao16"
              name="questao16"
              description="Perder me deixa aborrecido."
              value={formik.values.questao16}
              error={
                formik.touched.questao16 &&
                Boolean(formik.errors.questao16)
              }
              helperText={formik.touched.questao16 && formik.errors.questao16}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao17"
              name="questao17"
              description="O melhor teste para minha capacidade é competir contra
              os outros."
              value={formik.values.questao17}
              error={
                formik.touched.questao17 &&
                Boolean(formik.errors.questao17)
              }
              helperText={formik.touched.questao17 && formik.errors.questao17}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao18"
              name="questao18"
              description="Alcançar objetivos de desempenho pessoal é muito
              importante para mim."
              value={formik.values.questao18}
              error={
                formik.touched.questao18 &&
                Boolean(formik.errors.questao18)
              }
              helperText={formik.touched.questao18 && formik.errors.questao18}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao19"
              name="questao19"
              description="Fico na expectativa de ter oportunidade de testar minha habilidade em competição."
              value={formik.values.questao19}
              error={
                formik.touched.questao19 &&
                Boolean(formik.errors.questao19)
              }
              helperText={formik.touched.questao19 && formik.errors.questao19}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao20"
              name="questao20"
              description="Eu sinto a maior alegria quando venço."
              value={formik.values.questao20}
              error={
                formik.touched.questao20 &&
                Boolean(formik.errors.questao20)
              }
              helperText={formik.touched.questao20 && formik.errors.questao20}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao21"
              name="questao21"
              description="Eu tenho meu melhor desempenho quando estou
              competindo contra os outros."
              value={formik.values.questao21}
              error={
                formik.touched.questao21 &&
                Boolean(formik.errors.questao21)
              }
              helperText={formik.touched.questao21 && formik.errors.questao21}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao22"
              name="questao22"
              description="A melhor maneira de determinar a minha capacidade é
              estabelecer um objetivo e tentar alcançá-lo."
              value={formik.values.questao22}
              error={
                formik.touched.questao22 &&
                Boolean(formik.errors.questao22)
              }
              helperText={formik.touched.questao22 && formik.errors.questao22}
              onChange={formik.handleChange}
            />

            <SOQ
              id="questao23"
              name="questao23"
              description="Eu quero ser o melhor toda vez que estou competindo."
              value={formik.values.questao23}
              error={
                formik.touched.questao23 &&
                Boolean(formik.errors.questao23)
              }
              helperText={formik.touched.questao23 && formik.errors.questao23}
              onChange={formik.handleChange}
            />

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