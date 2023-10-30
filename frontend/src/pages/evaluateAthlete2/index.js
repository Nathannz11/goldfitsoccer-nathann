import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import ButtonFilledCancel from "../../_components/button-cancel/index.js";
import ButtonFilled from "../../_components/button/index.js";
import BurgerMenu from "../../_components/burger-menu/Sidebar.js";
import AvAerobicaForm from "./form/index.js";

import {
  Select,
  Button,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  withStyles,
} from "@material-ui/core";

import "./styles.css";


// TODO: conferir porque alguns campos ficam azuis e outros vermelhos
// TODO: ajustar tamanho e componentes de botão padronizados

export default function EvaluateAthlete2() {
  const [totalAtletas, setTotalAtletas] = useState(6);

  return (
    <>
      <BurgerMenu />
      <div className="box-container">
        <div className="box">
          <div className="title-container">
            <h1 className="forms-title"> Avaliação Aeróbica</h1>
            <p className="form-subtitle">Teste de Corrida Vai-e-Vem (20 m)</p>

            <section className="create-new-athlete" id="create-new-athlete-1">
                <FormControl variant="outlined">
                  <InputLabel id="evaluate-athlete1-atleta-label">
                    Número de Alunos avaliados
                  </InputLabel>
                  <Select
                    className="text-field"
                    labelId="evaluate-athlete1-atleta-label"
                    id="evaluate-athlete1-atleta-input"
                    value={totalAtletas}
                    label="Atleta"
                    onChange={e => setTotalAtletas(e.target.value)}
                  >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                  </Select>
                </FormControl>
            </section>

            {Array(totalAtletas/2).fill(            
              <div className="flex-form">
                <AvAerobicaForm />
                <AvAerobicaForm />
              </div>
            )}
          </div>
          <ButtonFilledCancel route="/menu" text="Cancelar" type="button" />
        </div>
      </div>
    </>
  );
}
