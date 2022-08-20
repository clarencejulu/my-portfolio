import React from 'react';
import {useNavigate} from 'react-router-dom';
import { topFunction } from './Portfolio';

export const Home = () => {
  const navigate = useNavigate();
  const toPortfolioPage = () => {
    navigate("/portfolio");
    topFunction();
  }
  return (
    <section id='home'>
        <div className='aboutme-image' />
        <div className='aboutme-info'>
            <h1>About Me</h1>
            <p>My name is Clarence Onumajulu and I am a Frontend developer. I am ardent about working on personal projects to implement technologies I am proficient in or learning. I have posted a few of them for your viewing. Feel free to reach out to me for anything...</p>
            <button onClick={toPortfolioPage}>Go to Portfolio</button>
        </div>
    </section>
  )
}
