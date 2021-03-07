import React, { useEffect, useState } from "react";
import {
  Container,
  Content,
  HomeBody,
  HomeFooter,
  HomeHeader,
  Button,
  ButtonGroup,
} from "./styles";
import TileLogo from "../../components/tile-logo";
import Logout from "../../components/logout";
import getBooks, { Book } from "../../services/book";
import BookCard from "../../components/book-card";
import BookModal from "../../components/book-modal";

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book>();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    async function listBooks() {
      const response = await getBooks(page);
      if (response) {
        setBooks(response.data);
        setPage(response.page);
        setPages(Math.ceil(response.totalPages));
      }
    }
    listBooks();
  }, [page]);

  return (
    <>
      <Container>
        <Content>
          <HomeHeader>
            <TileLogo tintColor="black" title="Books" />
            <Logout />
          </HomeHeader>
          <HomeBody>
            {books
              ? books.map((book) => (
                  <BookCard
                    book={book}
                    key={book.id}
                    onClick={() => setSelectedBook(book)}
                  />
                ))
              : null}
          </HomeBody>
          <HomeFooter>
            <p>
              Página <b>{page}</b> de <b>{pages}</b>
            </p>
            <ButtonGroup>
              <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
                <i className="fal fa-chevron-circle-left" />
              </Button>
              <Button
                disabled={page === pages}
                onClick={() => setPage(page + 1)}
              >
                <i className="fal fa-chevron-circle-right" />
              </Button>
            </ButtonGroup>
          </HomeFooter>
        </Content>
      </Container>
      <BookModal
        book={selectedBook}
        onRequestClose={() => setSelectedBook(undefined)}
      />
    </>
  );
};

export default Home;
