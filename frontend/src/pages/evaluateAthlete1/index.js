import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import ButtonFilledCancel from "../../_components/button-cancel/index.js";
import ButtonFilled from "../../_components/button/index.js";
import BurgerMenu from "../../_components/burger-menu/Sidebar.js";
import GreenButton from "../../_components/green-button";

import {
  Select,
  Button,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  withStyles,
} from "@material-ui/core";


import { useFormik } from "formik";
import * as yup from "yup";
import api from "../../services/api";
import AuthContext from "../../context/AuthContext";

import "./styles.css";

const validationSchema = yup.object({
  massa_corporal: yup
    .number("Forneça um valor decimal para o Salto Vertical")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  estatura: yup
    .number("Forneça um valor decimal para a Estatura")
    .required("Campo obrigatório")
    .typeError('Digite um número decimal no formato 0.0')
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(200, "A estatura deve ter no máximo 200 cm"),
  altura_sentado: yup
    .number("Forneça um valor decimal para o Salto Vertical")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  envergadura: yup
    .number("Forneça um valor decimal para o Salto Vertical")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  dc_triciptal: yup
    .number("Forneça um valor decimal para o Salto Vertical")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  dc_perna: yup
    .number("Forneça um valor decimal para o Salto Vertical")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  flexibilidade_t1: yup
    .number("Forneça um valor decimal para o Salto Vertical")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  flexibilidade_t2: yup
    .number("Forneça um valor decimal para o Salto Vertical")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  flexibilidade_t3: yup
    .number("Forneça um valor decimal para o Salto Vertical")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  preensao_manual_t1: yup
    .number("Forneça um valor decimal para o Salto Vertical")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  preensao_manual_t2: yup
    .number("Forneça um valor decimal para o Salto Vertical")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  preensao_manual_t3: yup
    .number("Forneça um valor decimal para o Salto Vertical")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  salto_vertical_t1: yup
    .number("Forneça um valor decimal para o Salto Vertical")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  salto_vertical_t2: yup
    .number("Forneça um valor decimal para a Habilidade de Drible")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  salto_vertical_t3: yup
    .number("Forneça um valor decimal para a Habilidade de Drible")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  velocidade_10m_t1: yup
    .number("Forneça um valor decimal para a Velocidade")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  velocidade_10m_t2: yup
    .number("Forneça um valor decimal para a Habilidade de Drible")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  velocidade_20m_t1: yup
    .number("Forneça um valor decimal para a Habilidade de Drible")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  velocidade_20m_t2: yup
    .number("Forneça um valor decimal para a Habilidade de Drible")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  agilidade_t1: yup
    .number("Forneça um valor decimal para a Agilidade")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  agilidade_t2: yup
    .number("Forneça um valor decimal para a Habilidade de Drible")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  drible_t1: yup
    .number("Forneça um valor decimal para a Habilidade de Drible")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
  drible_t2: yup
    .number("Forneça um valor decimal para a Habilidade de Drible")
    .typeError('Digite um número decimal no formato 0.0')
    .required("Campo obrigatório")
    .min(0, "Deve ser fornecido um valor decimal positivo")
    .max(100, "O valor máximo para o campo é de 100"),
});

// TODO: conferir porque alguns campos ficam azuis e outros vermelhos
// TODO: ajustar tamanho e componentes de botão padronizados

export default function EvaluateAthlete1() {
  const history = useHistory();
  const { authToken } = useContext(AuthContext);
  const [evaluateAtletas, setEvaluateAtletas] = useState([]);
  const [evaluateAtleta, setevaluateAtleta] = useState({});

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
          setEvaluateAtletas(response.data);
        });
    } catch (error) {
      console.log(error);
      alert("Erro ao recuperar os atletas cadastrados. Tente novamente!");
    }
  };

  useEffect(() => {
    getAtletas();
  }, []);

  async function createEvaluationAF(data) {
    try {
      let response = await api.post("api/av_antropometrica_fisicomotora/", data, {
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
      massa_corporal: '',
      estatura: '',
      altura_sentado: '',
      envergadura: '',
      dc_triciptal: '',
      dc_perna: '',
      flexibilidade_t1: '',
      flexibilidade_t2: '',
      flexibilidade_t3: '',
      preensao_manual_t1: '',
      preensao_manual_t2: '',
      preensao_manual_t3: '',
      salto_vertical_t1: '',
      salto_vertical_t2: '',
      salto_vertical_t3: '',
      velocidade_10m_t1: '',
      velocidade_10m_t2: '',
      velocidade_20m_t1: '',
      velocidade_20m_t2: '',
      agilidade_t1: '',
      agilidade_t2: '',
      drible_t1: '',
      drible_t2: '',
    },

    validationSchema: validationSchema,
    onSubmit: data => {
      evaluateAtleta ?
        data.atleta = evaluateAtleta.id :
        data.atleta = null;
      createEvaluationAF(data);
    }
  });

  return (
    <>
      <BurgerMenu />
      <div className="box-container">
        <div className="box">
          <div className="title-container">
            <h1 className="forms-title"> Avaliação Antropométrica e Fisicomotora</h1>

            <div className="form-evaluate">
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
                      value={evaluateAtleta}
                      label="Atleta"
                      onChange={e => setevaluateAtleta(e.target.value)}
                    >
                      {
                        evaluateAtletas?.map((atleta) => (
                          <MenuItem key={atleta.nome_completo} value={atleta}>
                            {atleta.nome_completo}
                          </MenuItem>
                        ))
                      }
                    </Select>
                  </FormControl>
                </div>
              </section>
            </div>
          </div>

          <form className="form-evaluate-athlete1" onSubmit={formik.handleSubmit}>
            <div className="straight-form">
              <div className="athlete-form-input">
                <h6 className="field-title">Massa Corporal</h6>
                <FormControl id="form-control" variant="outlined">
                  <TextField
                    id="massa_corporal"
                    name="massa_corporal"
                    value={formik.values.massa_corporal}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.massa_corporal &&
                      Boolean(formik.errors.massa_corporal)
                    }
                    helperText={
                      formik.touched.massa_corporal && formik.errors.massa_corporal
                    }
                    color="secondary"
                    className="text-field-athlete"
                    variant="outlined"
                  />
                </FormControl>
              </div>

              <div className="athlete-form-input">
                <h6 className="field-title">Estatura</h6>
                <FormControl id="form-control" variant="outlined">
                  <TextField
                    id="estatura-atleta"
                    name="estatura"
                    // label="Estatura"
                    value={formik.values.estatura}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.estatura &&
                      Boolean(formik.errors.estatura)
                    }
                    helperText={
                      formik.touched.estatura && formik.errors.estatura
                    }
                    color="secondary"
                    className="text-field-athlete"
                    variant="outlined"
                  />
                </FormControl>
              </div>

              <div className="athlete-form-input">
                <h6 className="field-title">Altura Sentado</h6>
                <FormControl id="form-control" variant="outlined">
                  <TextField
                    id="altura_sentado"
                    name="altura_sentado"
                    // label="Estatura"
                    value={formik.values.altura_sentado}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.altura_sentado &&
                      Boolean(formik.errors.altura_sentado)
                    }
                    helperText={
                      formik.touched.altura_sentado && formik.errors.altura_sentado
                    }
                    color="secondary"
                    className="text-field-athlete"
                    variant="outlined"
                  />
                </FormControl>
              </div>

              <div className="athlete-form-input">
                <h6 className="field-title">Envergadura</h6>
                <FormControl id="form-control" variant="outlined">
                  <TextField
                    id="envergadura"
                    name="envergadura"
                    // label="envergadura"
                    value={formik.values.envergadura}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.envergadura &&
                      Boolean(formik.errors.envergadura)
                    }
                    helperText={
                      formik.touched.envergadura && formik.errors.envergadura
                    }
                    color="secondary"
                    className="text-field-athlete"
                    variant="outlined"
                  />
                </FormControl>
              </div>

              <div className="athlete-form-input">
                <h6 className="field-title">DC Triciptal</h6>
                <FormControl id="form-control" variant="outlined">
                  <TextField
                    id="dc_triciptal"
                    name="dc_triciptal"
                    // label="dc_triciptal"
                    value={formik.values.dc_triciptal}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dc_triciptal &&
                      Boolean(formik.errors.dc_triciptal)
                    }
                    helperText={
                      formik.touched.dc_triciptal && formik.errors.dc_triciptal
                    }
                    color="secondary"
                    className="text-field-athlete"
                    variant="outlined"
                  />
                </FormControl>
              </div>

              <div className="athlete-form-input">
                <h6 className="field-title">DC Perna</h6>
                <FormControl id="form-control" variant="outlined">
                  <TextField
                    id="dc_perna"
                    name="dc_perna"
                    // label="dc_perna"
                    value={formik.values.dc_perna}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dc_perna &&
                      Boolean(formik.errors.dc_perna)
                    }
                    helperText={
                      formik.touched.dc_perna && formik.errors.dc_perna
                    }
                    color="secondary"
                    className="text-field-athlete"
                    variant="outlined"
                  />
                </FormControl>
              </div>
            </div>

            <table className="form-table">
              <tr className="form-table-row ">
                <th className="table-title"></th>
                <th className="table-title">Tentativa 1</th>
                <th className="table-title">Tentativa 2</th>
                <th className="table-title">Tentativa 3</th>
              </tr>

              <tr className="form-table-row ">
                <td>
                  <h6 className="field-title">Flexibilidade</h6>
                </td>
                <td >
                  <FormControl id="form-control" variant="outlined" className="text-field-athlete-table">
                    <TextField
                      id="flexibilidade_t1"
                      name="flexibilidade_t1"
                      value={formik.values.flexibilidade_t1}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.flexibilidade_t1 &&
                        Boolean(formik.errors.flexibilidade_t1)
                      }
                      helperText={
                        formik.touched.flexibilidade_t1 && formik.errors.flexibilidade_t1
                      }
                      color="secondary"
                      className="text-field-athlete"
                      variant="outlined"
                    />
                  </FormControl>
                </td>
                <td>
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="flexibilidade_t2"
                      name="flexibilidade_t2"
                      value={formik.values.flexibilidade_t2}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.flexibilidade_t2 &&
                        Boolean(formik.errors.flexibilidade_t2)
                      }
                      helperText={
                        formik.touched.flexibilidade_t2 && formik.errors.flexibilidade_t2
                      }
                      className="text-field-athlete"
                      labelId="categoria-etaria-input"
                      variant="outlined"
                    />
                  </FormControl>
                </td>
                <td>
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="flexibilidade_t3"
                      name="flexibilidade_t3"
                      value={formik.values.flexibilidade_t3}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.flexibilidade_t3 &&
                        Boolean(formik.errors.flexibilidade_t3)
                      }
                      helperText={
                        formik.touched.flexibilidade_t3 && formik.errors.flexibilidade_t3
                      }
                      color="secondary"
                      className="text-field-athlete"
                      variant="outlined"
                    />
                  </FormControl>
                </td>
              </tr>

              <tr className="form-table-row ">
                <td>
                  <h6 className="field-title">Preensão Manual</h6>
                </td>
                <td >
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="preensao_manual_t1"
                      name="preensao_manual_t1"
                      value={formik.values.preensao_manual_t1}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.preensao_manual_t1 &&
                        Boolean(formik.errors.preensao_manual_t1)
                      }
                      helperText={
                        formik.touched.preensao_manual_t1 && formik.errors.preensao_manual_t1
                      }
                      color="secondary"
                      className="text-field-athlete"
                      variant="outlined"
                    />
                  </FormControl>
                </td>
                <td>
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="preensao_manual_t2"
                      name="preensao_manual_t2"
                      value={formik.values.preensao_manual_t2}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.preensao_manual_t2 &&
                        Boolean(formik.errors.preensao_manual_t2)
                      }
                      helperText={
                        formik.touched.preensao_manual_t2 && formik.errors.preensao_manual_t2
                      }
                      className="text-field-athlete"
                      labelId="categoria-etaria-input"
                      variant="outlined"
                    />
                  </FormControl>
                </td>
                <td>
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="preensao_manual_t3"
                      name="preensao_manual_t3"
                      value={formik.values.preensao_manual_t3}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.preensao_manual_t3 &&
                        Boolean(formik.errors.preensao_manual_t3)
                      }
                      helperText={
                        formik.touched.preensao_manual_t3 && formik.errors.preensao_manual_t3
                      }
                      color="secondary"
                      className="text-field-athlete"
                      variant="outlined"
                    />
                  </FormControl>
                </td>
              </tr>

              <tr className="form-table-row ">
                <td>
                  <h6 className="field-title">Salto Vertical</h6>
                </td>
                <td >
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="salto_vertical_t1"
                      name="salto_vertical_t1"
                      value={formik.values.salto_vertical_t1}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.salto_vertical_t1 &&
                        Boolean(formik.errors.salto_vertical_t1)
                      }
                      helperText={
                        formik.touched.salto_vertical_t1 && formik.errors.salto_vertical_t1
                      }
                      color="secondary"
                      className="text-field-athlete"
                      variant="outlined"
                    />
                  </FormControl>
                </td>
                <td>
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="salto_vertical_t2"
                      name="salto_vertical_t2"
                      value={formik.values.salto_vertical_t2}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.salto_vertical_t2 &&
                        Boolean(formik.errors.salto_vertical_t2)
                      }
                      helperText={
                        formik.touched.salto_vertical_t2 && formik.errors.salto_vertical_t2
                      }
                      className="text-field-athlete"
                      labelId="categoria-etaria-input"
                      variant="outlined"
                    />
                  </FormControl>
                </td>
                <td>
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="salto_vertical_t3"
                      name="salto_vertical_t3"
                      value={formik.values.salto_vertical_t3}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.salto_vertical_t3 &&
                        Boolean(formik.errors.salto_vertical_t3)
                      }
                      helperText={
                        formik.touched.salto_vertical_t3 && formik.errors.salto_vertical_t3
                      }
                      color="secondary"
                      className="text-field-athlete"
                      variant="outlined"
                    />
                  </FormControl>
                </td>
              </tr>

              <tr className="form-table-row ">
                <td>
                  <h6 className="field-title">Velocidade 10m</h6>
                </td>
                <td >
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="velocidade_10m_t1"
                      name="velocidade_10m_t1"
                      value={formik.values.velocidade_10m_t1}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.velocidade_10m_t1 &&
                        Boolean(formik.errors.velocidade_10m_t1)
                      }
                      helperText={
                        formik.touched.velocidade_10m_t1 && formik.errors.velocidade_10m_t1
                      }
                      className="text-field-athlete"
                      labelId="categoria-etaria-input"
                      variant="outlined"
                    />
                  </FormControl>
                </td>
                <td>
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="velocidade_10m_t2"
                      name="velocidade_10m_t2"
                      value={formik.values.velocidade_10m_t2}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.velocidade_10m_t2 &&
                        Boolean(formik.errors.velocidade_10m_t2)
                      }
                      helperText={
                        formik.touched.velocidade_10m_t2 && formik.errors.velocidade_10m_t2
                      }
                      className="text-field-athlete"
                      labelId="categoria-etaria-input"
                      variant="outlined"
                    />
                  </FormControl>
                </td>
              </tr>

              <tr className="form-table-row ">
                <td>
                  <h6 className="field-title">Velocidade 20m</h6>
                </td>
                <td >
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="velocidade_20m_t1"
                      name="velocidade_20m_t1"
                      value={formik.values.velocidade_20m_t1}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.velocidade_20m_t1 &&
                        Boolean(formik.errors.velocidade_20m_t1)
                      }
                      helperText={
                        formik.touched.velocidade_20m_t1 && formik.errors.velocidade_20m_t1
                      }
                      color="secondary"
                      className="text-field-athlete"
                      variant="outlined"
                    />
                  </FormControl>
                </td>
                <td>
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="velocidade_20m_t2"
                      name="velocidade_20m_t2"
                      value={formik.values.velocidade_20m_t2}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.velocidade_20m_t2 &&
                        Boolean(formik.errors.velocidade_20m_t2)
                      }
                      helperText={
                        formik.touched.velocidade_20m_t2 && formik.errors.velocidade_20m_t2
                      }
                      className="text-field-athlete"
                      labelId="categoria-etaria-input"
                      variant="outlined"
                    />
                  </FormControl>
                </td>
              </tr>

              <tr className="form-table-row ">
                <td>
                  <h6 className="field-title">Agilidade</h6>
                </td>
                <td >
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="agilidade_t1"
                      name="agilidade_t1"
                      value={formik.values.agilidade_t1}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.agilidade_t1 &&
                        Boolean(formik.errors.agilidade_t1)
                      }
                      helperText={
                        formik.touched.agilidade_t1 && formik.errors.agilidade_t1
                      }
                      color="secondary"
                      className="text-field-athlete"
                      variant="outlined"
                    />
                  </FormControl>
                </td>
                <td>
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="agilidade_t2"
                      name="agilidade_t2"
                      value={formik.values.agilidade_t2}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.agilidade_t2 &&
                        Boolean(formik.errors.agilidade_t2)
                      }
                      helperText={
                        formik.touched.agilidade_t2 && formik.errors.agilidade_t2
                      }
                      className="text-field-athlete"
                      labelId="categoria-etaria-input"
                      variant="outlined"
                    />
                  </FormControl>
                </td>
              </tr>

              <tr className="form-table-row ">
                <td>
                  <h6 className="field-title">Drible</h6>
                </td>
                <td >
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="drible_t1"
                      name="drible_t1"
                      value={formik.values.drible_t1}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.drible_t1 &&
                        Boolean(formik.errors.drible_t1)
                      }
                      helperText={
                        formik.touched.drible_t1 && formik.errors.drible_t1
                      }
                      color="secondary"
                      className="text-field-athlete"
                      variant="outlined"
                    />
                  </FormControl>
                </td>
                <td>
                  <FormControl id="form-control" variant="outlined">
                    <TextField
                      id="drible_t2"
                      name="drible_t2"
                      value={formik.values.drible_t2}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.drible_t2 &&
                        Boolean(formik.errors.drible_t2)
                      }
                      helperText={
                        formik.touched.drible_t2 && formik.errors.drible_t2
                      }
                      className="text-field-athlete"
                      labelId="categoria-etaria-input"
                      variant="outlined"
                    />
                  </FormControl>
                </td>
              </tr>

            </table>

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
            <div className='cancel-button'>
              <ButtonFilledCancel route="/menu" text="Cancelar" type="button" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
