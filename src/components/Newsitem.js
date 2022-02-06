import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { Title, description, imgurl, newsurl, author, date } = this.props;

    return (
      <div className="my-2">
        <div className="card ">
        
          <img
            src={
              !imgurl
                ? "https://c.ndtvimg.com/2022-01/pnb7ink8_uae-generic-unsplash-650_625x300_31_January_22.jpg"
                : imgurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {Title}
              
            </h5>
            <p className="card-text">{description}.... </p>
            <p className="card-text">
              <small className="text-muted">
                Post by {!author ? "Uknows author" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
