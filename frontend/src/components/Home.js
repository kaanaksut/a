import React, { useState } from 'react';
import './Home.css';
import Recents from './Recents';  // Recents bileşenini ekliyoruz
import Agenda from './Agenda'; // Agenda bileşenini ekliyoruz
import MyWork from './MyWork'; // MyWork bileşenini ekliyoruz
import AssignedToMe from './AssignedToMe'; // AssignedToMe bileşenini ekliyoruz

const Home = () => {
  const [projects, setProjects] = useState([]); // Projeleri state'e ekliyoruz

  return (
    <div className="home-page">
      <h1>Good evening, Kaan</h1>
      <div className="grid-container">
        {/* Recents bileşenini burada kullan */}
        <Recents projects={projects} setProjects={setProjects} />  
        
        {/* Agenda bileşenini burada kullan */}
        <Agenda />  

        {/* My Work bileşenini burada kullan */}
        <MyWork />

        {/* Assigned to Me bileşenini burada kullan */}
        <AssignedToMe />
      </div>
    </div>
  );
};

export default Home;
