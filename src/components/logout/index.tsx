import React from "react";
import { getUser, logout, User } from "../../services/auth";
import { Button, Container, Title } from "./styles";

const user: User = getUser();
/**
 * Componente que renderiza o nome do usuário da sessão e o botão de logout
 */
const Logout: React.FC = () => (
  <Container>
    <Title>
      Bem vindo, <b>{user ? user.name : "Guest"}</b>
    </Title>
    <Button onClick={logout}>
      <i className="fal fa-sign-out" />
    </Button>
  </Container>
);

export default Logout;
