import styled from "styled-components";
import background1 from "../../assets/background-home1.png";
import background2 from "../../assets/background-home2.png";

export const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  background-image: url(${background1}), url(${background2});
  background-position: top left, top right;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  background-blend-mode: darken;

  @media (max-width: 800px) {
    background-image: none;
  }
`;

export const Content = styled.div`
  padding-left: 8%;
  padding-right: 8%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const HomeHeader = styled.div`
  display: flex;
  margin-left: 15px;
  margin-top: 3%;
  margin-bottom: 3%;
  width: 95%;
  justify-content: space-between;

  @media (max-width: 800px) {
    margin-top: 10%;
    margin-bottom: 10%;
  }
`;

export const HomeBody = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const HomeFooter = styled.div`
  display: flex;
  width: 96%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  p {
    margin-right: 20px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;

  [disabled] {
    color: rgba(0, 0, 0, 0.5);

    :hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const Button = styled.button`
  text-decoration: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px;
  background: transparent;

  i {
    font-size: 30px;
  }

  :hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;
