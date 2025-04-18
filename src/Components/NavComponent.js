import React, {useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
/* eslint-disable */

const NavComponent = () => {
  const[rows, setRows] = useState([])

    useEffect(()=>{
        axios.get(`https://react-blog-backend-app.herokuapp.com/api/blog`).then(
            data => setRows(data.data)
        )
    },[])
  return (
    <div>
      <div className="heading">
        <p className="vertical">The</p>
        <p className="horizontal">Siren</p>
      </div>
      <div className="nav-links">
        <Link to="/" className="link">
          Home
        </Link>
        {rows
          .filter((value) => value.ID == 1)
          .map((val, index) => (
            <Link to={`${val.Category}`} className="link" key={index}>
              {val.Category}
            </Link>
          ))}
      </div>
      <hr className="hr-line" />
    </div>
  );
};
export default NavComponent;