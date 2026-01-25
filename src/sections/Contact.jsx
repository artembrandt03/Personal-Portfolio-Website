import { profile } from "../data/profile.js";

export default function Contact() {
  return (
    <div className="container">
      <div className="sectionTitle">Contact</div>
      <div className="card">
        <div className="row">
          {profile.links.email ? (
            <a className="btn" href={`mailto:${profile.links.email}`}>
              [ Email ]
            </a>
          ) : null}
          {profile.links.github ? (
            <a className="btn" href={profile.links.github} target="_blank" rel="noreferrer">
              [ GitHub ]
            </a>
          ) : null}
          {profile.links.linkedin ? (
            <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              [ LinkedIn ]
            </a>
          ) : null}
          {profile.links.resume ? (
            <a className="btn" href={profile.links.resume} target="_blank" rel="noreferrer">
              [ Resume ]
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
