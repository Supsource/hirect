import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Posts from './pages/Posts'
import './App.css'

// import { FaSuitcase } from 'react-icons/fa';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/jobs' element={<Posts/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
