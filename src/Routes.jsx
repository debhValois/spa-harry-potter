import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { About } from "./pages/About/about";
import { Nav } from "./components/Nav/nav"
import { Footer } from "./components/Footer/footer"

export function AppRoutes() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
