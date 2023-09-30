import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {Home} from './screens/Home';
import Playground from './screens/Playground/Playground';
import {CourseGenerator} from './screens/CourseGenerator';
import {ProfilPage} from './screens/ProfilPage/ProfilPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/" element={<Playground />} />
        <Route path="/stworz-kurs" element={<CourseGenerator />} />
        <Route path="/profil" element={<ProfilPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
