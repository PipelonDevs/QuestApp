import React from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';
// import {Home} from './screens/Home';
import Playground from './screens/Playground/Playground';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Playground />);
