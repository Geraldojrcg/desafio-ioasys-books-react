import styled from "styled-components";
import background from "../../assets/background-login.png";

export const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  padding-left: 10%;
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const LoginHeader = styled.div`
  display: flex;
  margin-left: 15px;
`;

export const LoginBody = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  margin-top: 2%;

  @media (max-width: 800px) {
    width: 90%;
    margin-top: 10%;
  }
`;

export const Input = styled.input`
  border: none;
  background: rgba(0, 0, 0, 0);
  font-size: 20px;
  outline: none;
  color: white !important;
  width: 100%;
`;

export const Button = styled.button`
  background: white;
  border-radius: 44px;
  font-family: Heebo;
  font-weight: bold;
  line-height: 20px;
  color: #b22e6f;
  border: none;
  font-size: 16px;
  outline: none;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  height: 40px;
  cursor: pointer;

  :hover {
    background: rgba(255, 255, 255, 0.6);
  }
`;

export const InputLabel = styled.p`
  font-family: Heebo;
  font-weight: normal;
  font-size: 16px;
  line-height: 5px;
  color: white;
  opacity: 0.5;
`;

export const InputGroup = styled.div`
  margin: 10px;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);
  border-radius: 4px;
  border: none;
  padding: 10px;
  padding-top: 0px;
  padding-left: 15px;
`;

export const InputGroupSenha = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  font-size: 16px;
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);
  border-radius: 4px;
  border: none;
  padding: 10px;
  padding-top: 0px;
  padding-left: 15px;
  justify-content: space-between;

  .button {
    display: flex;
    align-items: center;
    padding-top: 10px;
  }
`;

export const ErrorMessage = styled.div`
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 4px;
  margin-top: 5%;
  margin-left: 10px;
  width: 80%;
  padding: 20px;

  font-family: Heebo;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: white;

  :before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid rgba(255, 255, 255, 0.4);
    right: 80%;
    top: -20px;
  }
`;
