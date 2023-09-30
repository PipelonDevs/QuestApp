import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Playground from './screens/Playground/Playground';
import {CourseGenerator} from './screens/CourseGenerator';
import {ProfilPage} from './screens/ProfilPage/ProfilPage';
import {Home} from './screens/Home';
import {CoursePage} from './screens/CoursePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoursePage />} />
        {/*<Route path="/" element={<Playground />} />*/}
        <Route path="/stworz-kurs" element={<CourseGenerator />} />
        <Route path="/profil" element={<ProfilPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
