import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import api from "../../services/api";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

import ButtonFilledCancel from '../../_components/button-cancel/index.js'
import ButtonFilled from '../../_components/button/index.js'
import BurgerMenu from '../../_components/burger-menu/Sidebar.js'
import GreenButton from '../../_components/green-button/index.js'

import {
  Select,
  MenuItem,
  Button,
  TextField,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  FormControl
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

import { useFormik } from "formik";
import * as yup from "yup";

import './styles.css'

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const validationSchema = yup.object({
  questao1: yup
    .number()
    .required(""),
  questao2: yup
    .number()
    .required(""),
  questao3: yup
    .number()
    .required(""),
  questao4: yup
    .number()
    .required(""),
  questao5: yup
    .number()
    .required(""),
  questao6: yup
    .number()
    .required(""),
  questao7: yup
    .number()
    .required(""),
  questao8: yup
    .number()
    .required(""),
  questao9: yup
    .number()
    .required(""),
  questao10: yup
    .number()
    .required(""),
});

export default function EvaluateAthlete4() {
  const history = useHistory();
  const { authToken } = useContext(AuthContext);

  const [atletas, setAtletas] = useState([]);
  const [atleta, setAtleta] = useState({ nome_completo: 'Atleta' });

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

  useEffect(() => getAtletas(), []);

  async function createEvaluationAI(data) {
    try {
      let response = await api.post("api/av_aspectos_intangiveis/", data, {
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
      questao1: '20',
      questao2: '20',
      questao3: '20',
      questao4: '20',
      questao5: '20',
      questao6: '20',
      questao7: '20',
      questao8: '20',
      questao9: '20',
      questao10: '20',
    },

    validationSchema: validationSchema,
    onSubmit: data => {
      atleta ?
        data.atleta = atleta.id :
        data.atleta = null;
      createEvaluationAI(data);
    }
  });

  return (
    <>
      <BurgerMenu />

      <section className='box-container'>
        <div className="box" id="container-aspectos-intangiveis">

        <section className="create-new-athlete" id="create-new-athlete-4">
            <ButtonFilled route="/cadastro-atleta" text="Novo" />

            <FormControl variant="outlined" id='first-select'>
              <InputLabel>Atleta</InputLabel>
              <Select
                value={atleta}
                className="select-field"
                label='Atleta'
                onChange={e => setAtleta(e.target.value)}
              >
                {
                  atletas?.map((atleta) => (
                    <MenuItem
                      key={atleta.id}
                      value={atleta}>{atleta.nome_completo}
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </section>
          <div className="title-container">
            <h1 className="forms-title">Aspectos Intangíveis do Potencial Esportivo</h1>
            <p className="form-subtitle">Avalie o seu atleta de acordo com as características abaixo:</p>
          </div>

          

          <form onSubmit={formik.handleSubmit} className="form">
            <div className="internal-box">
              <div className="container-left">

                <div className="form-item">
                  <p className="form-sub-subtitle">1 - Compensa suas deficiências pela sua grande determinação</p>

                  <RadioGroup
                    id="questao1"
                    name="questao1"
                    label="Habilidade de Drible"
                    value={formik.values.questao1}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.questao1 &&
                      Boolean(formik.errors.questao1)
                    }
                    helperText={
                      formik.touched.questao1 && formik.errors.questao1
                    }
                    color="secondary"
                    row
                    variant="outlined"
                    defaultValue={20}
                  >
                    <FormControlLabel value={"20"} control={<GreenRadio />} label="Fraco" />
                    <FormControlLabel value={"40"} control={<GreenRadio />} label="Razoável" />
                    <FormControlLabel value={"60"} control={<GreenRadio />} label="Bom" />
                    <FormControlLabel value={"80"} control={<GreenRadio />} label="Muito Bom" />
                    <FormControlLabel value={"100"} control={<GreenRadio />} label="Excelente" />
                  </RadioGroup>
                </div>
                <div className="form-item">
                  <p className="form-sub-subtitle">2 - Influencia positivamente a equipe/grupo</p>

                  <RadioGroup
                    id="questao2"
                    name="questao2"
                    label="Habilidade de Drible"
                    value={formik.values.questao2}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.questao2 &&
                      Boolean(formik.errors.questao2)
                    }
                    helperText={
                      formik.touched.questao2 && formik.errors.questao2
                    }
                    color="secondary"
                    row
                    variant="outlined"
                    defaultValue={20}
                  >
                    <FormControlLabel value={"20"} control={<GreenRadio />} label="Fraco" />
                    <FormControlLabel value={"40"} control={<GreenRadio />} label="Razoável" />
                    <FormControlLabel value={"60"} control={<GreenRadio />} label="Bom" />
                    <FormControlLabel value={"80"} control={<GreenRadio />} label="Muito Bom" />
                    <FormControlLabel value={"100"} control={<GreenRadio />} label="Excelente" />
                  </RadioGroup>
                </div>

                <div className="form-item">
                  <p className="form-sub-subtitle">3 - Conhece os atalhos para a vitória</p>

                  <RadioGroup
                    id="questao3"
                    name="questao3"
                    label="Habilidade de Drible"
                    value={formik.values.questao3}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.questao3 &&
                      Boolean(formik.errors.questao3)
                    }
                    helperText={
                      formik.touched.questao3 && formik.errors.questao3
                    }
                    color="secondary"
                    row
                    variant="outlined"
                    defaultValue={20}
                  >
                    <FormControlLabel value={"20"} control={<GreenRadio />} label="Fraco" />
                    <FormControlLabel value={"40"} control={<GreenRadio />} label="Razoável" />
                    <FormControlLabel value={"60"} control={<GreenRadio />} label="Bom" />
                    <FormControlLabel value={"80"} control={<GreenRadio />} label="Muito Bom" />
                    <FormControlLabel value={"100"} control={<GreenRadio />} label="Excelente" />
                  </RadioGroup>
                </div>
                <div className="form-item">
                  <p className="form-sub-subtitle">4 - É um atleta que decide as partidas/competições</p>

                  <RadioGroup
                    id="questao4"
                    name="questao4"
                    label="Habilidade de Drible"
                    value={formik.values.questao4}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.questao4 &&
                      Boolean(formik.errors.questao4)
                    }
                    helperText={
                      formik.touched.questao4 && formik.errors.questao4
                    }
                    color="secondary"
                    row
                    variant="outlined"
                    defaultValue={20}
                  >
                    <FormControlLabel value={"20"} control={<GreenRadio />} label="Fraco" />
                    <FormControlLabel value={"40"} control={<GreenRadio />} label="Razoável" />
                    <FormControlLabel value={"60"} control={<GreenRadio />} label="Bom" />
                    <FormControlLabel value={"80"} control={<GreenRadio />} label="Muito Bom" />
                    <FormControlLabel value={"100"} control={<GreenRadio />} label="Excelente" />
                  </RadioGroup>
                </div>
                <div className="form-item">
                  <p className="form-sub-subtitle">5 - Extrai o melhor do(s) companheiro(s)</p>

                  <RadioGroup
                    id="questao5"
                    name="questao5"
                    label="Habilidade de Drible"
                    value={formik.values.questao5}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.questao5 &&
                      Boolean(formik.errors.questao5)
                    }
                    helperText={
                      formik.touched.questao5 && formik.errors.questao5
                    }
                    color="secondary"
                    row
                    variant="outlined"
                    defaultValue={20}
                  >
                    <FormControlLabel value={"20"} control={<GreenRadio />} label="Fraco" />
                    <FormControlLabel value={"40"} control={<GreenRadio />} label="Razoável" />
                    <FormControlLabel value={"60"} control={<GreenRadio />} label="Bom" />
                    <FormControlLabel value={"80"} control={<GreenRadio />} label="Muito Bom" />
                    <FormControlLabel value={"100"} control={<GreenRadio />} label="Excelente" />
                  </RadioGroup>
                </div>
              </div>

              <div className="container-right">
                <div className="form-item">
                  <p className="form-sub-subtitle">6 - Antecipa-se às situações</p>

                  <RadioGroup
                    id="questao6"
                    name="questao6"
                    label="Habilidade de Drible"
                    value={formik.values.questao6}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.questao6 &&
                      Boolean(formik.errors.questao6)
                    }
                    helperText={
                      formik.touched.questao6 && formik.errors.questao6
                    }
                    color="secondary"
                    row
                    variant="outlined"
                    defaultValue={20}
                  >
                    <FormControlLabel value={"20"} control={<GreenRadio />} label="Fraco" />
                    <FormControlLabel value={"40"} control={<GreenRadio />} label="Razoável" />
                    <FormControlLabel value={"60"} control={<GreenRadio />} label="Bom" />
                    <FormControlLabel value={"80"} control={<GreenRadio />} label="Muito Bom" />
                    <FormControlLabel value={"100"} control={<GreenRadio />} label="Excelente" />
                  </RadioGroup>
                </div>
                <div className="form-item">
                  <p className="form-sub-subtitle">7 - É treinável</p>

                  <RadioGroup
                    id="questao7"
                    name="questao7"
                    label="Habilidade de Drible"
                    value={formik.values.questao7}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.questao7 &&
                      Boolean(formik.errors.questao7)
                    }
                    helperText={
                      formik.touched.questao7 && formik.errors.questao7
                    }
                    color="secondary"
                    row
                    variant="outlined"
                    defaultValue={20}
                  >
                    <FormControlLabel value={"20"} control={<GreenRadio />} label="Fraco" />
                    <FormControlLabel value={"40"} control={<GreenRadio />} label="Razoável" />
                    <FormControlLabel value={"60"} control={<GreenRadio />} label="Bom" />
                    <FormControlLabel value={"80"} control={<GreenRadio />} label="Muito Bom" />
                    <FormControlLabel value={"100"} control={<GreenRadio />} label="Excelente" />
                  </RadioGroup>
                </div>

                <div className="form-item">
                  <p className="form-sub-subtitle">8 - Tem capacidade de adaptação às situações</p>

                  <RadioGroup
                    id="questao8"
                    name="questao8"
                    label="Habilidade de Drible"
                    value={formik.values.questao8}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.questao8 &&
                      Boolean(formik.errors.questao8)
                    }
                    helperText={
                      formik.touched.questao8 && formik.errors.questao8
                    }
                    color="secondary"
                    row
                    variant="outlined"
                    defaultValue={20}
                  >
                    <FormControlLabel value={"20"} control={<GreenRadio />} label="Fraco" />
                    <FormControlLabel value={"40"} control={<GreenRadio />} label="Razoável" />
                    <FormControlLabel value={"60"} control={<GreenRadio />} label="Bom" />
                    <FormControlLabel value={"80"} control={<GreenRadio />} label="Muito Bom" />
                    <FormControlLabel value={"100"} control={<GreenRadio />} label="Excelente" />
                  </RadioGroup>
                </div>
                <div className="form-item">
                  <p className="form-sub-subtitle">9 - Melhora a cada vez que é submetido a novas exigências/desafios</p>

                  <RadioGroup
                    id="questao9"
                    name="questao9"
                    label="Habilidade de Drible"
                    value={formik.values.questao9}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.questao9 &&
                      Boolean(formik.errors.questao9)
                    }
                    helperText={
                      formik.touched.questao9 && formik.errors.questao9
                    }
                    color="secondary"
                    row
                    variant="outlined"
                    defaultValue={20}
                  >
                    <FormControlLabel value={"20"} control={<GreenRadio />} label="Fraco" />
                    <FormControlLabel value={"40"} control={<GreenRadio />} label="Razoável" />
                    <FormControlLabel value={"60"} control={<GreenRadio />} label="Bom" />
                    <FormControlLabel value={"80"} control={<GreenRadio />} label="Muito Bom" />
                    <FormControlLabel value={"100"} control={<GreenRadio />} label="Excelente" />
                  </RadioGroup>
                </div>
                <div className="form-item">
                  <p className="form-sub-subtitle">10 - Possui “fome de vitória”, “instinto matador”</p>

                  <RadioGroup
                    id="questao10"
                    name="questao10"
                    label="Habilidade de Drible"
                    value={formik.values.questao10}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.questao10 &&
                      Boolean(formik.errors.questao10)
                    }
                    helperText={
                      formik.touched.questao10 && formik.errors.questao10
                    }
                    color="secondary"
                    row
                    variant="outlined"
                    defaultValue={20}
                  >
                    <FormControlLabel value={"20"} control={<GreenRadio />} label="Fraco" />
                    <FormControlLabel value={"40"} control={<GreenRadio />} label="Razoável" />
                    <FormControlLabel value={"60"} control={<GreenRadio />} label="Bom" />
                    <FormControlLabel value={"80"} control={<GreenRadio />} label="Muito Bom" />
                    <FormControlLabel value={"100"} control={<GreenRadio />} label="Excelente" />
                  </RadioGroup>
                </div>
              </div>
            </div>
            <div className='buttons-container'>
              <GreenButton color="primary" variant="contained" fullWidth type="submit">
                Salvar
              </GreenButton>
              <ButtonFilledCancel route="/menu" text="Cancelar" />
            </div>
          </form>
{/* 
          <div className='cancel-buttons-container'>
           
          </div> */}

        </div>
      </section>
    </>
  )
}