import React from 'react';
import Home from './Complements/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drivers from './Complements/pages/Drivers';
import MaxDriverStat from './Complements/pages/Verstappen';
import Albon from './Complements/pages/Albon';
import Alonso from './Complements/pages/Alonso';
import Bottas from './Complements/pages/Bottas';
import Gasly from './Complements/pages/Gasly';
import Guanyu from './Complements/pages/Guanyu'; // Update the import for Guanyu
import Hamilton from './Complements/pages/Hamilton';
import Hulkenburg from './Complements/pages/Hulkenburg';
import Leclerc from './Complements/pages/Leclerc';
import Magnussen from './Complements/pages/Magnussen';
import Noris from './Complements/pages/Noris'; // Update the import for Norris
import Ocon from './Complements/pages/Ocon';
import Perez from './Complements/pages/Perez';
import Piastri from './Complements/pages/Piastri';
import Russell from './Complements/pages/Russell';
import Sainz from './Complements/pages/Sainz';
import Sargeant from './Complements/pages/Sargeant';
import Stroll from './Complements/pages/Stroll';
import Tsunoda from './Complements/pages/Tsunoda';

import './App.css';

function App() {

return (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/MaxDriverStat' element={<MaxDriverStat />} />
      <Route path='/Albon' element={<Albon />} />
      <Route path='/Alonso' element={<Alonso />} />
      <Route path='/Bottas' element={<Bottas />} />
      <Route path='/Drivers' element={<Drivers />} />
      <Route path='/Gasly' element={<Gasly />} />
      <Route path='/Guanyu' element={<Guanyu />} />
      <Route path='/Hamilton' element={<Hamilton />} />
      <Route path='/Hulkenburg' element={<Hulkenburg />} />
      <Route path='/Leclerc' element={<Leclerc />} />
      <Route path='/Magnussen' element={<Magnussen />} />
      <Route path='/Norris' element={<Noris />} />
      <Route path='/Ocon' element={<Ocon />} />
      <Route path='/Perez' element={<Perez />} />
      <Route path='/Piastri' element={<Piastri />} />
      <Route path='/Russell' element={<Russell />} />
      <Route path='/Sainz' element={<Sainz />} />
      <Route path='/Sargeant' element={<Sargeant />} />
      <Route path='/Stroll' element={<Stroll />} />
      <Route path='/Tsunoda' element={<Tsunoda />} />
    </Routes>
  </Router>
);
};

export default App;
