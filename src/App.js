import React from 'react';
import './App.css';
import Careers from './components/CareersPage/Careers';
import HomePage from '../src/pages/HomePage'
import CareersPage from './pages/CareersPage';
import ApplyPage from './pages/ApplyPage';
import ContactUs from './components/Home/ContactUs/ContactUs';
import ContactUsPage from './pages/ContactUsPage';
import OurSkills from './components/Home/OurSkills/OurSkills';
import Welcome from './components/Home/Welcome/Welcome';
import WeDo from './components/Home/WeDo/WeDo';
import Testimonials from './components/Home/Testimonials/Testimonials';
import BolgsPage from './pages/BolgsPage';

function App() {
  return (
    <div className="App">
       <HomePage></HomePage>
      <ContactUsPage></ContactUsPage>
        <CareersPage></CareersPage>
        <ApplyPage></ApplyPage> 
        {/* <OurSkills></OurSkills> */}
        {/* <Welcome></Welcome> */}
        {/* <Testimonials></Testimonials> */}
        {/* <WeDo></WeDo> */}
        <BolgsPage></BolgsPage>
    </div>
  );
}

export default App;
