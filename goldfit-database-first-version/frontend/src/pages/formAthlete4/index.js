import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import GreenButton from "../../_components/green-button/index.js";
import BurgerMenu from "../../_components/burger-menu/Sidebar.js";
import validationSchema from "./formValidation";
import api from "../../services/api";
import ACSI from "./components/index.js";
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

// TODO: pegar o atleta de acordo com seu login

export default function FormAthlete4() {
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

  async function createACSI(data) {
    try {
      let response = await api.post("api/qacsi/", data, {
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
      questao24: '',
      questao25: '',
      questao26: '',
      questao27: '',
    },

    validationSchema: validationSchema,
    onSubmit: data => {
      atleta ?
        data.atleta = atleta.id :
        data.atleta = null;
      createACSI(data);
    }
  });

  return (
    <>
      <BurgerMenu />

      <div className="box-container">
        <section className="box">
          <div className="title-container">
            <h1 className="forms-title">Habilidades de Coping (ACSI)</h1>
            <p className="form-subtitle">
              Os itens abaixo se referem às indicações que os atletas descrevem suas experiências
              de como lidar com o estresse. Por favor, leia cada frase cuidadosamente e tente
              recordar com que frequência você experimenta as situações abaixo tão exatamente
              quanto possível.
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
            <ACSI
              id="questao1"
              name="questao1"
              description="Diariamente ou semanalmente eu estabeleço metas muito específicas que me guiam no que fazer."
              value={formik.values.questao1}
              error={
                formik.touched.questao1 &&
                Boolean(formik.errors.questao1)
              }
              helperText={formik.touched.questao1 && formik.errors.questao1}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao2"
              name="questao2"
              description="Eu tiro o maior proveito dos meus talentos e habilidades."
              value={formik.values.questao2}
              error={
                formik.touched.questao2 &&
                Boolean(formik.errors.questao2)
              }
              helperText={formik.touched.questao2 && formik.errors.questao2}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao3"
              name="questao3"
              description="Quando o professor ou treinador me diz como corrigir um erro que eu tenha cometido eu tenho tendência a ficar aborrecido/incomodado."
              value={formik.values.questao3}
              error={
                formik.touched.questao3 &&
                Boolean(formik.errors.questao3)
              }
              helperText={formik.touched.questao3 && formik.errors.questao3}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao4"
              name="questao4"
              description="Quando estou praticando esportes, eu consigo focar minha atenção e bloquear distrações."
              value={formik.values.questao4}
              error={
                formik.touched.questao4 &&
                Boolean(formik.errors.questao4)
              }
              helperText={formik.touched.questao4 && formik.errors.questao4}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao5"
              name="questao5"
              description="Eu permaneço positivo e entusiasmado durante a competição, não importa quão ruim a situação esteja."
              value={formik.values.questao5}
              error={
                formik.touched.questao5 &&
                Boolean(formik.errors.questao5)
              }
              helperText={formik.touched.questao5 && formik.errors.questao5}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao6"
              name="questao6"
              description="Minha tendência é competir melhor sob pressão, pois eu penso mais claramente."
              value={formik.values.questao6}
              error={
                formik.touched.questao6 &&
                Boolean(formik.errors.questao6)
              }
              helperText={formik.touched.questao6 && formik.errors.questao6}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao7"
              name="questao7"
              description="Eu me preocupo um pouco sobre o que as pessoas pensam sobre meu desempenho."
              value={formik.values.questao7}
              error={
                formik.touched.questao7 &&
                Boolean(formik.errors.questao7)
              }
              helperText={formik.touched.questao7 && formik.errors.questao7}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao8"
              name="questao8"
              description="Tenho tendência a fazer muitos planos sobre como atingir minhas metas."
              value={formik.values.questao8}
              error={
                formik.touched.questao8 &&
                Boolean(formik.errors.questao8)
              }
              helperText={formik.touched.questao8 && formik.errors.questao8}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao9"
              name="questao9"
              description="Eu sinto confiante de que eu irei competir bem."
              value={formik.values.questao9}
              error={
                formik.touched.questao9 &&
                Boolean(formik.errors.questao9)
              }
              helperText={formik.touched.questao9 && formik.errors.questao9}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao10"
              name="questao10"
              description="Quando um professor ou treinador me critica, eu fico aborrecido/incomodado ao invés de me sentir ajudado."
              value={formik.values.questao10}
              error={
                formik.touched.questao10 &&
                Boolean(formik.errors.questao10)
              }
              helperText={formik.touched.questao10 && formik.errors.questao10}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao11"
              name="questao11"
              description="É fácil me manter concentrado em uma tarefa mesmo quando estou assistindo ou ouvindo algo."
              value={formik.values.questao11}
              error={
                formik.touched.questao11 &&
                Boolean(formik.errors.questao11)
              }
              helperText={formik.touched.questao11 && formik.errors.questao11}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao12"
              name="questao12"
              description="Eu me pressiono muito ao me preocupar como será meu desempenho."
              value={formik.values.questao12}
              error={
                formik.touched.questao12 &&
                Boolean(formik.errors.questao12)
              }
              helperText={formik.touched.questao12 && formik.errors.questao12}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao13"
              name="questao13"
              description="Eu não necessito que me recomendem a praticar ou competir duro; eu dou 100%."
              value={formik.values.questao13}
              error={
                formik.touched.questao13 &&
                Boolean(formik.errors.questao13)
              }
              helperText={formik.touched.questao13 && formik.errors.questao13}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao14"
              name="questao14"
              description="Se um treinador me criticar ou gritar comigo, eu corrijo o erro sem ficar aborrecido/incomodado com isso."
              value={formik.values.questao14}
              error={
                formik.touched.questao14 &&
                Boolean(formik.errors.questao14)
              }
              helperText={formik.touched.questao14 && formik.errors.questao14}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao15"
              name="questao15"
              description="Eu lido com situações inesperadas no meu esporte muito bem."
              value={formik.values.questao15}
              error={
                formik.touched.questao15 &&
                Boolean(formik.errors.questao15)
              }
              helperText={formik.touched.questao15 && formik.errors.questao15}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao16"
              name="questao16"
              description="Quando as coisas estão ruins, eu digo a mim mesmo para ficar calmo e isso funciona para ficar calmo e isso funciona para mim."
              value={formik.values.questao16}
              error={
                formik.touched.questao16 &&
                Boolean(formik.errors.questao16)
              }
              helperText={formik.touched.questao16 && formik.errors.questao16}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao17"
              name="questao17"
              description="Quando mais pressão houver na competição, mais eu gosto."
              value={formik.values.questao17}
              error={
                formik.touched.questao17 &&
                Boolean(formik.errors.questao17)
              }
              helperText={formik.touched.questao17 && formik.errors.questao17}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao18"
              name="questao18"
              description="Durante as competições eu me preocupo se vou cometer erros ou não vou conseguir ir até o fim."
              value={formik.values.questao18}
              error={
                formik.touched.questao18 &&
                Boolean(formik.errors.questao18)
              }
              helperText={formik.touched.questao18 && formik.errors.questao18}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao19"
              name="questao19"
              description="Eu tenho meu plano de competição completamente estruturado na minha mente muito antes de começar."
              value={formik.values.questao19}
              error={
                formik.touched.questao19 &&
                Boolean(formik.errors.questao19)
              }
              helperText={formik.touched.questao19 && formik.errors.questao19}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao20"
              name="questao20"
              description="Quando eu sinto que estou ficando muito tenso, eu posso rapidamente relaxar meu corpo e me acalmar."
              value={formik.values.questao20}
              error={
                formik.touched.questao20 &&
                Boolean(formik.errors.questao20)
              }
              helperText={formik.touched.questao20 && formik.errors.questao20}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao21"
              name="questao21"
              description="Para mim, situações sobre pressão são desafios que eu recebo bem."
              value={formik.values.questao21}
              error={
                formik.touched.questao21 &&
                Boolean(formik.errors.questao21)
              }
              helperText={formik.touched.questao21 && formik.errors.questao21}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao22"
              name="questao22"
              description="Eu penso e imagino sobre o que irá acontecer se eu falhar ou estragar tudo."
              value={formik.values.questao22}
              error={
                formik.touched.questao22 &&
                Boolean(formik.errors.questao22)
              }
              helperText={formik.touched.questao22 && formik.errors.questao22}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao23"
              name="questao23"
              description="Eu mantenho o controle emocional, não importa como as coisas estão indo comigo."
              value={formik.values.questao23}
              error={
                formik.touched.questao23 &&
                Boolean(formik.errors.questao23)
              }
              helperText={formik.touched.questao23 && formik.errors.questao23}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao24"
              name="questao24"
              description="Para mim é fácil direcionar minha atenção e focar em um único objeto ou pessoa."
              value={formik.values.questao24}
              error={
                formik.touched.questao24 &&
                Boolean(formik.errors.questao24)
              }
              helperText={formik.touched.questao24 && formik.errors.questao24}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao25"
              name="questao25"
              description="Eu aperfeiçoo minhas habilidades escutando cuidadosamente aos conselhos e instruções dos técnicos e treinadores."
              value={formik.values.questao25}
              error={
                formik.touched.questao25 &&
                Boolean(formik.errors.questao25)
              }
              helperText={formik.touched.questao25 && formik.errors.questao25}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao26"
              name="questao26"
              description="Quando mais pressão houver na competição, mais eu gosto."
              value={formik.values.questao26}
              error={
                formik.touched.questao26 &&
                Boolean(formik.errors.questao26)
              }
              helperText={formik.touched.questao26 && formik.errors.questao26}
              onChange={formik.handleChange}
            />

            <ACSI
              id="questao27"
              name="questao27"
              description="Eu cometo menos erros quando estou sob pressão porque me concentro melhor."
              value={formik.values.questao27}
              error={
                formik.touched.questao27 &&
                Boolean(formik.errors.questao27)
              }
              helperText={formik.touched.questao27 && formik.errors.questao27}
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