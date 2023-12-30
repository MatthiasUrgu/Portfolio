import './App.scss'
import { useState,useEffect } from 'react'
import MainContent from './components/MainContent/MainContent';
import SecondContent from './components/SecondContent/SecondContent';
function App() {

  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setSpotlightPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



  return (
    <div className='container'>
      <div className="spotlight" style={{ left: spotlightPosition.x, top: spotlightPosition.y }}></div>
      <section className="content">
        <MainContent/>
        <SecondContent />
      </section>
    </div>
  )
}

export default App
