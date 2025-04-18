import NavComponent from './Components/NavComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllCategory from './Components/AllCategory';
import Home from './Components/Home';
import Article from './Components/Article';
import './style.css'

function App() {
  return (
      <div className="App">
        <Router>
        <NavComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:cat" element={<AllCategory />} />
            <Route path="/article/:cat/:Id" element={<Article />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;