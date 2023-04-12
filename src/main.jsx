import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/nav';
import Hero from './components/hero';
import SectionImgR from './components/sectionImgR';
import SectionImgL from './components/sectionImgL';
import data from './components/sections.json';
import Divider from './components/divider';
import Card from './components/card';
import cards from './components/cards.json';
import Footer from './components/footer';
import naslovi from './components/naslovi.json';

document.cookie = "id=; expires = Thu, 01 Jan 1970 00:00:00 GMT";

let x = document.cookie;
let lekcijeId = [];

lekcijeId.push(x.slice(8, 9));

for(let i = 19; i < x.length; i += 11){
  lekcijeId.push(x.slice(i, (i+1)));
}

console.log(lekcijeId)

let lekcije = [];

for(let i = 0; i < cards.data.length; i++){
  let done = false;
  lekcijeId.forEach(id => {
    if(cards.data[i].id == id){
      done = true;
    }
  })
  lekcije.push(<Card key = {cards.data[i].id} {...cards.data[i]} done = {done} onClick={e => console.log('aaaa')} />)
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <video id="background" autoPlay loop muted poster='src/assets/poster.jpg'>
      <source src='src/assets/video.mp4' type='video/mp4'/>
    </video>
    <NavBar />
    <Hero {...naslovi.data[0]}/>
    <SectionImgR {...data.data.section1}/>
    <SectionImgL {...data.data.section2}/>
    <Divider />
    <section>
      {lekcije}
    </section>
    <Footer />
  </React.StrictMode>,
);
