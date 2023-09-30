import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Playground from "./screens/Playground/Playground";
import {CourseGenerator} from "./screens/CourseGenerator";
import {ProfilPage} from "./screens/ProfilPage/ProfilPage";
import {Home} from "./screens/Home";
import {CoursePage} from "./screens/CoursePage";
import {CourseGenerated} from "./screens/CourseGenerated";
import {WelcomePage} from "./screens/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stworz-kurs" element={<CourseGenerator />} />
        <Route path="/wygenerowany-kurs" element={<CourseGenerated />} />
        <Route path="/kurs" element={<CoursePage />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/witamy" element={<WelcomePage />} />

        {/*<Route path="/" element={<Playground />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
