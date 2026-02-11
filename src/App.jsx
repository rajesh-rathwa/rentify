import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import OffersPage from "./Pages/OffersPage.jsx";
import TeamPage from "./Pages/TeamPage.jsx";
import CarsPage from "./Pages/CarsPage.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/cars" element={<CarsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
}

export default App;
