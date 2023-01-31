import './App.css';

import {Route,Routes} from 'react-router-dom';

import Formations from './components/Formations';
import Langues from './components/Langues';
import Home from './components/Home';

function App() {
  return (
    <div>
<Routes>
<Route path='/' element={<Home />}></Route>
<Route path='/formations' element={<Formations />}></Route>
<Route path='/langues' element={<Langues/>}></Route>
</Routes>
    </div>
  );
}

export default App;
