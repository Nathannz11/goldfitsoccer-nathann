import React from 'react'
import { useContext } from 'react'
import Logo from '../../_assets/logo.png'
import './styles.css'

import * as yup from 'yup';
import { useFormik } from "formik";
import AuthContext from '../../context/AuthContext';

import {
  Button,
  TextField
} from "@material-ui/core/";

// TODO: mudar cor do botão para verde utilizando temas da material-ui

const validationSchema = yup.object({
  username: yup
    .string('Forneça o usuário de acesso')
    .min(5, 'O usuário deve ter no mínimo cinco caracteres')
    .required('Campo obrigatório'),
  password: yup
    .string('Forneça a senha de acesso')
    .min(5, 'A senha deve ter no mínimo cinco caracteres')
    .required('Campo obrigatório'),
});

export default function LoginCreditals() {
  let { loginUser } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },

    validationSchema: validationSchema,
    onSubmit: () =>{
      formik.handleSubmit();
      alert('Cadastro realizado com sucesso')
    }
  });

  return (
    <div className='flex-box-container'>
      <div className="container-login-credentials">
        <img className="img-logo-login-credentials" src={Logo} alt="logo" />

        <form className="form-credentials" onSubmit={loginUser}>
          <div className="login-form-input">
            <TextField
              id="username-field"
              name="username"
              label="Usuário"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              color="secondary"
              className="text-field"
              variant="outlined"
            />
          </div>

          <div className="login-form-input">
            <TextField
              id="password-field"
              name="password"
              type='password'
              label="Senha"
              color="secondary"
              className="text-field"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>

          <Button color="primary" variant="contained" fullWidth type="submit">
            Entrar
          </Button>
        </form>

        {/* <p className="forgot-password">Esqueceu a senha?</p>
      <div className="login-recover">
        <Link to="\" >Clique aqui </Link>
        <p>para recuperar</p>
      </div> */}
      </div>
    </div>
  )
}