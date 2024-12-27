import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";
import Landing from "./component/LandingPage/Landing";
import SplashScreen from "./component/Splash/SplashScreen";
import SignUp from "./component/SignUp/SignUp";

function App() {
  // const [modal, setModal] = useState(false);
  // const showModal = () => {
  //   setModal(!modal);
  // };

  return (
    <div className="bg-[#F4F3FF] h-screen w-full font-[Poppins]">
      <Landing />
      {/* <SplashScreen /> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;