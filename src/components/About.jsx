import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="info-card">
              <p className="greeting">Hello! I'm Hoàng Vũ</p>
              <ul className="about-list">
                <li>
                  <span className="highlight">🎓</span> Final-year Information Technology student at Duy Tân University
                </li>
                <li>
                  <span className="highlight">📍</span> Based in Đà Nẵng, originally from Quảng Nam
                </li>
                <li>
                  <span className="highlight">💻</span> Experienced with .NET development
                </li>
                <li>
                  <span className="highlight">⚛️</span> Currently exploring React and web development
                </li>
                <li>
                  <span className="highlight">🚀</span> Passionate about creating user-friendly web applications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
