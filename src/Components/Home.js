import React,{useState, useEffect} from 'react';
import TopHome from "./Inside-Home/TopHome";
import TheLatest from "./Inside-Home/TheLatest";
import LatestArticles from "./Inside-Home/LatestArticles";
import LatestStories from "./Inside-Home/LatestStories";
import axios from 'axios';

const Home = () => {
  const[rows, setRows] = useState([])

    useEffect(()=>{
        axios.get(`https://react-blog-backend-app.herokuapp.com/api/blog`).then(
            data => setRows(data.data)
        )
    },[])

  return (
    <div>
      <TopHome rows={rows} />
      <TheLatest rows={rows} />
      <LatestArticles rows={rows} />
      <LatestStories rows={rows} />
    </div>
  );
};

export default Home;