import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TopPost from "./TopPost";
import Advertisement from "./Advertisement";
import { Link } from "react-router-dom";
import axios from 'axios';

const AllCategory = () => {

  const { cat } = useParams()

    const [load, setLoad] = useState(true)
    const[rows, setRows] = useState([])

    useEffect(()=>{
        axios.get(`https://react-blog-backend-app.herokuapp.com/api/blog/${cat}`).then(
            data => setRows(data.data)
        )
    },[cat])

  return (
    <div className="blogBody">
      <div>
        <p className="mainCategory">{cat}</p>
        <hr className="mainCategoryHr" />

        {rows
          .filter(
            (value) =>
              (load ? value.ID <= 6 : value.ID <= 8) && value.Category === cat
          )
          .map((val, index) => (
            <div key={index}>
              <Link to={`/article/${val.Category}/${val.ID}`}>
                <div className="blogContainer">
                  <img src={val.Image} className="blogImg" alt="" />
                  <div className="blogContent">
                    <p className="blogTitle">{val.Title}</p>
                    <p className="blogDetail">{val.Body}</p>
                    <p className="blogCategory">{val.Category}</p>
                  </div>
                </div>
              </Link>
              <hr className="blogLine" />
            </div>
          ))}
        <div className="btn">
          <button onClick={() => setLoad(!load)} className="btn">
            {load ? "Load More" : "View Less"}
          </button>
        </div>
      </div>
      <div>
        <TopPost rows= {rows}/>
        <Advertisement />
      </div>
    </div>
  );
};

export default AllCategory;