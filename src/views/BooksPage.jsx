import Book from "../components/Book.jsx";
import Header from "../components/Header.jsx";
import { useSelector } from "react-redux";
import { selectBooks } from "../store/booksSlice.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { selectUsers } from "../store/usersSlice.js";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../store/booksSlice.js";

function BooksPage() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks).books;
  const pageTitle = "📖 Book List with Router, Redux & Firebase";
  const bookStatus = useSelector(selectBooks).status;

  useEffect(() => {
    if (bookStatus == "idle") {
      dispatch(fetchBooks());
      console.log("fetched books", books);
    }
  }, []);

  return (
    <>
      <div className="container">
        <Header pageTitle={pageTitle} />
        <div className="books-container">
          <div className="books-list">
            {books.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BooksPage;
