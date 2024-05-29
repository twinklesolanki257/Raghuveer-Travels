import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Gallery from './Gallery';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Poster from './Poster';
import Services from './Services';
// import Accountlogin from './Accountlogin';
import Dashboard from './Dashboard';
import Aboutpage from './Aboutpage';
import Ourrates from './Ourrates';
import Login from './Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<Aboutus />} />
            <Route path="aboutpage" element={<Aboutpage />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="poster" element={<Poster />} />
            <Route path="loginpage" element={<Login/>}/>
            <Route path="services" element={<Services />} />
            {/* <Route path="login" element={<Accountlogin />} /> */}
            <Route path="dashboard" element={<Dashboard />} />

            <Route path='rates' element={<Ourrates/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
