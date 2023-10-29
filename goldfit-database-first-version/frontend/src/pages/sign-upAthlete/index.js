import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';

import Logo from "../../_assets/logo.png";
import "./styles.css";

import { useFormik } from "formik";
import * as yup from "yup";
import api from "../../services/api";
import AuthContext from '../../context/AuthContext';
import ButtonFilledCancel from "../../_components/button-cancel";
import BurgerMenu from "../../_components/burger-menu/Sidebar.js";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  withStyles,
} from "@material-ui/core/";

// TODO: transformar o GreenButton em um componente
const GreenButton = withStyles({  
  root: {
    backgroundColor: "#489152",
    width: "17vw",
    fontFamily: 'Open Sans',
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "20px",
    margin:"5% 0%",
    "&:hover": {
      backgroundColor: "#0E592C"
    }
},
checked: {},
})((props) => <Button color="default" {...props} />);

// TODO: transformar esse objeto em um arquivo JSON para importação dos valores dos estados
const estados = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

const validationSchema = yup.object({
  nome_completo: yup
    .string("Forneça o nome completo do atleta")
    .min(2, "O nome deve ter no mínimo dois caracteres")
    .matches(/^[A-Za-z ]*$/, "Por favor, entre com um nome válido")
    .max(40, "O nome deve ter no máximo 40 caraacteres")
    .required("Campo obrigatório"),
  categoria_etaria: yup
    .string("Selecione uma categoria etária")
    .required("Campo obrigatório"),
  posicao_jogo: yup
    .string("Selecione uma posição de jogo")
    .required("Campo obrigatório"),
  dominancia_pes: yup
    .string("Selecione uma lateralidade dominate")
    .required("Campo obrigatório"),
  estado: yup
    .string("Selecione um estado")
    .required("Campo obrigatório")
    .min(2, "O estado deve ter no mínimo dois caracteres"),
  instituicao_clube: yup
    .string("Forneça o nome da instuição/clube")
    .min(3, "O nome deve ter no mínimo cinco caracteres")
    .max(40)
    .required("Campo obrigatório"),
});

export default function SignUpAthlete() {
  const history = useHistory();
  const { authToken, logoutUser } = useContext(AuthContext);

  function validateAlphabet(e) {
    const re = /^[A-Za-z ]*$/;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }

  async function createNewAthlete(data) {
    try {
      let response = await api.post("api/atleta/", data, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + String(authToken.access),
        },
      })

      if (response.status === 201) {
        history.push("/cadastro-sucesso");
      }
    } catch(error) {
      console.log(error);
      alert("Erro ao cadastrar o atleta, tente novamente!");
      logoutUser();
    }
  }

  const formik = useFormik({
    initialValues: {
      nome_completo: "",
      categoria_etaria: "",
      posicao_jogo: "",
      dominancia_pes: "",
      estado: "",
      instituicao_clube: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (data) => {
      createNewAthlete(data);
    },
  });

  return (
    <>
      <BurgerMenu></BurgerMenu>
    
    <section className="sign-up-atlhete-container">
      <div className="form-container-sign-up-atlhete">
        <img className="img-logo-sign-up-athlete" src={Logo} alt="logo" />
        
        <form className="formulario" onSubmit={formik.handleSubmit}>
          <section className="input-section-signupathlete">
            <div className="athlete-form-input">
              <TextField
                onKeyDown={(e) => validateAlphabet(e)}
                id="name-atleta"
                name="nome_completo"
                label="Nome Completo"
                value={formik.values.nome_completo}
                onChange={formik.handleChange}
                error={
                  formik.touched.nome_completo &&
                  Boolean(formik.errors.nome_completo)
                }
                helperText={
                  formik.touched.nome_completo && formik.errors.nome_completo
                }
                color="secondary"
                className="text-field-athlete"
                variant="outlined"
              />
            </div>
            <div className="athlete-form-input">
              <FormControl id="form-control" variant="outlined">
                <InputLabel id="categoria-etaria-input">
                  Categoria Etária
                </InputLabel>
                <Select
                  id="categoria-etaria"
                  select
                  name="categoria_etaria"
                  label="Categoria Etária"
                  value={formik.values.categoria_etaria}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.categoria_etaria &&
                    Boolean(formik.errors.categoria_etaria)
                  }
                  helperText={
                    formik.touched.categoria_etaria && formik.errors.categoria_etaria
                  }
                  className="text-field-athlete"
                  labelId="categoria-etaria-input"
                >
                  <MenuItem value={"Sub-13"}>Sub-13</MenuItem>
                  <MenuItem value={"Sub-14"}>Sub-14</MenuItem>
                  <MenuItem value={"Sub-15"}>Sub-15</MenuItem>
                  <MenuItem value={"Sub-16"}>Sub-16</MenuItem>
                  <MenuItem value={"Sub-17"}>Sub-17</MenuItem>
                </Select>
              </FormControl>
            </div>
          </section>
          <section className="input-section-signupathlete">
            <div className="athlete-form-input">
              <FormControl id="form-control" variant="outlined">
                <InputLabel id="posicao-input">Posição de jogo</InputLabel>
                <Select
                  id="posicao-input-select"
                  name="posicao_jogo"
                  value={formik.values.posicao_jogo}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.posicao_jogo && Boolean(formik.errors.posicao_jogo)
                  }
                  helperText={formik.touched.posicao_jogo && formik.errors.posicao_jogo}
                  className="text-field-athlete"
                  labelId="posicao-input"
                  label="Posição de jogo"
                >
                  <MenuItem value={"Goleiro"}>Goleiro</MenuItem>
                  <MenuItem value={"Defensor"}>Defensor</MenuItem>
                  <MenuItem value={"Lateral"}>Lateral</MenuItem>
                  <MenuItem value={"Meia"}>Meia</MenuItem>
                  <MenuItem value={"Atacante"}>Atacante</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="athlete-form-input">
              <FormControl id="form-control" variant="outlined">
                <InputLabel id="lateralidade-input-label">
                  Lateralidade
                </InputLabel>
                <Select
                  id="dominancia_pes-input"
                  name="dominancia_pes"
                  label="Lateralidade"
                  value={formik.values.dominancia_pes}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.dominancia_pes &&
                    Boolean(formik.errors.dominancia_pes)
                  }
                  helperText={
                    formik.touched.dominancia_pes && formik.errors.dominancia_pes
                  }
                  className="text-field-athlete"
                  labelId="lateralidade-input-label"
                >
                  <MenuItem value={1}>Destro</MenuItem>
                  <MenuItem value={2}>Canhoto</MenuItem>
                  <MenuItem value={3}>Ambidestro</MenuItem>
                </Select>
              </FormControl>
            </div>
          </section>

          <section className="input-section-signupathlete">
            <div className="athlete-form-input">
              <FormControl id="form-control" variant="outlined">
                <InputLabel id="estado-input-label">Estado</InputLabel>
                <Select
                  id="estado-input"
                  name="estado"
                  label="Estado"
                  value={formik.values.estado}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.estado && Boolean(formik.errors.estado)
                  }
                  helperText={formik.touched.estado && formik.errors.estado}
                  className="text-field-athlete"
                  labelId="estado-input-label"
                >
                  {estados?.map((estado) => (
                    <MenuItem value={estado}>{estado}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="athlete-form-input">
              <TextField
                id="instituicao-input"
                className="text-field-athlete"
                name="instituicao_clube"
                label="Instituição/Clube"
                value={formik.values.instituicao_clube}
                onChange={formik.handleChange}
                error={
                  formik.touched.instituicao_clube &&
                  Boolean(formik.errors.instituicao_clube)
                }
                helperText={
                  formik.touched.instituicao_clube &&
                  formik.errors.instituicao_clube
                }
                variant="outlined"
              />
            </div>
          </section>

          {/* <section>
            <div className="input-password">
              <InputLabel id="demo-simple-select-outlined-label">
                <input
                  style={{ display: "none" }}
                  id="upload-photo"
                  name="upload-photo"
                  type="file"
                />
                <Fab component="span" aria-label="add" variant="extended">
                  {" "}
                  &nbsp;Selecionar{" "}
                </Fab>
                &nbsp;&nbsp;&nbsp;&nbsp;Escolher uma imagem &nbsp;
              </InputLabel>
            </div>
          </section> */}

          <section className="button-section" >
            <GreenButton id="botao-cadastrar" color="primary" variant="contained" fullWidth type="submit">
              Cadastrar
            </GreenButton>
            
             <ButtonFilledCancel className="btn-cancel-component" text="Sair" route="/menu" />
          </section>

        </form>
      </div>
    </section>
    </>

  );
}
