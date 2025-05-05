import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/hero";
import About from "./components/about";
import Project from "./components/Projects";
import Contact from "./components/ContactPage";
import BlogPage from "./components/BlogPage";
import BlogModal from "./components/BlogModal";
import Experiences from "./components/Experience";
import CertificationsPage from "./components/CertificationsPage";
import CertificationsModal from "./components/CertificationModal";


function App() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/Experience" element={<Experiences />} />
        <Route path="/ContactPage" element={<Contact />} />
        <Route path="/BlogPage" element={<BlogPage onSelectBlog={setSelectedBlog} />} />
        <Route path="/CertificationsPage" element={<CertificationsPage onSelectCategory={setSelectedCategory} />} />
      </Routes>

      {selectedBlog && (
        <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}

      {selectedCategory && (
        <CertificationsModal category={selectedCategory} onClose={() => setSelectedCategory(null)} />
      )}
    </Router>
  );
}

export default App;
