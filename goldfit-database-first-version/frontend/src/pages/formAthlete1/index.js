import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import api from "../../services/api";
import AuthContext from "../../context/AuthContext";
import ButtonFilledCancel from "../../_components/button-cancel/index.js";
import BurgerMenu from "../../_components/burger-menu/Sidebar.js";
import GreenButton from "../../_components/green-button";
import validationSchema from "./formValidation";
import ButtonFilled from "../../_components/button";
import GreenRadio from "../../_components/green-radio";

import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  TextField,
} from '@material-ui/core/';

import "./styles.css";

export default function FormAthlete1() {
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

  async function createInfoPais(data) {
    try {
      let response = await api.post("api/qinfo_pais_socioeconomico/", data, {
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
      altura_mae: '',
      altura_pai: '',
      tem_atleta_na_familia: false,
      modalidade: '',
      pais_praticantes_esporte: false
    },

    validationSchema: validationSchema,
    onSubmit: data => {
      atleta ?
        data.atleta = atleta.id :
        data.atleta = null;
      createInfoPais(data);
    }
  });

  return (
    <>
      <BurgerMenu />

      <div className="box-container">
        <section className="box" id="box-info-pais">
          <div className="title-container">
            <h1 className="forms-title">Informação dos Pais</h1>

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

            <form onSubmit={formik.handleSubmit} className="form-info-pais">
              <div className="straight-form-info-pais">
                <div className="socioeconomico-form-input">
                  <h6 className="field-title-socioeconomico">Altura da MÃE biológica (em centímetros)</h6>
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="altura_mae"
                      name="altura_mae"
                      value={formik.values.altura_mae}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.altura_mae &&
                        Boolean(formik.errors.altura_mae)
                      }
                      helperText={
                        formik.touched.altura_mae && formik.errors.altura_mae
                      }
                      color="secondary"
                      className="text-field-socioeconomico"
                      variant="outlined"
                    />
                  </FormControl>
                </div>

                <div className="socioeconomico-form-input">
                  <h6 className="field-title-socioeconomico">Altura do PAI biológico (em centímetros)</h6>
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="altura_pai"
                      name="altura_pai"
                      // label="altura_pai"
                      value={formik.values.altura_pai}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.altura_pai &&
                        Boolean(formik.errors.altura_pai)
                      }
                      helperText={
                        formik.touched.altura_pai && formik.errors.altura_pai
                      }
                      color="secondary"
                      className="text-field-socioeconomico"
                      variant="outlined"
                    />
                  </FormControl>
                </div>
              </div>

              <p className="form-subtitle">Você tem na sua família alguém que é ou que já foi atleta?</p>

              <div className="info-pais-fields">
                <RadioGroup
                  id="tem_atleta_na_familia"
                  name="tem_atleta_na_familia"
                  label="Habilidade de Drible"
                  value={formik.values.tem_atleta_na_familia}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.tem_atleta_na_familia &&
                    Boolean(formik.errors.tem_atleta_na_familia)
                  }
                  helperText={
                    formik.touched.tem_atleta_na_familia && formik.errors.tem_atleta_na_familia
                  }
                  color="secondary"
                  row
                  variant="outlined"
                  defaultValue={"false"}
                >
                  <FormControlLabel value={"true"} control={<GreenRadio />} label="Sim" />
                  <FormControlLabel value={"false"} control={<GreenRadio />} label="Não" />
                </RadioGroup>

                <FormControl variant="outlined" id='first-select'>
                  <TextField
                    name="modalidade"
                    className="select-field"
                    variant="outlined"
                    value={formik.values.modalidade}
                    label='Qual modalidade?'
                    onChange={formik.handleChange}
                    error={
                      formik.touched.modalidade &&
                      Boolean(formik.errors.modalidade)
                    }
                    helperText={
                      formik.touched.modalidade && formik.errors.modalidade
                    }
                  >
                  </TextField>
                </FormControl>
              </div>

              <p className="form-subtitle">Sua mãe ou seu pai eram praticantes de esportes?</p>
              <RadioGroup
                id="pais_praticantes_esporte"
                name="pais_praticantes_esporte"
                label="Habilidade de Drible"
                value={formik.values.pais_praticantes_esporte}
                onChange={formik.handleChange}
                error={
                  formik.touched.pais_praticantes_esporte &&
                  Boolean(formik.errors.pais_praticantes_esporte)
                }
                helperText={
                  formik.touched.pais_praticantes_esporte && formik.errors.pais_praticantes_esporte
                }
                color="secondary"
                row
                variant="outlined"
                defaultValue={"false"}
              >
                <FormControlLabel value={"true"} control={<GreenRadio />} label="Sim" />
                <FormControlLabel value={"false"} control={<GreenRadio />} label="Não" />
              </RadioGroup>

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
          </div>

          <div className='cancel-button'>
            <ButtonFilledCancel route="/menu" text="Cancelar" type="button" />
          </div>
        </section>
      </div>
    </>
  );
}