//firebase import
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Image from "../assets/trashcan.svg";

export default function BookList({ books }) {
  const handleClick = async (id) => {
    await deleteDoc(doc(db, "books", id));
  };

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}{" "}
            <img
              src={Image}
              alt="trashcan"
              className="trash-can"
              onClick={() => handleClick(book.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
