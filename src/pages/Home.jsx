import Navbar from "../component/Navbar";
import Jobscard from "../component/Jobscard";
import Footer from '../component/Footer'
import Search from '../component/Search';
import '../App.css'
import Main from "../component/Main";

// import { FaSuitcase } from 'react-icons/fa';

function Home() {
  return (
    <>
      <div className="container mx-auto p-5">
        <div className="">
          <Navbar />
          <Main/>
          <Search/>
        </div>
        <div className="">
          <Jobscard />
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default Home;
