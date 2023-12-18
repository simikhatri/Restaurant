import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navber";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Menu from './components/Menu';
import BookingForm from "./components/BookingForm";
import About from "./components/About";
import Contact from './components/Contact';
import Signup from './components/Signup'
import Login from './components/Login';
import './App.css';


function App() {
  return (
    <>

      <HashRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/BookingForm" element={<BookingForm />}></Route>
          <Route path="/Menu" element={<Menu />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Sign" element={<Signup />}></Route>
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
