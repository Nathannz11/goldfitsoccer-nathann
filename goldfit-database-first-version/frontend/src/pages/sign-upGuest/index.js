import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../_assets/logo.png'
import ButtonFilled from '../../_components/button/index.js'
import './styles.css'

import TextField from '@material-ui/core/TextField';
import {Select} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

export default function SignUpGuest(){

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    
    return (
        <div className="container">
            <img className="img-logo" src={Logo} alt="logo"/>
            <div className="form">

                <section>
                    <div className="input-name">
                        <TextField className="text-field" id="outlined-basic" label="Nome Completo" variant="outlined" />
                    </div>
                    <div className="input-country"> 
                    <FormControl variant="outlined" >
                        <InputLabel id="demo-simple-select-outlined-label">País</InputLabel>
                        <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" 
                                value={age} onChange={handleChange} label="País">
                            <MenuItem >Ten</MenuItem>
                            <MenuItem >Twenty</MenuItem>
                            <MenuItem >Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    </div>  
                </section>

                <section>
                    <div className="input-email">
                        <TextField className="text-field" id="outlined-basic" label="E-mail" variant="outlined" />
                    </div>
                    <div className="input-state"> 
                        <FormControl variant="outlined" >
                            <InputLabel id="demo-simple-select-outlined-label">Estado</InputLabel>
                            <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" 
                                    value={age} onChange={handleChange} label="Estado">
                                <MenuItem >Ten</MenuItem>
                                <MenuItem >Twenty</MenuItem>
                                <MenuItem >Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>  
                </section>

                <section>
                    <div className="input-birth-date">
                        <TextField className="text-field" id="outlined-basic" label="Data de Nascimento" variant="outlined" />
                    </div>
                    <div className="input-city"> 
                        <FormControl variant="outlined" >
                            <InputLabel id="demo-simple-select-outlined-label">Cidade</InputLabel>
                            <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" 
                                    value={age} onChange={handleChange} label="Cidade">
                                <MenuItem >Ten</MenuItem>
                                <MenuItem >Twenty</MenuItem>
                                <MenuItem >Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>  
                </section>

                <section>
                    <div className="input-sex">
                        <FormControl variant="outlined" >
                            <InputLabel id="demo-simple-select-outlined-label">Sexo</InputLabel>
                            <Select className="text-field" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" 
                                    value={age} onChange={handleChange} label="Sexo">
                                <MenuItem >Ten</MenuItem>
                                <MenuItem >Twenty</MenuItem>
                                <MenuItem >Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="input-password"> 
                        <TextField  className="text-field" id="outlined-basic" label="Senha" variant="outlined" />
                    </div>  
                </section>

                <section>
                    <div className="input-institution">
                        <TextField className="text-field" id="outlined-basic" label="Instituição/Clube" variant="outlined" />
                    </div>
                    <div className="input-repeat-password"> 
                        <TextField  className="text-field" id="outlined-basic" label="Repetir senha" variant="outlined" />
                    </div>  
                </section>

            </div>
            <section>
                <div className="botao">
                    <ButtonFilled route="/" text="Cancelar"/>
                </div>

                <div className="botao">
                    <ButtonFilled route="/" text="Cadastrar"/>
                </div>
            </section>
            
        </div>
    )
}