import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
/* eslint-disable */

const TopPost = ({rows}) => {
  const { cat } = useParams();
  return (
    <div>
      <p className="mainCategory">Top Post</p>
      <hr className="mainCategoryHr" />
      <div>
        {rows
          .filter((value) => value.ID == 1 && value.Category === cat)
          .map((val, index) => (
            <div key={index}>
              <Link to={`/article/${val.Category}/${val.ID}`}>
                <div className="LatestContainer">
                  <img src={val.Image} alt="img" className="LatestImg" />
                  <div className="flexBox">
                    <div>
                      <p className="blogTitle">{val.Title}</p>
                      <p className="blogCategory">{val.Category}</p>
                    </div>
                  </div>
                </div>
                <hr className="blogLine" />
              </Link>
            </div>
          ))}
        {rows
          .filter(
            (value) => value.ID >= 4 && value.ID <= 5 && value.Category === cat
          )
          .map((val, index) => (
            <div key={index}>
              <Link to={`/article/${val.Category}/${val.ID}`}>
                <div className="SubContainer">
                  <img src={val.Image} alt="img" className="SubImg" />
                  <div>
                    <p className="blogTitle">{val.Title}</p>
                    <p className="blogCategory">{val.Category}</p>
                  </div>
                </div>
                <hr className="blogLine" />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopPost;