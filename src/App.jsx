import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";
import Landing from "./component/LandingPage/Landing";

function App() {
  // const [modal, setModal] = useState(false);
  // const showModal = () => {
  //   setModal(!modal);
  // };

  return (
    <div className="bg-[#F4F3FF] h-screen w-full font-[Poppins]">
      <Landing />
    </div>
  );
}

export default App;