import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/nav';
import Hero from './components/hero';
import Footer from './components/footer';
import Content from './components/content';
import naslovi from './components/naslovi.json';

let cookie = document.cookie;
let id = cookie.slice(cookie.indexOf('id=') + 3, cookie.length);
let pass;

for(let i = 0; i < naslovi.data.length; i++){
    if(naslovi.data[i].id == id){
        pass = naslovi.data[i];
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <video id="background" autoPlay loop muted poster='src/assets/poster.jpg'>
      <source src='src/assets/video.mp4' type='video/mp4'/>
    </video>
    <NavBar />
    <Hero {...pass}/>
    <Content {...pass}/>
    <Footer />
  </React.StrictMode>,
);
