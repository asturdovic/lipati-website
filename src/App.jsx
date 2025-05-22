import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import CommunityPage from "./pages/communitypage";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ"; // FAQ siden importeres

import "./App.css";

function App() {
  return (
    <Router>
      {/* Topbar med info */}
      <AnnouncementBar />

      {/* Navigation */}
      <Navbar />

      {/* Routing setup - definerer hvilke sider der vises */}
      <Routes>
        <Route path="/" element={<Home />} />                 {/* Forside */}
        <Route path="/community" element={<CommunityPage />} /> {/* Community side */}
        <Route path="/FAQ" element={<FAQ />} />               {/* FAQ side */}
        <Route path="*" element={<NotFound />} />             {/* 404 fallback */}
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
