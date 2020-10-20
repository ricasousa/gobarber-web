import styled from 'styled-components';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
