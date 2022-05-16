import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import About from './components/About/about';
import Categories from './components/categories/Categories';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Feedback from './components/Feedback/Feedback';
import SliderImg from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import Message from './components/Message/Message';

function App() {
  
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Categories />
      <Services />
      <Contact />
      <Feedback />
      <SliderImg />
      <Message />
      <Footer />
    </>
  );
}

export default App;
