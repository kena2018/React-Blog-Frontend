import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
/* eslint-disable */

const MoreFromSiren = () => {
  const[rows, setRows] = useState([])

  useEffect(()=>{
        axios.get(`https://react-blog-backend-app.herokuapp.com/api/blog`).then(
            data => setRows(data.data)
        )
  },[])

  return (
    <div className="MoreFromSirenContainer">
      <p className="mainCategory">More From The Siren</p>
      <p className="hr-2" />
      <div className="TheLatestBox">
        {rows
          .filter(
            (value) =>
              value.ID == "2" &&
              (value.Category === "Food" ||
                value.Category === "Fitness" ||
                value.Category === "Tourism")
          )
          .map((val, index) => (
            <Link
              to={`/article/${val.Category}/${val.ID}`} key={index}
              className="TheLatestContent"
            >
              <p className="related">Related Reads</p>
              <img src={val.Image} className="TheLatestImg" alt="" />
              <p className="title">{val.Title}</p>
              <p className="body">
                <strong>{val.Category}</strong> / {val.Date}
              </p>
              <br />
              <div className="articleProfileBox1">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                  alt="userImg"
                  className="articleProfileImg"
                />
                <div>
                  <p>Written By</p>
                  <p>
                    &emsp;<b>{val.Author}</b>
                  </p>
                  <p>&emsp;{val.Date}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default MoreFromSiren;