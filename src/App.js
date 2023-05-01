import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AllLangue from "./components/AllLangue";
import OneFormation from "./components/OneFormation";
import Allemand from "./components/Allemand";
import Certif from "./components/Certif";
import AllFormation from "./components/AllFormation";
import Contact from "./components/Contact";
import Anglais from "./components/Anglais";
import Francais from "./components/Francais";
import Management from "./components/Management";
import Informatique from "./components/Informatique";
import Details from "./components/Details";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AllLangue" element={<AllLangue />}></Route>
        <Route path="/AllFormation" element={<AllFormation />}></Route>
        {/* <Route path="/OneFormation" element={<OneFormation />}></Route> */}
        <Route path="/OneFormation/:id" element={<OneFormation />}></Route>
        <Route path="/Allemand" element={<Allemand />}></Route>
        <Route path="/certif" element={<Certif />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/anglais" element={<Anglais />}></Route>
        <Route path="/francais" element={<Francais />}></Route>
        <Route path="/management" element={<Management />}></Route>
        <Route path="/informatique" element={<Informatique />}></Route>

        <Route path="/details/:language" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
