import React, { useContext, useState, useEffect } from "react";

import GreenButton from "../../_components/green-button/index.js";
import ButtonFilledCancel from "../../_components/button-cancel/index.js";
import BurgerMenu from "../../_components/burger-menu/Sidebar.js";
import GreenRadio from "../../_components/green-radio/index.js";
import AuthContext from "../../context/AuthContext.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import { useFormik } from "formik";
import validationSchema from "./formValidation.js";
import ButtonFilled from "../../_components/button/index.js";
import logo from "../../_assets/logo.png";
import api from "../../services/api.js";

import {
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'

import "./styles.css";

// TODO: transformar Termo de Consentimento Livre e Esclarecido em um link
// TODO: criar a página de Termos de Consentimento

export default function FormAthlete6() {
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

  async function createDadosComp(data) {
    try {
      let response = await api.post("api/qdados_pessoais/", data, {
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
      tem_orientacao_treinador: 'false',
      qual_esporte_treina1: '',
      tempo_treinamento1: '',
      frequencia_semanal_treino1: '',
      duracao_treino_horas1: '',
      qual_esporte_treina2: '',
      tempo_treinamento2: '',
      frequencia_semanal_treino2: '',
      duracao_treino_horas2: '',
      instituicao_treinamento: '',
      esporte_preferido: '',
      idade_inicio_futebol: '',
      participa_competicao: 'false',
      maior_nivel_competicao: '0',
      nome_competicao: '',
      maior_nivel_vitoria: '0',
      nome_competicao_maior_vitoria: '',
      quer_ser_atleta: 'false',
      modalidade: '',
      teve_lesao: 'false',
      quantas_lesoes: '',
    },

    validationSchema: validationSchema,
    onSubmit: data => {
      atleta ?
        data.atleta = atleta.id :
        data.atleta = null;
      createDadosComp(data);
    }
  });

  return (
    <>
      <BurgerMenu />
      <div className="box-container">
        <section className="box" id="dados-pessoais-box">
          <img src={logo} className="logo-form" alt="logo do sistema Goldfit Soccer" />
          
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

          <form className="dados-pessoais-form" onSubmit={formik.handleSubmit} >
            <div className="form-item-dados-pessoais" >
              <p className="form-subtitle">
                Você treina algum esporte com orientação de um treinador?
              </p>

              <RadioGroup
                id="tem_orientacao_treinador"
                name="tem_orientacao_treinador"
                value={formik.values.tem_orientacao_treinador}
                onChange={formik.handleChange}
                error={
                  formik.touched.tem_orientacao_treinador &&
                  Boolean(formik.errors.tem_orientacao_treinador)
                }
                helperText={
                  formik.touched.tem_orientacao_treinador && formik.errors.tem_orientacao_treinador
                }
                color="secondary"
                row
                variant="outlined"
                defaultValue={'false'}
              >
                <FormControlLabel value={"true"} control={<GreenRadio />} label="Sim" />
                <FormControlLabel value={"false"} control={<GreenRadio />} label="Não" />
              </RadioGroup>
            </div>

            <section className="dados-pessoais-fields">
              <FormControl id="form-control" variant="outlined">
                <TextField
                  id="qual_esporte_treina1"
                  name="qual_esporte_treina1"
                  value={formik.values.qual_esporte_treina1}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.qual_esporte_treina1 &&
                    Boolean(formik.errors.qual_esporte_treina1)
                  }
                  helperText={
                    formik.touched.qual_esporte_treina1 && formik.errors.qual_esporte_treina1
                  }
                  color="secondary"
                  className="text-field-dados-pessoais"
                  variant="outlined"
                  label="Qual esporte você treina?"
                />
              </FormControl>

              <FormControl id="form-control" variant="outlined">
                <TextField
                  id="tempo_treinamento1"
                  name="tempo_treinamento1"
                  value={formik.values.tempo_treinamento1}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.tempo_treinamento1 &&
                    Boolean(formik.errors.tempo_treinamento1)
                  }
                  helperText={
                    formik.touched.tempo_treinamento1 && formik.errors.tempo_treinamento1
                  }
                  color="secondary"
                  className="text-field-dados-pessoais"
                  variant="outlined"
                  label="Há quanto tempo?"
                />
              </FormControl>

              <FormControl id="form-control" variant="outlined">
                <TextField
                  id="frequencia_semanal_treino1"
                  name="frequencia_semanal_treino1"
                  value={formik.values.frequencia_semanal_treino1}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.frequencia_semanal_treino1 &&
                    Boolean(formik.errors.frequencia_semanal_treino1)
                  }
                  helperText={
                    formik.touched.frequencia_semanal_treino1 && formik.errors.frequencia_semanal_treino1
                  }
                  color="secondary"
                  className="text-field-dados-pessoais"
                  variant="outlined"
                  label="Quantas vezes na semana?"
                />
              </FormControl>

              <FormControl id="form-control" variant="outlined">
                <TextField
                  id="duracao_treino_horas1"
                  name="duracao_treino_horas1"
                  value={formik.values.duracao_treino_horas1}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.duracao_treino_horas1 &&
                    Boolean(formik.errors.duracao_treino_horas1)
                  }
                  helperText={
                    formik.touched.duracao_treino_horas1 && formik.errors.duracao_treino_horas1
                  }
                  color="secondary"
                  className="text-field-dados-pessoais"
                  variant="outlined"
                  label="Duração do treino (horas)"
                />
              </FormControl>
            </section>

            <section className="dados-pessoais-fields">
              <FormControl id="form-control" variant="outlined">
                <TextField
                  id="qual_esporte_treina2"
                  name="qual_esporte_treina2"
                  value={formik.values.qual_esporte_treina2}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.qual_esporte_treina2 &&
                    Boolean(formik.errors.qual_esporte_treina2)
                  }
                  helperText={
                    formik.touched.qual_esporte_treina2 && formik.errors.qual_esporte_treina2
                  }
                  color="secondary"
                  className="text-field-dados-pessoais"
                  variant="outlined"
                  label="Qual esporte você treina?"
                />
              </FormControl>

              <FormControl id="form-control" variant="outlined">
                <TextField
                  id="tempo_treinamento2"
                  name="tempo_treinamento2"
                  value={formik.values.tempo_treinamento2}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.tempo_treinamento2 &&
                    Boolean(formik.errors.tempo_treinamento2)
                  }
                  helperText={
                    formik.touched.tempo_treinamento2 && formik.errors.tempo_treinamento2
                  }
                  color="secondary"
                  className="text-field-dados-pessoais"
                  variant="outlined"
                  label="Há quanto tempo?"
                />
              </FormControl>

              <FormControl id="form-control" variant="outlined">
                <TextField
                  id="frequencia_semanal_treino2"
                  name="frequencia_semanal_treino2"
                  value={formik.values.frequencia_semanal_treino2}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.frequencia_semanal_treino2 &&
                    Boolean(formik.errors.frequencia_semanal_treino2)
                  }
                  helperText={
                    formik.touched.frequencia_semanal_treino2 && formik.errors.frequencia_semanal_treino2
                  }
                  color="secondary"
                  className="text-field-dados-pessoais"
                  variant="outlined"
                  label="Quantas vezes na semana?"
                />
              </FormControl>

              <FormControl id="form-control" variant="outlined">
                <TextField
                  id="duracao_treino_horas2"
                  name="duracao_treino_horas2"
                  value={formik.values.duracao_treino_horas2}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.duracao_treino_horas2 &&
                    Boolean(formik.errors.duracao_treino_horas2)
                  }
                  helperText={
                    formik.touched.duracao_treino_horas2 && formik.errors.duracao_treino_horas2
                  }
                  color="secondary"
                  className="text-field-dados-pessoais"
                  variant="outlined"
                  label="Duração do treino (horas)"
                />
              </FormControl>
            </section>

            <section className="form-text-item-dados-pessoais">
              <div className="dados-pessoais-item">
                <h6 className="form-subtitle">Onde você treina?</h6>
                <FormControl id="form-control" variant="outlined">
                  <TextField
                    id="instituicao_treinamento"
                    name="instituicao_treinamento"
                    value={formik.values.instituicao_treinamento}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.instituicao_treinamento &&
                      Boolean(formik.errors.instituicao_treinamento)
                    }
                    helperText={
                      formik.touched.instituicao_treinamento && formik.errors.instituicao_treinamento
                    }
                    label="Instituição"
                    color="secondary"
                    className="text-field-dados-pessoais"
                    variant="outlined"
                  />
                </FormControl>
              </div>

              <div className="dados-pessoais-item">
                <h6 className="form-subtitle">Qual é o seu esporte preferido?</h6>
                <FormControl id="form-control" variant="outlined">
                  <TextField
                    id="esporte_preferido"
                    name="esporte_preferido"
                    value={formik.values.esporte_preferido}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.esporte_preferido &&
                      Boolean(formik.errors.esporte_preferido)
                    }
                    helperText={
                      formik.touched.esporte_preferido && formik.errors.esporte_preferido
                    }
                    label="Escolher apenas um esporte"
                    color="secondary"
                    className="text-field-dados-pessoais"
                    variant="outlined"
                  />
                </FormControl>
              </div>
            </section>

            <div className="dados-pessoais-item">
              <h6 className="form-subtitle" id="idade-form-subtitle">Com que idade você começou a treinar Futebol (Idade de Início)?</h6>
              <FormControl id="form-control" variant="outlined">
                <TextField
                  id="idade_inicio_futebol"
                  name="idade_inicio_futebol"
                  value={formik.values.idade_inicio_futebol}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.idade_inicio_futebol &&
                    Boolean(formik.errors.idade_inicio_futebol)
                  }
                  helperText={
                    formik.touched.idade_inicio_futebol && formik.errors.idade_inicio_futebol
                  }
                  label="Idade (anos)"
                  color="secondary"
                  className="text-field-dados-pessoais"
                  variant="outlined"
                />
              </FormControl>
            </div>

            <div className="form-item-dados-pessoais" >
              <p className="form-subtitle">
                Você participa de competições esportivas, pelo menos 2x/ano?
              </p>
              <RadioGroup
                id="participa_competicao"
                name="participa_competicao"
                label="Habilidade de Drible"
                value={formik.values.participa_competicao}
                onChange={formik.handleChange}
                error={
                  formik.touched.participa_competicao &&
                  Boolean(formik.errors.participa_competicao)
                }
                helperText={
                  formik.touched.participa_competicao && formik.errors.participa_competicao
                }
                color="secondary"
                row
                variant="outlined"
                defaultValue={'false'}
              >
                <FormControlLabel value={'true'} control={<GreenRadio />} label="Sim" />
                <FormControlLabel value={'false'} control={<GreenRadio />} label="Não" />
              </RadioGroup>
            </div>

            <div>
              <p className="form-subtitle">
                Qual é o maior nível de competição que você já <strong>DISPUTOU</strong>?
              </p>
              <RadioGroup
                id="maior_nivel_competicao"
                name="maior_nivel_competicao"
                label="Habilidade de Drible"
                value={formik.values.maior_nivel_competicao}
                onChange={formik.handleChange}
                error={
                  formik.touched.maior_nivel_competicao &&
                  Boolean(formik.errors.maior_nivel_competicao)
                }
                helperText={
                  formik.touched.maior_nivel_competicao && formik.errors.maior_nivel_competicao
                }
                color="secondary"
                row
                variant="outlined"
                defaultValue={'0'}
              >
                <FormControlLabel value={'0'} control={<GreenRadio />} label="Nunca disputou" />
                <FormControlLabel value={'1'} control={<GreenRadio />} label="Municipal/Regional" />
                <FormControlLabel value={'2'} control={<GreenRadio />} label="Estadual" />
                <FormControlLabel value={'3'} control={<GreenRadio />} label="Nacional" />
                <FormControlLabel value={'4'} control={<GreenRadio />} label="Internacional" />
              </RadioGroup>

              <FormControl id="form-control" variant="outlined" >
                <TextField
                  id="nome_competicao"
                  name="nome_competicao"
                  value={formik.values.nome_competicao}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.nome_competicao &&
                    Boolean(formik.errors.nome_competicao)
                  }
                  helperText={
                    formik.touched.nome_competicao && formik.errors.nome_competicao
                  }
                  color="secondary"
                  className="single-text-field"
                  variant="outlined"
                  label="Nome da maior competição que DISPUTOU"
                />
              </FormControl>
            </div>

            <div>
              <p className="form-subtitle">
              Qual é o maior nível de competição que você já <strong>VENCEU</strong>? <em>(foi 
              medalhista ou campeão)</em>
              </p>
              <RadioGroup
                id="maior_nivel_vitoria"
                name="maior_nivel_vitoria"
                value={formik.values.maior_nivel_vitoria}
                onChange={formik.handleChange}
                error={
                  formik.touched.maior_nivel_vitoria &&
                  Boolean(formik.errors.maior_nivel_vitoria)
                }
                helperText={
                  formik.touched.maior_nivel_vitoria && formik.errors.maior_nivel_vitoria
                }
                color="secondary"
                row
                variant="outlined"
                defaultValue={'0'}
              >
                <FormControlLabel value={'0'} control={<GreenRadio />} label="Nunca disputou" />
                <FormControlLabel value={'1'} control={<GreenRadio />} label="Municipal/Regional" />
                <FormControlLabel value={'2'} control={<GreenRadio />} label="Estadual" />
                <FormControlLabel value={'3'} control={<GreenRadio />} label="Nacional" />
                <FormControlLabel value={'4'} control={<GreenRadio />} label="Internacional" />
              </RadioGroup>

              <FormControl id="form-control" variant="outlined" >
                <TextField
                  id="nome_competicao_maior_vitoria"
                  name="nome_competicao_maior_vitoria"
                  value={formik.values.nome_competicao_maior_vitoria}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.nome_competicao_maior_vitoria &&
                    Boolean(formik.errors.nome_competicao_maior_vitoria)
                  }
                  helperText={
                    formik.touched.nome_competicao_maior_vitoria && formik.errors.nome_competicao_maior_vitoria
                  }
                  color="secondary"
                  className="single-text-field"
                  variant="outlined"
                  label="Nome da maior competição que VENCEU"
                />
              </FormControl>
            </div>

            <div className="form-item-dados-pessoais" >
              <p className="form-subtitle">
                Você quer ser um atleta no futuro?
              </p>
              <RadioGroup
                id="quer_ser_atleta"
                name="quer_ser_atleta"
                label="Habilidade de Drible"
                value={formik.values.quer_ser_atleta}
                onChange={formik.handleChange}
                error={
                  formik.touched.quer_ser_atleta &&
                  Boolean(formik.errors.quer_ser_atleta)
                }
                helperText={
                  formik.touched.quer_ser_atleta && formik.errors.quer_ser_atleta
                }
                color="secondary"
                row
                variant="outlined"
                defaultValue={'false'}
              >
                <FormControlLabel value={'true'} control={<GreenRadio />} label="Sim" />
                <FormControlLabel value={'false'} control={<GreenRadio />} label="Não" />
              </RadioGroup>
            </div>

            <FormControl id="form-control" variant="outlined" >
              <TextField
                id="modalidade"
                name="modalidade"
                value={formik.values.modalidade}
                onChange={formik.handleChange}
                error={
                  formik.touched.modalidade &&
                  Boolean(formik.errors.modalidade)
                }
                helperText={
                  formik.touched.modalidade && formik.errors.modalidade
                }
                color="secondary"
                className="single-text-field"
                variant="outlined"
                label="Qual modalidade?"
              />
            </FormControl>

            <div className="form-item-dados-pessoais" >
              <p className="form-subtitle">
                Você já teve alguma lesão praticando esportes?
              </p>
              <RadioGroup
                id="teve_lesao"
                name="teve_lesao"
                label="Habilidade de Drible"
                value={formik.values.teve_lesao}
                onChange={formik.handleChange}
                error={
                  formik.touched.teve_lesao &&
                  Boolean(formik.errors.teve_lesao)
                }
                helperText={
                  formik.touched.teve_lesao && formik.errors.teve_lesao
                }
                color="secondary"
                row
                variant="outlined"
                defaultValue={'false'}
              >
                <FormControlLabel value={'true'} control={<GreenRadio />} label="Sim" />
                <FormControlLabel value={'false'} control={<GreenRadio />} label="Não" />
              </RadioGroup>
            </div>

            <FormControl id="form-control" variant="outlined" >
              <TextField
                id="quantas_lesoes"
                name="quantas_lesoes"
                value={formik.values.quantas_lesoes}
                onChange={formik.handleChange}
                error={
                  formik.touched.quantas_lesoes &&
                  Boolean(formik.errors.quantas_lesoes)
                }
                helperText={
                  formik.touched.quantas_lesoes && formik.errors.quantas_lesoes
                }
                color="secondary"
                className="single-text-field"
                variant="outlined"
                label="Quantas?"
              />
            </FormControl>

            {/* <div className="form-item-dados-pessoais" >
              <Checkbox
                checked={}
                onChange={handleChange}
                color="success"
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <p className="form-subtitle">
                Declaro que li e concordo com o <u>Termo de Consentimento Livre e Esclarecido</u>
              </p>
            </div> */}
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
