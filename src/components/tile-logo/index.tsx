import React from "react";
import { Container, Image, Title } from "./styles";
import logoPreta from "../../assets/logo-preta.png";
import logoBranca from "../../assets/logo-branca.png";

type TileLogoProps = {
  tintColor: string;
  title: string;
};

/**
 * Componente que renderiza a logo da empresa junto com o nome do produto
 * Ex: ioasys books
 * @param TileLogoProps
 */
const TileLogo: React.FC<TileLogoProps> = ({ tintColor, title }) => (
  <Container>
    <Image src={tintColor === "black" ? logoPreta : logoBranca} alt="logo" />
    <Title color={tintColor}>{title}</Title>
  </Container>
);

export default TileLogo;
