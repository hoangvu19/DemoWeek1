import React from "react";

function Projects() {
  const projects = [
    { id: 1, title: "Portfolio Website", description: "My personal portfolio" },
    { id: 2, title: "human resource management", description: "Using Asp.net MVC for development" },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
