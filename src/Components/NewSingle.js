import React from "react";

const NewSingle = ({ item }) => (
  <div className="col s4">
    <div className="card medium">
      <div className="card-image">
        <img src={item.urlToImage} alt={item.title} />
        <span className="card-title">{item.source.name}</span>
      </div>
      <div className="card-content">
        <p>{item.title}</p>
      </div>
      <div className="card-action">
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          style={{ color: "" }}
        >
          full article
        </a>
      </div>
    </div>
  </div>
);

export default NewSingle;
