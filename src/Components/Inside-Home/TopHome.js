import React from "react";
import { Link } from "react-router-dom";
/* eslint-disable */

const TopHome = ({rows}) => {

  return (
    <div className="topHomeContainer">
      <div className="topHomeContainer-1">
        {rows
          .filter((value) => value.ID === "4" && value.Category === "Food")
          .map((val, index) => (
            <Link to={`/article/${val.Category}/${val.ID}`} key={index}>
              <img src={val.Image} alt="img" className="topHomeImg1" />
              <div className="topHomeContent1">
                <span className="topHomeTitle1">{val.Title}</span>
                <p className="SubTittle">
                  {val.Category} / {val.Date}
                </p>
              </div>
            </Link>
          ))}
      </div>

      <div className="topHomeContainer-2">
        {rows
          .filter(
            (value) =>
              value.ID == "6" &&
              (value.Category === "Technology" || value.Category === "Fitness")
          )
          .map((val, index) => (
            <div className="box" key={index}>
              <Link to={`/article/${val.Category}/${val.ID}`}>
                <img src={val.Image} className="topHomeImg2" alt="" />
                <div className="topHomeContent2"></div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopHome;