import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Container, Form, Background } from './style';

const SignIn: React.FC = () => (
  <Container>
    <Form>
      <img src={logo} alt="GoBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="/fogot">Esqueci minha senha</a>
      </form>

      <a href="/login">
        <FiLogIn />
        Criar conta
      </a>
    </Form>
    <Background />
  </Container>
);

export default SignIn;
