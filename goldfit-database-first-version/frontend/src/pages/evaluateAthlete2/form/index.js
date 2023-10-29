import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import GreenButton from "../../../_components/green-button/index.js";
import api from "../../../services/api.js";
import AuthContext from "../../../context/AuthContext.js";
import "./styles.css";

import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";

// TODO: adicionar popups personalizados

export default function AvAerobicaForm() {
  const history = useHistory();
  const { authToken } = useContext(AuthContext);
  const [atletas, setAtletas] = useState([]);
  const [evaluatedAthlete, setEvaluatedAthlete] = useState([]);
  const [estagio, setEstagio] = useState(0);
  const [volta, setVolta] = useState(0);

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

  async function createEvaluationAE(data) {
    try {
      let response = await api.post("api/av_aerobica/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authToken.access),
        },
      });

      if (response.status === 201) {
        alert("Avaliação cadastrada com sucesso!");
      }

      if(response.status === 403) {
        history.push("/login-credentials");
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao cadastrar a avaliação, tente novamente!");
    }
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      let postData = {};

      if (evaluatedAthlete) {
        postData.atleta = evaluatedAthlete.id;
        postData.estagio = estagio;
        postData.volta = volta;

        createEvaluationAE(postData);
      } else {
        alert("Selecione um atleta para cadastrar a avaliação.");
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao cadastrar a avaliação, tente novamente!");
    }
  }

  useEffect(() => {
    getAtletas();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="aerobica-form">
      <FormControl variant="outlined">
        <InputLabel id="evaluate-athlete1-atleta-label">
          Atleta
        </InputLabel>
        <Select
          className="text-field"
          labelId="evaluate-athlete1-atleta-label"
          id="evaluate-athlete1-atleta-input"
          name="atleta"
          value={evaluatedAthlete}
          label="Atleta"
          onChange={e => setEvaluatedAthlete(e.target.value)}
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

      <div className="aerobica-form-input">
        <h6 className="aerobica-field-title">Estágio</h6>
        <FormControl id="form-control" variant="outlined">
          <TextField
            id="estagio"
            name="estagio"
            value={estagio}
            color="secondary"
            className="text-field-athlete"
            variant="outlined"
          />
        </FormControl>
        <button
          className="form-action-button"
          type="button"
          onClick={() => {
            setEstagio(estagio + 1)
          }}>
          +
        </button>

        <button
          className="form-action-button"
          type="button"
          onClick={() => {
            if (estagio > 0)
              setEstagio(estagio - 1)
          }}
        >
          -
        </button>
      </div>

      <div className="aerobica-form-input">
        <h6 className="aerobica-field-title">Volta</h6>
        <FormControl id="form-control" variant="outlined">
          <TextField
            id="volta-atleta"
            name="volta"
            value={volta}
            color="secondary"
            className="text-field-athlete"
            variant="outlined"
          />
        </FormControl>
        <button
          className="form-action-button"
          type="button"
          onClick={() => {
            setVolta(volta + 1)
          }}>
          +
        </button>
        <button
          className="form-action-button"
          type="button"
          onClick={() => {
            if (volta > 0)
              setVolta(volta - 1)
          }}
        >
          -
        </button>
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
  );
}
