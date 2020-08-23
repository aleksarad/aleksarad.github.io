import React from 'react';

function Projects() {
  return (
    <div id="project-container">
        <h2 id="projects-header">projects</h2>
        <section>
            <h3 className="project-name">glowlist:</h3>
            <p>a makeup planner app with account authentication, drawing functionality and crud. <br/> built with: react, ruby on rails.</p>
            <section className="repo-demo-container">
                <span>repo</span>
                <span>demo</span>
            </section>
        </section>
    </div>
  );
}

export default Projects;