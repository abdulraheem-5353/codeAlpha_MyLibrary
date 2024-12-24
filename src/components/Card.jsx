import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ book, borrowingHistory, setBorrowingHistory }) => {
  console.log(book);
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();

  // Add to existing history
  const addToBorrowingHistory = (item) => {
    setBorrowingHistory([...borrowingHistory, item]);
  };

  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;

        if (thumbnail !== undefined) {
          return (
            <div key={item.id}>
              <div
                className="card"
                onClick={() => {
                  setShow(true);
                  setBookItem({ ...item });
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">&#8377;3245</p>
                </div>
              </div>
              <button
                className="borrow-btn"
                onClick={() => addToBorrowingHistory(item)}
              >
                Borrow
              </button>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </div>
          );
        }
        return null; // For cases where `thumbnail` is undefined
      })}
    </>
  );
};

export default Card;
