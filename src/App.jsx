
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Nav from './Component/Nav';
 import Home from "./Pages/Home";
 import Places from "./Pages/Places";
 import AllLink from "./Pages/AllLink";
import Contact from "./Pages/Contact";



function App() {
  return (
    <Router>
      <Nav />
     <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Places" element={<Places />} />
    <Route path="/AllLink" element={<AllLink />} />
    <Route path="/Contact" element={<Contact />} />
   </Routes>
    </Router>
  );
}

export default App;

