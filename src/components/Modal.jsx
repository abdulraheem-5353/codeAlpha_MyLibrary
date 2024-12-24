import React from "react";
import { FaTimes } from "react-icons/fa";

import "./modal.css";

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <FaTimes />
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
          </div>
          <div className="info">
            <h1>{item.volumeInfo.title}</h1>
            <h3>Author: {item.volumeInfo.authors}</h3>
            <h4>
              {item.volumeInfo.publisher} :
              <span>{item.volumeInfo.publishedDate}</span>
            </h4>
            <br />
            <a href={item.volumeInfo.previewLink}>
              <button className="Btn">More</button>
            </a>
          </div>
          <h5 className="description">{item.volumeInfo.description}</h5>
        </div>
      </div>
    </>
  );
};

export default Modal;
