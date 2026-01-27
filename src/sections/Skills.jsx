import SwapTypeTitle from "../components/ui/SwapTypeTitle.jsx";

export default function Skills() {
  return (
    <div className="container">
      <div className="sectionTitle">
        <SwapTypeTitle
          primary="Skills"
          secondary="Skill Tree"
        />
      </div>
      <div className="grid2">
        <div className="card">
          <div className="sectionTitle">Backend</div>
          <div className="p">C#, .NET, EF Core, Node/Express, Flask</div>
        </div>
        <div className="card">
          <div className="sectionTitle">Frontend</div>
          <div className="p">React, Vite, JS/ES Modules, HTML/CSS</div>
        </div>
        <div className="card">
          <div className="sectionTitle">Databases</div>
          <div className="p">PostgreSQL, MongoDB, Room</div>
        </div>
        <div className="card">
          <div className="sectionTitle">Tooling</div>
          <div className="p">Git/GitHub, Docker, CI/CD, Testing</div>
        </div>
      </div>
    </div>
  );
}
