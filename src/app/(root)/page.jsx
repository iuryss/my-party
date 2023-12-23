'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const backgroundAnimated = keyframes `
	0% {
		background-position: 0% 150%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
  `;


const Container = styled.div`
  justify-content: center;
  align-items: center;
  background: linear-gradient(271deg, #ed4690, #5522cc, #64217c);
    background-size: 600% 600%;
//     -webkit-animation: ${backgroundAnimated} 11s ease infinite;
//     -moz-animation: ${backgroundAnimated} 11s ease infinite;
//     -o-animation: ${backgroundAnimated} 11s ease infinite;
//     animation: ${backgroundAnimated} 11s ease infinite;
// }

// @-webkit-keyframes ${backgroundAnimated} {
//     0%{background-position:0% 51%}
//     50%{background-position:100% 50%}
//     100%{background-position:0% 51%}
// }
// @-moz-keyframes ${backgroundAnimated} {
//     0%{background-position:0% 51%}
//     50%{background-position:100% 50%}
//     100%{background-position:0% 51%}
// }
// @-o-keyframes ${backgroundAnimated} {
//     0%{background-position:0% 51%}
//     50%{background-position:100% 50%}
//     100%{background-position:0% 51%}
// }
// @keyframes ${backgroundAnimated} {
//     0%{background-position:0% 51%}
//     50%{background-position:100% 50%}
//     100%{background-position:0% 51%}
  display: flex;
  flex-direction: column;
  padding: 30px 40em;
  height: 100vh;
  animation: ${backgroundAnimated} 8s ease infinite;
`;

const Logo = styled.div`
  color: #fff;
  max-width: 304px;
  font: 400 100px Montserrat, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Card = styled.div`
  border-radius: var(--Curvatura, 24px);
  background-color: var(--viva-up-white, #fff);
  align-self: stretch;
  display: flex;
  margin-top: 32px;
  flex-direction: column;
  padding: 70px 40px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;


const Title = styled.div`
  color: #a536cc;
  text-align: center;
  justify-content: center;
  border-bottom: 1px solid var(--viva-up-ref-neutral-variant-neutral-variant-90, #dae5e2);
  padding-bottom: 24px;
  font: 700 28px/36px Open Sans, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const InputLabel = styled.div`
  color: #000000;
  margin-top: 32px;
  background-color: #fff;
  font: 600 16px/24px Quicksand, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #64217c;
  margin-top: 8px;
  color: #64217c;
  padding: 16px;
  background-color: #fff;
  font: 600 16px/24px Quicksand, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const RememberPassword = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  gap: 20px;
  padding: 14px 14px 14px 4px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const CheckboxLabel = styled.label`
  color: var(--viva-up-sys-light-on-surface-variant, #718d88);
  align-items: start;
  flex-grow: 1;
  justify-content: center;
  padding: 4px 20px;
  font: 600 12px/16px Quicksand, sans-serif;

  @media (max-width: 991px) {
    padding-left: 9px;
  }
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const ForgotPassword = styled.div`
  color: #a536cc;
  margin: auto 0;
  font: 600 12px/16px Quicksand, sans-serif;
`;

const MessageError = styled.div`
  color: red;
  margin-top: 2em;
  font: 600 12px/16px Quicksand, sans-serif;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  gap: 16px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const Button = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid #64217c;
  flex-grow: 1;
  color: ${(props) => (props.primary ? "#fff" : "#a536cc")};
  background-color: ${(props) => (props.primary ? "#a536cc" : "transparent")};
  text-align: center;
  padding: 13px 0;
  font: 700 16px/20px Quicksand, sans-serif;
`;


export default function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const { push } = useRouter();
    // Simula a validação de credenciais
    if (username === 'Myparty' && password === 1234) {
      console.log('Login:', username, password )
      // Simula o login bem-sucedido
      setError('');
      push('/home');
    } else {
      setError('Credenciais inválidas');
      push('/home');
    }
  };

  return (
      <Container>
      <Logo>LOGO</Logo>
        <Card>
          <Title>Login</Title>
          <InputLabel></InputLabel>
          <Input type="text" placeholder="E-mail" value={username} onChange={(e) => setUsername(e.target.value)} />
          <InputLabel></InputLabel>
          <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <RememberPassword>
            <CheckboxLabel>
              <Checkbox type="checkbox" />
              Lembrar minha senha
            </CheckboxLabel>
            <ForgotPassword>Esqueci minha senha</ForgotPassword>
          </RememberPassword>
          <ButtonGroup>
            <Button>Cadastrar</Button>
            <Button primary onClick={handleLogin}>Acessar</Button>
          </ButtonGroup>
          {error && <MessageError>{error}</MessageError>}
      </Card>
    </Container>
  );
}