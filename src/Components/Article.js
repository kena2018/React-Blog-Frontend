import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { BsHandThumbsUp } from "react-icons/bs";
import MoreFromSiren from "./MoreFromSiren";
import axios from 'axios';

const Article = () => {

  const[rows, setRows] = useState([])
    const { Id } = useParams()
    const { cat } = useParams()

  useEffect(()=>{
        axios.get(`https://react-blog-backend-app.herokuapp.com/api/blog/${cat}`).then(
            data => setRows(data.data)
        )
  },[cat])

  return (
    <div>
      {rows
        .filter((value) => value.ID === Id && value.Category === cat)
        .map((val, index) => (
          <div className="articleContainer" key={index}>
            <p className="articleTitle">{val.Title}</p>
            
            <img src={val.Image} alt="" className="articleImg" />
            <p>
              {val.Body} {val.Body}
            </p>
            <p>Let's talk about them,</p>
            <p>
              {val.Body} {val.Body}
            </p>
            <p>
              <BsHandThumbsUp />
              &emsp;
              <b>
                <i>9.5k Likes</i>
              </b>
            </p>
            <br />
            <hr />
            <div className="articleProfileBox">
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
            <hr />
          </div>
        ))}
      <MoreFromSiren rows={rows} />
    </div>
  );
};

export default Article;