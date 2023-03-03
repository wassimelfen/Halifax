import './App.css';

import {Route,Routes} from 'react-router-dom';
import Formation from './components/Formation';
import Langue from './components/Langue';
import Home from './components/Home';
import AllLangue from './components/AllLangue';
import OneFormation from './components/OneFormation';
import Allemand from './components/Allemand';
import Certif from './components/Certif';
import AllFormation from './components/AllFormation';
import Contact from './components/Contact';


import Details from './components/Details';

function App() {
  return (
    <div>
<Routes>
<Route path='/' element={<Home />}></Route>
<Route path='/formation' element={<Formation />}></Route>
<Route path='/langue' element={<Langue/>}></Route>
<Route path='/AllLangue' element={<AllLangue/>}></Route>
<Route path='/AllFormation' element={<AllFormation/>}></Route>
<Route path='/OneFormation' element={<OneFormation/>}></Route>
<Route path='/Allemand' element={<Allemand/>}></Route>
<Route path='/certif' element={<Certif/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>


<Route path="/details/:language" element={<Details />} />


        

      

</Routes>
    </div>
  );
}

export default App;
