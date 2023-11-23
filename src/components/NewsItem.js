import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, url, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img className="card-img-top" src={imageUrl} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {date}
            </small>
          </p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
