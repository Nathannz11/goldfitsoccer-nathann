import {React, useState} from 'react'
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import {useStyles, BootstrapInput} from './../../../_components/selector';

import Slider from './../../../_components/slider';

//import './sport-potencial.css';

export default function SportPotencial() {

    const classes = useStyles();

    const [sex, setSex] = useState('');
    const [gamePosition, setGamePosition] = useState('');
    const [club, setClub] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [yearOfEvaluation, setYearOfEvaluation] = useState('');

    const changeSexInput = (event) => {
        setSex(event.target.value);
    };
    const changeGamePositionInput = (event) => {
        setGamePosition(event.target.value);
    };
    const changeClubInput = (event) => {
        setClub(event.target.value);
    };
    const changeAgeGroup = (event) => {
        setAgeGroup(event.target.value);
    };
    const changeYearOfEvaluation = (event) => {
        setYearOfEvaluation(event.target.value);
    };
  
    return (
        <div className="sport-container">
            <p className="info">Os valores dos filtros são com base no percentil: Baixo (Menor que 40 %), Mediano (entre 40% e 70%), Alto (entre 70% e 90%), Excelência (maior que 90%).</p>
            <div className="input-container">
                <FormControl>
                    <div className = "sex-input">
                        <p className="sex-label">Sexo</p>
                        <NativeSelect  value={sex} onChange={changeSexInput} input={<BootstrapInput />}>
                            <option aria-label="" value="" />
                            <option value={1}>Feminino</option>
                            <option value={2}>Masculino</option>
                        </NativeSelect>
                    </div>
                    <div className = "position-input">
                        <p className="position-label">Posição de Jogo</p>
                        <NativeSelect  value={gamePosition} onChange={changeGamePositionInput} input={<BootstrapInput />}>
                            <option aria-label="" value="" />
                            <option value={1}>Lateral</option>
                            <option value={2}>Zagueiro</option>
                        </NativeSelect>
                    </div>
                    <div className="club-input">
                        <p className="club-label">Clube</p>
                        <NativeSelect  value={club} onChange={changeClubInput} input={<BootstrapInput />}>
                            <option aria-label="" value="" />
                            <option value={1}>Botafogo</option>
                            <option value={2}>Desportiva Ferroviária</option>
                        </NativeSelect>
                    </div>
                    </FormControl>
                <FormControl>
                    <p className="ageGroup-label">Faixa Etária</p>
                    <NativeSelect value={ageGroup} onChange={changeAgeGroup} input={<BootstrapInput />}>
                        <option aria-label="" value="" />
                        <option value={1}>10 a 12 anos</option>
                        <option value={2}>13 a 15 anos</option>
                    </NativeSelect>
                    <p className="year-label">Ano da Avaliação</p>
                    <NativeSelect value={yearOfEvaluation} onChange={changeYearOfEvaluation} input={<BootstrapInput />}>
                        <option aria-label="" value="" />
                        <option value={1}>2020</option>
                        <option value={2}>2021</option>
                    </NativeSelect> 
                </FormControl>
            </div>
            <p className="potencial-label">Potencial Esportivo - Treinador</p>
            <Slider sliderColor="#0E592C"/>
            <p className="goldscore-label">GoldScore</p>
            <Slider sliderColor="#CCA765"/>
      </div>
    );
  }
  