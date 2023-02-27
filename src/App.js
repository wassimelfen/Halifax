import './App.css';

import {Route,Routes} from 'react-router-dom';
import Formation from './components/Formation';
import Langue from './components/Langue';
import Home from './components/Home';
import AllLangue from './components/AllLangue';
import OneFormation from './components/OneFormation';
import Allemand from './components/Allemand';
import Certif from './components/Certif';

function App() {
  return (
    <div>
<Routes>
<Route path='/' element={<Home />}></Route>
<Route path='/formation' element={<Formation />}></Route>
<Route path='/langue' element={<Langue/>}></Route>
<Route path='/AllLangue' element={<AllLangue/>}></Route>
<Route path='/OneFormation' element={<OneFormation/>}></Route>
<Route path='/Allemand' element={<Allemand/>}></Route>
<Route path='/certif' element={<Certif/>}></Route>
</Routes>
    </div>
  );
}

export default App;
