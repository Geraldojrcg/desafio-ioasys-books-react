import api from "./api";

export type Book = {
  authors: string[];
  title: string;
  description: string;
  pageCount: number;
  category: string;
  imageUrl: string;
  language: string;
  isbn10: string;
  isbn13: string;
  publisher: string;
  published: number;
  id: string;
};

type ApiListBook = {
  data: Book[];
  page: number;
  totalPages: number;
  totalItems: number;
};

export default async (page = 1): Promise<ApiListBook> => {
  const response = await api.get(`/books?page=${page}&amount=${12}`);
  return response.data;
};
