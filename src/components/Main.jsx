import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import ChildImg from "../assets/images/bg2.png";
import BorrowingHistory from "./BorrowingHistory";
import axios from "axios";
import Card from "./Card";
import Footer from "./Footer";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setbookData] = useState([]);
  const [borrowingHistory, setBorrowingHistory] = useState([]);

  const addToBorrowingHistory = (item) => {
    setBorrowingHistory((prevHistory) => {
      const isAlreadyBorrowed = prevHistory.some(
        (borrowedBook) => borrowedBook.id === item.id
      );
      if (!isAlreadyBorrowed) {
        return [...prevHistory, item];
      }
      return prevHistory;
    });
  };

  const removeFromBorrowingHistory = (itemToRemove) => {
    setBorrowingHistory((prevHistory) =>
      prevHistory.filter((item) => item.id !== itemToRemove.id)
    );
  };
  const searchBook = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyCGbQC_Sbvnvo0A1jtEkvQgWTFvhQScfS8" +
            "&maxResults=40"
        )
        .then((res) => setbookData(res.data.items))
        .catch((err) => console.log(err));
      console.log(bookData.volumeInfo);
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            Welcome to my book Store,where
            <br />
            knowledge and imagination come alive.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <button>
              <IoSearch />
            </button>
          </div>
          <img src={ChildImg} alt="" />
        </div>
      </div>
      <div className="container">
        {
          <Card
            book={bookData}
            addToBorrowingHistory={addToBorrowingHistory}
            borrowingHistory={borrowingHistory}
            setBorrowingHistory={setBorrowingHistory}
          />
        }
      </div>
      <BorrowingHistory
        history={borrowingHistory}
        onRemove={removeFromBorrowingHistory}
      />
      <Footer />
    </>
  );
};

export default Main;
