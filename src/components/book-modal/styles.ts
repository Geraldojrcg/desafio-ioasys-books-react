import styled from "styled-components";

export const custonModalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0, 0.3)",
  },
  content: {
    backgroundColor: "rgba(0,0,0, 0.3)",
    width: "100%",
    height: "200%",
    border: "none",
    top: "0%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Card = styled.div`
  display: flex;
  background-color: white;
  margin: 15px;
  flex-direction: row;
  padding: 2%;
  border-radius: 4px;
  position: absolute;
  width: 40% !important;
  left: 28%;
  top: 55% !important;
  max-height: 500px;

  @media (max-width: 800px) {
    width: 70% !important;
    left: 6%;
    top: 54% !important;
    flex-direction: column;
    padding: 5%;
    max-height: none;
  }
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto !important;
  padding-right: 40px;

  p {
    margin: 0px;
    padding-right: 0px;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ab2680;
    border-radius: 20px;
  }

  @media (max-width: 800px) {
    overflow-y: hidden !important;
    margin-bottom: 2%;
  }
`;

export const Image = styled.img`
  width: 40%;
  margin-right: 5%;
  filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 7%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  left: 95%;
  top: 51% !important;

  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 10px;

  i {
    font-size: 15px;
  }

  :hover {
    filter: grayscale(0.8) invert(0.8);
  }

  @media (max-width: 800px) {
    left: 80%;
    top: 51% !important;
  }
`;

export const Content = styled.div`
  margin-bottom: 15% !important;
`;

export const Title = styled.p`
  font-family: Heebo;
  font-weight: bold;
  font-size: 28px;
  line-height: 40px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #333333;
`;

export const Subtitle = styled.p`
  font-family: Heebo;
  font-weight: bold;
  font-size: 14px;
  line-height: 28px;
  text-transform: uppercase;
  color: #333333;
`;

export const Author = styled.p`
  font-family: Heebo;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #ab2680;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoLabel = styled.p`
  font-family: Heebo;
  font-weight: bold;
  font-size: 14px;
  line-height: 28px;
  color: #333333;
`;

export const InfoText = styled.p`
  font-family: Heebo;
  font-size: 14px;
  line-height: 28px;
  color: #999999;
`;
