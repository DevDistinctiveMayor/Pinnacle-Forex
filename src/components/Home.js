import React from 'react';
import Header from './header';
import Section2 from './section2';
import Section3 from './section3';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <div id="section1"><Header /></div>
      <div id="section2"><Section2 /></div>
      <div id="section3"><Section3 /></div>
      <div id="section4"><Footer /></div>
    </div>
  );
}

export default Home;
