import React from "react";
import Modal from "react-modal";
import { Book } from "../../services/book";
import {
  custonModalStyles,
  BookInfo,
  Card,
  CloseButton,
  Image,
  Title,
  Author,
  Subtitle,
  InfoRow,
  InfoLabel,
  InfoText,
  Content,
} from "./styles";

type BookModalProps = {
  book?: Book;
  onRequestClose?: () => void;
};

/**
 * Componente que renderiza o modal com informações de um livro
 * @param BookModalProps
 */
const BookModal: React.FC<BookModalProps> = ({ book, onRequestClose }) => (
  <Modal
    isOpen={!!book}
    onRequestClose={onRequestClose}
    style={custonModalStyles}
    ariaHideApp={false}
  >
    <div>
      <CloseButton type="button" onClick={onRequestClose}>
        <i className="fal fa-times" />
      </CloseButton>
      <Card>
        <Image src={book?.imageUrl} />
        <BookInfo>
          <Content>
            <Title>{book?.title}</Title>
            {book?.authors ? <Author>{book?.authors.join(", ")}</Author> : null}
          </Content>
          <Content>
            <Subtitle>Informações</Subtitle>
            <InfoRow>
              <InfoLabel>Páginas</InfoLabel>
              <InfoText>{book?.pageCount}</InfoText>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Editora</InfoLabel>
              <InfoText>{book?.publisher}</InfoText>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Publicação</InfoLabel>
              <InfoText>{book?.published}</InfoText>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Idioma</InfoLabel>
              <InfoText>{book?.language}</InfoText>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Categoria</InfoLabel>
              <InfoText>{book?.category}</InfoText>
            </InfoRow>
            <InfoRow>
              <InfoLabel>ISBN-10</InfoLabel>
              <InfoText>{book?.isbn10}</InfoText>
            </InfoRow>
            <InfoRow>
              <InfoLabel>ISBN-13</InfoLabel>
              <InfoText>{book?.isbn13}</InfoText>
            </InfoRow>
          </Content>
          <Content>
            <Subtitle>Resenha da Editora</Subtitle>
            <InfoText>
              <i className="fas fa-quote-left" style={{ fontSize: 20 }} />{" "}
              {book?.description}
            </InfoText>
          </Content>
        </BookInfo>
      </Card>
    </div>
  </Modal>
);

export default BookModal;
