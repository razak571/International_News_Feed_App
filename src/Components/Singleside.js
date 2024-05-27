import React from "react";

const Singleside = ({ item }) => {
  return (
    <div>
      <div className="divider"></div>
      <a href={item.url} target="_blank" rel="noreferrer">
        <div className="section">
          <h5>{item.source.name}</h5>
          <p>
            {item.title} <i>By</i> {item.author}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Singleside;
