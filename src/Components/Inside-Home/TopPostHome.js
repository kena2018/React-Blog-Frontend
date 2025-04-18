import React from "react";
import { Link } from "react-router-dom";
/* eslint-disable */

const TopPostHome = ({rows}) => {
  return (
    <div>
      <p className="mainCategory">Top Post</p>
      <hr className="mainCategoryHr" />
      <div>
        {rows
          .filter((value) => value.ID === 4 && value.Category === "Fitness")
          .map((val,index) => (
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
            (value) =>
              (value.ID == 2 && value.Category === "Technology") ||
              (value.ID == 3 && value.Category === "Tourism") ||
              (value.ID == 7 && value.Category === "Bollywood")
          )
          .map((val, index) => (
            <div key={index}>
              <Link to={`/article/${val.Category}/${val.ID}`}>
                <div className="SubContainer">
                  <img src={val.Image} alt="" className="SubImg" />
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

export default TopPostHome;