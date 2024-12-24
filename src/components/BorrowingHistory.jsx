import React from "react";
import "./BorrowingHistory.css";
const BorrowingHistory = ({ history, onRemove }) => {
  return (
    <div className="borrowing-history">
      <h2>Borrowing History</h2>
      {history.length === 0 ? (
        <p>No books borrowed yet.</p>
      ) : (
        <ul>
          {history.map((item) => (
            <li key={item.id || item.etag}>
              {item.volumeInfo.title} - {item.volumeInfo.authors.join(", ")}
              <button className="remove-btn" onClick={() => onRemove(item)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default BorrowingHistory;
