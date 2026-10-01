import "./About.css";

const facts = [
  { label: "Studying", value: "Business Information Systems" },
  { label: "Focus", value: "Full Stack Development" },
  { label: "Stack", value: "React · Node.js · MongoDB" },
];

const skills = [
  "HTML5",
  "CSS3",
  "SCSS",
  "JavaScript",
  "ES6",
  "Responsive",
  "React",
  "Node.js",
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container-xxl px-3 px-md-5">
        <p className="section-label">About me</p>

        <div className="row g-5">
          <div className="col-lg-7">
            <h2 className="about-title">
              Building things for the web, <em>carefully.</em>
            </h2>
            <p className="about-text">اكتب هنا نبذة عنك...</p>
          </div>

          <div className="col-lg-5">
            <p className="section-label">Skills</p>
            <ul className="chips">
              {skills.map((s) => (
                <li className="chip" key={s}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="facts">
          {facts.map((f) => (
            <div className="fact" key={f.label}>
              <span className="fact-label">{f.label}</span>
              <span className="fact-value">{f.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
