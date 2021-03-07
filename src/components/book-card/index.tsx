import React from "react";
import { Book } from "../../services/book";
import { Author, BookInfo, Card, Image, OtherInfo, Title } from "./styles";

type BookCardProps = {
  book: Book;
  onClick?: () => void;
};

/**
 * Componente que renderiza o card com informações abreviadas de um livro
 * @param BookCardProps
 */
const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => (
  <Card onClick={onClick}>
    <Image src={book.imageUrl} alt="book" />
    <BookInfo>
      <div>
        <Title>{book.title}</Title>
        {book.authors
          ? book.authors.map((author) => <Author key={author}>{author}</Author>)
          : null}
      </div>
      <div>
        <OtherInfo>{book.pageCount}</OtherInfo>
        <OtherInfo>{book.publisher}</OtherInfo>
        <OtherInfo>{book.published}</OtherInfo>
      </div>
    </BookInfo>
  </Card>
);

export default BookCard;
