import SectionTitle from "../components/ui/SectionTitle.jsx";

export default function Skills() {
  return (
    <div className="container">
      <SectionTitle primary="Skills" secondary="Skill Tree" />

      <div className="grid2">
        {/* Programming Languages */}
        <div className="card">
          <div className="sectionTitle">Programming Languages</div>
          <div className="p">
            Java, Python, C#, JavaScript, HTML, CSS, SQL, Bash
          </div>
        </div>

        {/* Frontend */}
        <div className="card">
          <div className="sectionTitle">Frontend Development</div>
          <div className="p">
            React, Vite, Avalonia, HTML/CSS, JavaScript (ES Modules), Bootstrap
          </div>
        </div>

        {/* Backend */}
        <div className="card">
          <div className="sectionTitle">Backend & APIs</div>
          <div className="p">
            Node.js, Express, Flask, .NET (Entity Framework), JDBC, REST APIs
          </div>
        </div>

        {/* Databases */}
        <div className="card">
          <div className="sectionTitle">Databases & Data</div>
          <div className="p">
            PostgreSQL, MongoDB, SQLite, MySQL, Room (Android)
          </div>
        </div>

        {/* AI / ML */}
        <div className="card">
          <div className="sectionTitle">AI & Machine Learning</div>
          <div className="p">
            Scikit-learn, TensorFlow, Transformers, Neural Networks, Decision Trees,
            Transfer Learning, Model Fine-tuning, Google Colab
          </div>
        </div>

        {/* DevOps / Tooling */}
        <div className="card">
          <div className="sectionTitle">DevOps & Tooling</div>
          <div className="p">
            Git (GitHub, GitLab), Docker, CI/CD, Linux, Nginx, Postman,
            VS Code, Visual Studio
          </div>
        </div>

        {/* Engineering Practices */}
        <div className="card">
          <div className="sectionTitle">Engineering Practices</div>
          <div className="p">
            Team collaboration, Agile & SCRUM, version control workflows,
            testing & debugging, project-based development, DevOps mindset
          </div>
        </div>
      </div>
    </div>
  );
}
