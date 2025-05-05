import React, { useState, useEffect } from "react";
import "./Projects.css";
import pokedex from "../assets/pokedex.png";
import todo from "../assets/to_do_list.png";
import supply from "../assets/supply.png";
import libro from "../assets/libro.png";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [modalData, setModalData] = useState(null);

  const projectData = [
    {
      title: "To Do List",
      description: "A simple task management tool designed to help users organize and track their daily tasks efficiently.",
      repoLink: "https://github.com/ElphieGG/to-do-list",
      liveLink: "https://jazzlyntodolist.netlify.app/",
      category: "Weekly",
      image: todo,
      technologies: "React, CSS, HTML, GitHub Pages"
    },
    {
      title: "Pokedex",
      description: "Explore the Pokédex, save favorites, build powerful teams, battle AI opponents, and track your progress with detailed battle history — all in one dynamic Pokémon web app.",
      repoLink: "https://github.com/ElphieGG/pokedex",
      liveLink: "https://jazzlynpokedex.netlify.app/",
      category: "Weekly",
      image: pokedex,
      technologies: "React, JSON,API"
    },
    {
      title: "WMSU Supply Inventory and Monitoring System",
      description: "A comprehensive system designed to efficiently manage, track, and monitor supply inventory for WMSU, ensuring accurate stock control and streamlined operations.",
      repoLink: "https://github.com/ElphieGG/Supply_SE",
      liveLink: "https://supplyoffice-inventory.yarncraftemporium.io/",
      category: "Other",
      image: supply,
      technologies:"HTML, CSS, JavaSrcipt,PHP, XAMPP"
    },
    {
      title: "Libro Compartir",
      description: "An online platform that connects readers, allowing them to easily exchange, buy, or sell books while exploring endless possibilities with fellow book lovers.",
      repoLink: "https://github.com/ElphieGG/libro_compartir",
      liveLink: "https://tan-seal-113411.hostingersite.com/",
      category: "Other",
      image: libro,
      technologies:  "HTML, CSS, JavaSrcipt,PHP, XAMPP"
    }
  ];

  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter(project => project.category === filter);

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
      });
    });
    cards.forEach(card => observer.observe(card));

    return () => cards.forEach(card => observer.unobserve(card));
  }, [filteredProjects]);

  const handleFilterClick = (filterType) => {
    setFilter(filterType);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="projects-container">
        <br />
        <div className="hello-text">
      <h1>My Projects</h1>
      </div>

      <div className="filter-buttons">
        <button
          className={filter === "All" ? "active" : ""}
          onClick={() => handleFilterClick("All")}
        >
          All
        </button>
        <button
          className={filter === "Weekly" ? "active" : ""}
          onClick={() => handleFilterClick("Weekly")}
        >
          Weekly Projects
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => setModalData(project)}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="modal-overlay" onClick={() => setModalData(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={() => setModalData(null)}>
              &times;
            </span>
            <h2>{modalData.title}</h2>
            <img src={modalData.image} alt={modalData.title} />
            <p>{modalData.description}</p>
            <p><strong>Technologies:</strong> {modalData.technologies}</p>
            <div className="project-links">
              <a href={modalData.repoLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> Repository
              </a>
              <a href={modalData.liveLink} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe"></i> Live Site
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
