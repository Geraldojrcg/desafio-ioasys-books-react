import React, { useState } from "react";
import {
  Container,
  Content,
  LoginHeader,
  LoginBody,
  InputGroup,
  InputGroupSenha,
  Input,
  InputLabel,
  Button,
  ErrorMessage,
} from "./styles";
import validEmail from "../../utils/validators";
import { login } from "../../services/auth";
import TileLogo from "../../components/tile-logo";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  async function handlelogin() {
    if (validEmail(email)) {
      const response = await login(email.trim(), senha.trim());
      if (response.errors) {
        setError(response.errors.message);
      }
    } else {
      setError("E-mail inválido.");
    }
  }

  return (
    <Container>
      <Content>
        <LoginHeader>
          <TileLogo tintColor="white" title="Books" />
        </LoginHeader>
        <LoginBody>
          <InputGroup>
            <InputLabel>E-mail</InputLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          </InputGroup>
          <InputGroupSenha>
            <div>
              <InputLabel>Senha</InputLabel>
              <Input
                type="password"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className="button">
              <Button type="button" onClick={handlelogin}>
                Entrar
              </Button>
            </div>
          </InputGroupSenha>
          {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        </LoginBody>
      </Content>
    </Container>
  );
};

export default Login;
