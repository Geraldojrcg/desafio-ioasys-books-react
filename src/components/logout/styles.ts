import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.p`
  font-family: Heebo;
  font-size: 18px;
  color: #333333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  margin-top: 2px;
  margin-right: 20px;

  b {
    margin-left: 7px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: 0.5px solid gray;
  border-radius: 40px;
  padding: 10px;

  i {
    font-size: 20px;
  }

  :hover {
    filter: grayscale(0.8) invert(0.8);
  }

  @media (max-width: 800px) {
    margin-top: -5px !important;
    margin-bottom: 5px !important;

    :hover {
      filter: none;
    }
  }
`;
