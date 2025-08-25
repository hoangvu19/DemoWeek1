import React, { useState } from "react";

function Skills() {
  const [search, setSearch] = useState("");

  const skillCategories = {
    "Frontend": [
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "HTML/CSS", level: 85 }
    ],
    "Backend": [
      { name: "ASP.NET MVC", level: 85 },
      { name: "C#", level: 90 },
      { name: "SQL Server", level: 80 }
    ]
  };

  const allSkills = Object.values(skillCategories)
    .flat()
    .filter(skill => 
      skill.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>
        
        {search === "" ? (
          <div className="skills-categories">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category} className="skill-category">
                <h3 className="category-title">{category}</h3>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="search-results">
            {allSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
