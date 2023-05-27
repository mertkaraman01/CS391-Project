import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import App from "./App";
import Homepage from "./containers/Homepage";
import Contact from "./containers/Contact";
import About from "./containers/About";
import Register from "./containers/Register";
import LinkNotFound from "./components/LinkNotFound";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
       
        <Route path="home" element={<Homepage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<LinkNotFound/>}/>
      </Route>
    </Routes>
  </BrowserRouter>);

