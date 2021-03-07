import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 100px;
  height: fit-content;
`;

export const Title = styled.p<{ color: string }>`
  font-family: Heebo;
  font-weight: 300;
  font-size: 28px;
  line-height: 40px;
  color: ${(props) => props.color || "white"};
  margin: 0px;
  margin-left: 20px;
`;
