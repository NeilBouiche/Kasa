import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Logement from "./pages/Logement";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
