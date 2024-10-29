import React from "react";
import "./style.css";
import { useNavigate } from "react-router";
import {Animate} from 'react-simple-animate'
const Home = () => {

  const navigate = useNavigate();


  const handleNavigateToContactMePage = ()=>{
    navigate('/contact')
  }
  return (
    <>
    <section id="home" className="home">
      <div id="home__text-wrapper">
        <h1>
          Hi, I'm Abdullah
          <br />
          Front end Developer
        </h1>
      </div>
      <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform: 'translateY(550px)'
      }}
      end={{
        transform: 'translateX(0px)'
      }}

      >
      <div className="home__contact-me">
        <button onClick={handleNavigateToContactMePage}>Hire Me</button>
      </div>
      </Animate>
    </section>
    <div>
    <img src="/my-portfolio/public/logo512.png" alt="Myimage" className="img" />
    </div>
    </>

  );
};

export default Home;
