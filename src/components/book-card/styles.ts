import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  background-color: white;
  width: 20%;
  height: 160px;
  margin: 15px;
  flex-direction: row;
  padding: 19px;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  cursor: pointer;

  :hover {
    box-shadow: 1px 40px 70px rgba(84, 16, 95, 0.2);
  }

  @media (max-width: 800px) {
    width: 100%;
  }

  @media only screen and (min-width: 1300px) and (max-width: 1600px) {
    width: 19%;
  }
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    margin: 0px;
  }
`;

export const Image = styled.img`
  width: 100px;
  margin-right: 16px;
`;

export const Title = styled.p`
  font-family: Heebo;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
  margin-bottom: 5px !important;
`;

export const Author = styled.p`
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #ab2680;
`;

export const OtherInfo = styled.p`
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #999999;
`;
