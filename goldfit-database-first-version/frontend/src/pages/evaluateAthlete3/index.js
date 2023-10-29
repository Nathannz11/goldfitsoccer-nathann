import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import ButtonFilledCancel from '../../_components/button-cancel/index.js'
import ButtonFilled from '../../_components/button/index.js'
import AuthContext from "../../context/AuthContext";

import {
  Radio,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  TextField,
  Button
} from '@material-ui/core/';

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import BurgerMenu from '../../_components/burger-menu/Sidebar.js'
import api from "../../services/api";

import { useFormik } from "formik";
import * as yup from "yup";

import './styles.css'

// TODO: adicionar o Atleta como um campo do Formik para também ser validado
const GreenButton = withStyles({
  root: {
    backgroundColor: "#489152",
    width: "20em",
    fontFamily: 'Open Sans',
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "20px",
    margin: "3% 0%",
    "&:hover": {
      backgroundColor: "#0E592C"
    }
  },
  checked: {},
})((props) => <Button color="default" {...props} />);

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
  potencial_futuro: yup
    .number()
    .required(""),
  modalidade_futura: yup
    .string("Selecione a modalidade para o atleta")
    .typeError('Selecione a modalidade para o atleta')
    .required("Campo obrigatório"),
  posicao_futura: yup
    .string("Selecione a posição futura do atleta")
    .typeError('Selecione a posição futura do atleta')
    .required("Campo obrigatório"),
});

export default function EvaluateAthlete3() {
  const history = useHistory();
  const { authToken } = useContext(AuthContext);

  const [atletas, setAtletas] = useState([]);
  const [atleta, setAtleta] = useState({ nome_completo: 'Atleta' });

  async function createEvaluationSP(data) {
    try {
      let response = await api.post("api/av_potencial_esportivo/", data, {
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
      potencial_futuro: '20',
      modalidade_futura: '',
      posicao_futura: ''
    },

    validationSchema: validationSchema,
    onSubmit: data => {
      atleta ?
        data.atleta = atleta.id :
        data.atleta = null;
      createEvaluationSP(data);
    }
  });

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

  useEffect(() => getAtletas(), [])

  return (
    <>
      <BurgerMenu />

      <div className="box-container">
        <div className="box" id="sports-potencial-box">
          <section className="create-new-athlete">
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

          <section className="sports-potencial-form">
            <div className="title-container">
              <h1 className="forms-title">Avaliação do Potencial Esportivo - Treinador</h1>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div className="form-item">
                <p className="form-subtitle">1 - Avalie o potencial esportivo deste atleta para desempenho esportivo no FUTURO:</p>

                <RadioGroup
                  id="potencial_futuro"
                  name="potencial_futuro"
                  label="Habilidade de Drible"
                  value={formik.values.potencial_futuro}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.potencial_futuro &&
                    Boolean(formik.errors.potencial_futuro)
                  }
                  helperText={
                    formik.touched.potencial_futuro && formik.errors.potencial_futuro
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
                <p className="form-subtitle">2 - Para qual modalidade esportiva este atleta teria maior chance de ser bem sucedido no futuro?</p>
                
                <div className="fields-container">
                <FormControl variant="outlined" id='first-select'>
                  <TextField
                    name="modalidade_futura"
                    select
                    className="select-field"
                    variant="outlined"
                    value={formik.values.modalidade_futura}
                    label='Modalidade Futura'
                    onChange={formik.handleChange}
                    error={
                      formik.touched.modalidade_futura &&
                      Boolean(formik.errors.modalidade_futura)
                    }
                    helperText={
                      formik.touched.modalidade_futura && formik.errors.modalidade_futura
                    }
                  >
                    <MenuItem
                      value={"Futebol"}>{"Futebol"}
                    </MenuItem>
                  </TextField>
                </FormControl>

                <FormControl variant="outlined" id='first-select'>
                  <TextField
                    name="posicao_futura"
                    variant="outlined"
                    select
                    className="select-field"
                    value={formik.values.posicao_futura}
                    label='Posição Futura'
                    onChange={formik.handleChange}
                    error={
                      formik.touched.posicao_futura &&
                      Boolean(formik.errors.posicao_futura)
                    }
                    helperText={
                      formik.touched.posicao_futura && formik.errors.posicao_futura
                    }
                  >
                    <MenuItem value={"Goleiro"}>{"Goleiro"}</MenuItem>
                    <MenuItem value={"Zagueiro"}>{"Zagueiro"}</MenuItem>
                    <MenuItem value={"Lateral"}>{"Lateral"}</MenuItem>
                    <MenuItem value={"Meia"}>{"Meia"}</MenuItem>
                    <MenuItem value={"Atacante"}>{"Atacante"}</MenuItem>
                  </TextField>
                </FormControl>
                </div>
              </div>

              <div className='save-button-container' id="save-button-2">
                <GreenButton id="save-button-sports-potencial" color="primary" variant="contained" fullWidth type="submit">
                  Cadastrar
                </GreenButton>
              </div>
            </form>
                <ButtonFilledCancel id="cancel-button-sports-potencial" route="/menu" text="Cancelar" />
          </section>
        </div>
      </div>
    </>
  )
}