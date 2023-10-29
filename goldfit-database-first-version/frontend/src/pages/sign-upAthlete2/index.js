import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../_assets/logo.png'
import ButtonFilled from '../../_components/button/index.js'
import ButtonFilledCancel from '../../_components/button-cancel/index.js'
import './styles.css'

import TextField from '@material-ui/core/TextField';
import { Select } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);


export default function SignUpAthlete2() {

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="container">
      <img className="img-logo" src={Logo} alt="logo" />
      <div className="form">
        <section>
          <div className="input-deficiency">
            <FormControl variant="outlined" >
              <InputLabel id="custom-css-standard-input">Possui alguma deficiência?</InputLabel>
              <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined"
                                /*value={age}*/ onChange={handleChange} label="Possui alguma deficiência?">
                <MenuItem >Sim</MenuItem>
                <MenuItem >Não</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="input-which">
            <TextField className="text-field" id="outlined-basic" label="Se sim, quais?" variant="outlined" />
          </div>
        </section>

        <section>
          <div className="input-cheers">
            <FormControl variant="outlined" >
              <InputLabel id="custom-css-standard-input">Possui algum problema de saúde?</InputLabel>
              <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined"
                                /*value={age} */ onChange={handleChange} label="Possui algum problema de saúde?">
                <MenuItem >Sim</MenuItem>
                <MenuItem >Não</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="input-which">
            <TextField className="text-field" id="outlined-basic" label="Se sim, quais?" variant="outlined" />
          </div>
        </section>

        <section>
          <div className="input-medicine">
            <FormControl variant="outlined" >
              <InputLabel id="custom-css-standard-input">Faz uso regular de medicamentos?</InputLabel>
              <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined"
                                /*value={age}*/ onChange={handleChange} label="Faz uso regular de algum medicamento?">
                <MenuItem >Sim</MenuItem>
                <MenuItem >Não</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="input-last">
            <TextField className="text-field" id="outlined-basic" label="Se sim, quais?" variant="outlined" />
          </div>
        </section>

        <section>
          <div className="label-text">
            <div className="text">
              <InputLabel>Como você avalia a qualidade do seu sono, nos últimos dias?</InputLabel>
            </div>
            <div className="options">
              <InputLabel> Muito ruim <GreenRadio checked={selectedValue === 'Muito ruim'} onChange={handleChange} value="Muito ruim" name="radio-button-demo" inputProps={{ 'aria-label': ' Muito ruim' }} /> </InputLabel>
              <InputLabel> Ruim<GreenRadio checked={selectedValue === 'Ruim'} onChange={handleChange} value="Ruim" name="radio-button-demo" inputProps={{ 'aria-label': 'Ruim' }} /> </InputLabel>
              <InputLabel> Normal<GreenRadio checked={selectedValue === 'Normal'} onChange={handleChange} value="Normal" name="radio-button-demo" inputProps={{ 'aria-label': 'Normal' }} /> </InputLabel>
              <InputLabel> Bom<GreenRadio checked={selectedValue === 'Bom'} onChange={handleChange} value="Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Bom' }} /> </InputLabel>
              <InputLabel> Excelente<GreenRadio checked={selectedValue === 'Excelente'} onChange={handleChange} value="Excelente" name="radio-button-demo" inputProps={{ 'aria-label': 'Excelente' }} /> </InputLabel>
            </div>
            <div className="options-secondary">
              <div className="teste">
                <InputLabel> Muito ruim <GreenRadio checked={selectedValue === 'Muito ruim'} onChange={handleChange} value="Muito ruim" name="radio-button-demo" inputProps={{ 'aria-label': ' Muito ruim' }} /> </InputLabel>
                <InputLabel> Ruim<GreenRadio checked={selectedValue === 'Ruim'} onChange={handleChange} value="Ruim" name="radio-button-demo" inputProps={{ 'aria-label': 'Ruim' }} /> </InputLabel>
                <InputLabel> Normal<GreenRadio checked={selectedValue === 'Normal'} onChange={handleChange} value="Normal" name="radio-button-demo" inputProps={{ 'aria-label': 'Normal' }} /> </InputLabel>
              </div>
              <div className="teste">
                <InputLabel> Bom<GreenRadio checked={selectedValue === 'Bom'} onChange={handleChange} value="Bom" name="radio-button-demo" inputProps={{ 'aria-label': 'Bom' }} /> </InputLabel>
                <InputLabel> Excelente<GreenRadio checked={selectedValue === 'Excelente'} onChange={handleChange} value="Excelente" name="radio-button-demo" inputProps={{ 'aria-label': 'Excelente' }} /> </InputLabel>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="label-text">
            <div className="text">
              <InputLabel> Como você se sente recuperado quando acorda? Sendo 1 (nada) a 10 (totalmente)</InputLabel>
            </div>
            <br></br>
            <FormControl variant="outlined" >
              <InputLabel id="custom-css-standard-input">Selecione</InputLabel>
              <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined"
                                    /*value={age} */ onChange={handleChange} label="Possui algum problema de saúde?">
                <MenuItem >0</MenuItem>
                <MenuItem >1</MenuItem>
                <MenuItem >2</MenuItem>
                <MenuItem >3</MenuItem>
                <MenuItem >4</MenuItem>
                <MenuItem >5</MenuItem>
                <MenuItem >6</MenuItem>
                <MenuItem >7</MenuItem>
                <MenuItem >8</MenuItem>
                <MenuItem >9</MenuItem>
                <MenuItem >10</MenuItem>
              </Select>
            </FormControl>
          </div>
        </section>

        <section>
          <div className="label-text">
            <div className="text">
              <InputLabel>Com as mãos você é:</InputLabel>
            </div>
            <div className="options">
              <InputLabel> Destro<GreenRadio checked={selectedValue === 'DestroMaos'} onChange={handleChange} value="DestroMaos" name="radio-button-demo" inputProps={{ 'aria-label': 'DestroMaos' }} /> </InputLabel>
              <InputLabel> Canhoto<GreenRadio checked={selectedValue === 'CanhotoMaos'} onChange={handleChange} value="CanhotoMaos" name="radio-button-demo" inputProps={{ 'aria-label': 'CanhotoMaos' }} /> </InputLabel>
              <InputLabel> Ambidestro<GreenRadio checked={selectedValue === 'AmbidestroMaos'} onChange={handleChange} value="AmbidestroMaos" name="radio-button-demo" inputProps={{ 'aria-label': 'AmbidestroMaos' }} /> </InputLabel>
            </div>
            <div className="options-secondary">
              <div className="teste">
                <InputLabel> &nbsp;&nbsp;&nbsp;&nbsp;Destro<GreenRadio checked={selectedValue === 'DestroMaos'} onChange={handleChange} value="DestroMaos" name="radio-button-demo" inputProps={{ 'aria-label': ' DestroMaos' }} /> </InputLabel>
                <InputLabel> Canhoto<GreenRadio checked={selectedValue === 'CanhotoMaos'} onChange={handleChange} value="CanhotoMaos" name="radio-button-demo" inputProps={{ 'aria-label': 'CanhotoMaos' }} /> </InputLabel>
                <InputLabel> Ambidestro<GreenRadio checked={selectedValue === 'AmbidestroMaos'} onChange={handleChange} value="AmbidestroMaos" name="radio-button-demo" inputProps={{ 'aria-label': 'AmbidestroMaos' }} /> </InputLabel>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="label-text">
            <div className="text">
              <InputLabel>Com os pés você é:</InputLabel>
            </div>
            <div className="options">
              <InputLabel> Destro<GreenRadio checked={selectedValue === 'DestroPes'} onChange={handleChange} value="DestroPes" name="radio-button-demo" inputProps={{ 'aria-label': 'DestroPes' }} /> </InputLabel>
              <InputLabel> Canhoto<GreenRadio checked={selectedValue === 'CanhotoPes'} onChange={handleChange} value="CanhotoPes" name="radio-button-demo" inputProps={{ 'aria-label': 'CanhotoPes' }} /> </InputLabel>
              <InputLabel> Ambidestro<GreenRadio checked={selectedValue === 'AmbidestroPes'} onChange={handleChange} value="AmbidestroPes" name="radio-button-demo" inputProps={{ 'aria-label': 'AmbidestroPes' }} /> </InputLabel>
            </div>
            <div className="options-secondary">
              <div className="teste">
                <InputLabel> &nbsp;&nbsp;&nbsp;&nbsp;Destro<GreenRadio checked={selectedValue === 'DestroPes'} onChange={handleChange} value="DestroPes" name="radio-button-demo" inputProps={{ 'aria-label': 'DestroPes' }} /> </InputLabel>
                <InputLabel> Canhoto<GreenRadio checked={selectedValue === 'CanhotoPes'} onChange={handleChange} value="CanhotoPes" name="radio-button-demo" inputProps={{ 'aria-label': 'CanhotoPes' }} /> </InputLabel>
                <InputLabel> Ambidestro<GreenRadio checked={selectedValue === 'AmbidestroPes'} onChange={handleChange} value="AmbidestroPes" name="radio-button-demo" inputProps={{ 'aria-label': 'AmbidestroPes' }} /> </InputLabel>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="label-text">
            <div className="text">
              <p className="smaller-text">Esta questão, apenas as MENINAS devem responder:</p>
              <InputLabel>Você já teve a menarca (primeira mestruação)?</InputLabel>
            </div>
            <div className="options">
              <InputLabel> Sim<GreenRadio checked={selectedValue === 'Sim'} onChange={handleChange} value="Sim" name="radio-button-demo" inputProps={{ 'aria-label': 'Sim' }} /> </InputLabel>
              <InputLabel> &nbsp; &nbsp; Não<GreenRadio checked={selectedValue === 'Não'} onChange={handleChange} value="Não" name="radio-button-demo" inputProps={{ 'aria-label': 'Não' }} /> </InputLabel>
              <div className="input-years">
                <TextField className="text-field" id="outlined-basic" label="Se sim, com quantos anos?" variant="outlined" />
              </div>
            </div>
            <div className="options-secondary">
              <div className="teste">
                <InputLabel> &nbsp;Sim<GreenRadio checked={selectedValue === 'Sim'} onChange={handleChange} value="Sim" name="radio-button-demo" inputProps={{ 'aria-label': 'Sim' }} /> </InputLabel>
                <InputLabel>Não<GreenRadio checked={selectedValue === 'Não'} onChange={handleChange} value="Não" name="radio-button-demo" inputProps={{ 'aria-label': 'Não' }} /> </InputLabel>
              </div>
              <div className="teste">
                <div className="input-years">
                  <TextField className="text-field" id="outlined-basic" label="Se sim, com quantos anos?" variant="outlined" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <section>
        <div className="botao">
          <ButtonFilledCancel route="/" text="Cancelar" />
        </div>
        <div className="botao">
          <ButtonFilled route="/" text="Cadastrar" />
        </div>
      </section>

    </div>
  )
}