import React from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';
// import {Home} from './screens/Home';
import Playground from './screens/Playground/Playground';
import {CourseGenerator} from './screens/CourseGenerator';
import {ProfilPage} from './screens/ProfilPage/ProfilPage';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<ProfilPage />);
