import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react'

import PrivateRoutes from '../utils/PrivateRoutes';
import Login from '../pages/login';
import LoginCreditals from '../pages/login-credentials';
import SignUp from '../pages/sign-up';
import Home from '../pages/home';
import SignUpAthlete from '../pages/sign-upAthlete';
import SignUpGuest from '../pages/sign-upGuest';
import FormAthlete1 from '../pages/formAthlete1';
import ModalConfirmation from '../pages/modal-confirmation';
import AthleteData from '../pages/athleteData';
import FormAthlete2 from '../pages/formAthlete2';
import FormAthlete3 from '../pages/formAthlete3';
import FormAthlete4 from '../pages/formAthlete4';
import FormAthlete5 from '../pages/formAthlete5';
import FormAthlete6 from '../pages/formAthlete6';
import EvaluateAthlete1 from '../pages/evaluateAthlete1';
import EvaluateAthlete2 from '../pages/evaluateAthlete2';
import EvaluateAthlete3 from '../pages/evaluateAthlete3';
import EvaluateAthlete4 from '../pages/evaluateAthlete4';
import SignUpAthlete2 from '../pages/sign-upAthlete2';
import Index from '../pages/index';
import GraphSportsPotential from '../pages/graphSportsPotencial';
import ModalConfirmationRegistry from '../pages/modal-atleta';
import SelectionMenu from '../pages/menu';
import { AuthProvider } from '../context/AuthContext';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <AuthProvider>
                    <Route path="/" exact component={Index}/>
                    <Route path="/login-as" component={Login}/>
                    <Route path="/login-credentials" component={LoginCreditals}/>
                    <Route path="/sign-up" component={SignUp}/>
                    <Route path="/sign-upGuest" component={SignUpGuest}/>
                    <Route path="/modal" component={ModalConfirmation}/>
                    <PrivateRoutes path="/menu" component={SelectionMenu}/>
                    <PrivateRoutes path="/cadastro-atleta" component={SignUpAthlete}/>
                    <PrivateRoutes path="/cadastro-sucesso" component={ModalConfirmationRegistry}/>
                    <PrivateRoutes path="/cadastro-atleta-2" component={SignUpAthlete2}/>
                    <PrivateRoutes path="/evaluateAthlete1" component={EvaluateAthlete1}/>
                    <PrivateRoutes path="/evaluateAthlete2" component={EvaluateAthlete2}/>
                    <PrivateRoutes path="/evaluateAthlete3" component={EvaluateAthlete3}/>
                    <PrivateRoutes path="/evaluateAthlete4" component={EvaluateAthlete4}/>
                    <PrivateRoutes path="/formAthlete1" component={FormAthlete1}/>
                    <PrivateRoutes path="/formAthlete2" component={FormAthlete2}/>
                    <PrivateRoutes path="/formAthlete3" component={FormAthlete3}/>
                    <PrivateRoutes path="/formAthlete4" component={FormAthlete4}/>
                    <PrivateRoutes path="/formAthlete5" component={FormAthlete5}/>
                    <PrivateRoutes path="/formAthlete6" component={FormAthlete6}/>
                    <PrivateRoutes path="/avaliacao-potencial-esportivo" component={GraphSportsPotential} />
                    <PrivateRoutes path="/dados-atleta" component={AthleteData} />
                    <PrivateRoutes path="/home" component={Home}/>
                </AuthProvider>
            </Switch>
        </BrowserRouter>
    );
}
