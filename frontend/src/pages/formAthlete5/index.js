import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import GreenButton from "../../_components/green-button/index.js";
import BurgerMenu from "../../_components/burger-menu/Sidebar.js";
import validationSchema from "./formValidation";
import api from "../../services/api";
import TACSI from "./components/index.js";
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

export default function FormAthlete5() {
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

  async function createTACSI(data) {
    try {
      let response = await api.post("api/qtacsi/", data, {
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
      questao28: '',
      questao29: '',
      questao30: '',
      questao31: '',
      questao32: '',
      questao33: '',
      questao34: '',
      questao35: '',
      questao36: '',
    },

    validationSchema: validationSchema,
    onSubmit: data => {
      atleta ?
        data.atleta = atleta.id :
        data.atleta = null;
      createTACSI(data);
    }
  });

  return (
    <>
      <BurgerMenu />

      <div className="box-container">
        <section className="box">
          <div className="title-container">
            <h1 className="forms-title">TACSIS - Habilidades Táticas</h1>
            <p className="form-subtitle">
              Responda as questões a seguir comparando a sua resposta com a do melhor
              jogador (a) da mesma categoria e faixa etária. Não pense muito para
              responder, não existem respostas certas ou erradas, seja sincero nas
              respostas e assinale o número que melhor descreva suas características neste
              momento.
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
            <TACSI
              id="questao1"
              name="questao1"
              description="As decisões que eu tomo sobre minhas ações durante uma partida são geralmente..."
              value={formik.values.questao1}
              error={
                formik.touched.questao1 &&
                Boolean(formik.errors.questao1)
              }
              helperText={formik.touched.questao1 && formik.errors.questao1}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao2"
              name="questao2"
              description="Eu sei como me desmarcar durante a partida."
              value={formik.values.questao2}
              error={
                formik.touched.questao2 &&
                Boolean(formik.errors.questao2)
              }
              helperText={formik.touched.questao2 && formik.errors.questao2}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao3"
              name="questao3"
              description="Minha interceptação da jogada do adversário é..."
              value={formik.values.questao3}
              error={
                formik.touched.questao3 &&
                Boolean(formik.errors.questao3)
              }
              helperText={formik.touched.questao3 && formik.errors.questao3}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao4"
              name="questao4"
              description="Meu posicionamento durante a partida é geralmente..."
              value={formik.values.questao4}
              error={
                formik.touched.questao4 &&
                Boolean(formik.errors.questao4)
              }
              helperText={formik.touched.questao4 && formik.errors.questao4}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao5"
              name="questao5"
              description="Minha visão geral (quando tenho a posse da bola
                ou quando meu time tem a posse da bola) é..."
              value={formik.values.questao5}
              error={
                formik.touched.questao5 &&
                Boolean(formik.errors.questao5)
              }
              helperText={formik.touched.questao5 && formik.errors.questao5}
              onChange={formik.handleChange}
            />

            <TACSI
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

            <TACSI
              id="questao7"
              name="questao7"
              description="Minha antecipação (quanto às ações a serem realizadas) é..."
              value={formik.values.questao7}
              error={
                formik.touched.questao7 &&
                Boolean(formik.errors.questao7)
              }
              helperText={formik.touched.questao7 && formik.errors.questao7}
              onChange={formik.handleChange}
            />

            <TACSI
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

            <TACSI
              id="questao9"
              name="questao9"
              description="Sou bom em tomar as decisões certas nos momentos certos."
              value={formik.values.questao9}
              error={
                formik.touched.questao9 &&
                Boolean(formik.errors.questao9)
              }
              helperText={formik.touched.questao9 && formik.errors.questao9}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao10"
              name="questao10"
              description="Na opinião do meu treinador, o meu entendimento do jogo é..."
              value={formik.values.questao10}
              error={
                formik.touched.questao10 &&
                Boolean(formik.errors.questao10)
              }
              helperText={formik.touched.questao10 && formik.errors.questao10}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao11"
              name="questao11"
              description="Minha desmarcação e meu posicionamento é..."
              value={formik.values.questao11}
              error={
                formik.touched.questao11 &&
                Boolean(formik.errors.questao11)
              }
              helperText={formik.touched.questao11 && formik.errors.questao11}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao12"
              name="questao12"
              description="Na opinião do meu treinador, meu posicionamento é..."
              value={formik.values.questao12}
              error={
                formik.touched.questao12 &&
                Boolean(formik.errors.questao12)
              }
              helperText={formik.touched.questao12 && formik.errors.questao12}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao13"
              name="questao13"
              description="Minha avaliação da jogada do adversário é..."
              value={formik.values.questao13}
              error={
                formik.touched.questao13 &&
                Boolean(formik.errors.questao13)
              }
              helperText={formik.touched.questao13 && formik.errors.questao13}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao14"
              name="questao14"
              description="Minha interceptação da bola é..."
              value={formik.values.questao14}
              error={
                formik.touched.questao14 &&
                Boolean(formik.errors.questao14)
              }
              helperText={formik.touched.questao14 && formik.errors.questao14}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao15"
              name="questao15"
              description="Se nosso time perde a bola, eu rapidamente assumo minha função de defensor."
              value={formik.values.questao15}
              error={
                formik.touched.questao15 &&
                Boolean(formik.errors.questao15)
              }
              helperText={formik.touched.questao15 && formik.errors.questao15}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao16"
              name="questao16"
              description="Eu rapidamente reajo a mudanças, como quando recuperamos a posse de bola."
              value={formik.values.questao16}
              error={
                formik.touched.questao16 &&
                Boolean(formik.errors.questao16)
              }
              helperText={formik.touched.questao16 && formik.errors.questao16}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao17"
              name="questao17"
              description="Eu percebo rapidamente como o adversário está jogando."
              value={formik.values.questao17}
              error={
                formik.touched.questao17 &&
                Boolean(formik.errors.questao17)
              }
              helperText={formik.touched.questao17 && formik.errors.questao17}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao18"
              name="questao18"
              description="Eu sei exatamente quando passar a bola a um companheiro ou quando não passar."
              value={formik.values.questao18}
              error={
                formik.touched.questao18 &&
                Boolean(formik.errors.questao18)
              }
              helperText={formik.touched.questao18 && formik.errors.questao18}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao19"
              name="questao19"
              description="Eu rapidamente adapto meu jogo às circunstâncias, como um clima chuvoso ou com ventos."
              value={formik.values.questao19}
              error={
                formik.touched.questao19 &&
                Boolean(formik.errors.questao19)
              }
              helperText={formik.touched.questao19 && formik.errors.questao19}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao20"
              name="questao20"
              description="Se meu time ganha a posse de bola, eu sei exatamente o que fazer."
              value={formik.values.questao20}
              error={
                formik.touched.questao20 &&
                Boolean(formik.errors.questao20)
              }
              helperText={formik.touched.questao20 && formik.errors.questao20}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao21"
              name="questao21"
              description="Enquanto executo uma ação no jogo, eu sei exatamente o que fazer em seguida."
              value={formik.values.questao21}
              error={
                formik.touched.questao21 &&
                Boolean(formik.errors.questao21)
              }
              helperText={formik.touched.questao21 && formik.errors.questao21}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao22"
              name="questao22"
              description="Se eu estou com a bola, sei exatamente para quem devo passá-la."
              value={formik.values.questao22}
              error={
                formik.touched.questao22 &&
                Boolean(formik.errors.questao22)
              }
              helperText={formik.touched.questao22 && formik.errors.questao22}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao23"
              name="questao23"
              description="Mesmo sem ver meus adversários, eu sei para onde eles estão indo."
              value={formik.values.questao23}
              error={
                formik.touched.questao23 &&
                Boolean(formik.errors.questao23)
              }
              helperText={formik.touched.questao23 && formik.errors.questao23}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao24"
              name="questao24"
              description="Sem ver meus companheiros, eu sei para onde eles estão indo."
              value={formik.values.questao24}
              error={
                formik.touched.questao24 &&
                Boolean(formik.errors.questao24)
              }
              helperText={formik.touched.questao24 && formik.errors.questao24}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao25"
              name="questao25"
              description="Se o adversário recebe a bola, eu sei exatamente o que ele irá fazer."
              value={formik.values.questao25}
              error={
                formik.touched.questao25 &&
                Boolean(formik.errors.questao25)
              }
              helperText={formik.touched.questao25 && formik.errors.questao25}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao26"
              name="questao26"
              description="Eu sei em que posição devo estar durante as partidas."
              value={formik.values.questao26}
              error={
                formik.touched.questao26 &&
                Boolean(formik.errors.questao26)
              }
              helperText={formik.touched.questao26 && formik.errors.questao26}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao27"
              name="questao27"
              description="Eu sei exatamente meus pontos fortes e fracos."
              value={formik.values.questao27}
              error={
                formik.touched.questao27 &&
                Boolean(formik.errors.questao27)
              }
              helperText={formik.touched.questao27 && formik.errors.questao27}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao28"
              name="questao28"
              description="Eu aplico as regras do jogo com inteligência durante as partidas."
              value={formik.values.questao28}
              error={
                formik.touched.questao28 &&
                Boolean(formik.errors.questao28)
              }
              helperText={formik.touched.questao28 && formik.errors.questao28}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao29"
              name="questao29"
              description="Durante os jogos, eu tomo decisões rapidamente."
              value={formik.values.questao29}
              error={
                formik.touched.questao29 &&
                Boolean(formik.errors.questao29)
              }
              helperText={formik.touched.questao29 && formik.errors.questao29}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao30"
              name="questao30"
              description="Durante as partidas, não olho apenas para a bola, mas tenho uma visão completa da quadra."
              value={formik.values.questao30}
              error={
                formik.touched.questao30 &&
                Boolean(formik.errors.questao30)
              }
              helperText={formik.touched.questao30 && formik.errors.questao30}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao31"
              name="questao31"
              description="Eu sei o que fazer para vencer uma partida rapidamente."
              value={formik.values.questao31}
              error={
                formik.touched.questao31 &&
                Boolean(formik.errors.questao31)
              }
              helperText={formik.touched.questao31 && formik.errors.questao31}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao32"
              name="questao32"
              description="Eu vejo os pontos fracos do meu adversário rapidamente."
              value={formik.values.questao32}
              error={
                formik.touched.questao32 &&
                Boolean(formik.errors.questao32)
              }
              helperText={formik.touched.questao32 && formik.errors.questao32}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao33"
              name="questao33"
              description="Eu reajo para corrigir os erros de meus
              companheiros rapidamente."
              value={formik.values.questao33}
              error={
                formik.touched.questao33 &&
                Boolean(formik.errors.questao33)
              }
              helperText={formik.touched.questao33 && formik.errors.questao33}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao34"
              name="questao34"
              description="Enquanto estou recebendo a bola, eu não preciso olhar para onde estão meus companheiros; eu já sei."
              value={formik.values.questao34}
              error={
                formik.touched.questao34 &&
                Boolean(formik.errors.questao34)
              }
              helperText={formik.touched.questao34 && formik.errors.questao34}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao35"
              name="questao35"
              description="Se nosso time perde a posse de bola, eu sei exatamente o que fazer."
              value={formik.values.questao35}
              error={
                formik.touched.questao35 &&
                Boolean(formik.errors.questao35)
              }
              helperText={formik.touched.questao35 && formik.errors.questao35}
              onChange={formik.handleChange}
            />

            <TACSI
              id="questao36"
              name="questao36"
              description="Se eu recebo a bola de um companheiro eu já sei para onde devo passar a seguir."
              value={formik.values.questao36}
              error={
                formik.touched.questao36 &&
                Boolean(formik.errors.questao36)
              }
              helperText={formik.touched.questao36 && formik.errors.questao36}
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