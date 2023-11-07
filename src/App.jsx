import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import Pariwisata from "./pages/Pariwisata";
import Umkm from "./pages/Umkm";
import Galeri from "./pages/Galeri";
import Artikel from "./pages/Artikel";
import Footer from "./components/Footer";
import Top from "./components/Top";
import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <Top />
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/pariwisata" element={<Pariwisata />} />
        <Route path="/umkm" element={<Umkm />} />
        <Route path="/seni-budaya" element={<Galeri />} />
        <Route path="/artikel/*" element={<Artikel />} />
        <Route path="/artikel/:slug" element={<Post />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
