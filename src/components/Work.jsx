import "./Work.css";

const projects = [
  { title: "Elite Store", year: "2026", tag: "E-commerce", img: "", link: "#" },
  { title: "StrangerChat", year: "2026", tag: "Realtime", img: "", link: "#" },
  { title: "Virtual Room", year: "2026", tag: "Realtime", img: "", link: "#" },
  { title: "AI ESFL", year: "2026", tag: "Desktop", img: "", link: "#" },
  { title: "Marketplace", year: "2026", tag: "Full Stack", img: "", link: "#" },
  { title: "Project Six", year: "2026", tag: "Frontend", img: "", link: "#" },
];

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="container-xxl px-3 px-md-5">
        <p className="section-label">Selected work</p>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 g-lg-5">
          {projects.map((p) => (
            <div className="col" key={p.title}>
              <a
                className="project"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-media">
                  {p.img ? (
                    <img src={p.img} alt={p.title} />
                  ) : (
                    <i className="fa-regular fa-image"></i>
                  )}
                </div>
                <div className="project-meta">
                  <h3 className="project-title">{p.title}</h3>
                  <span className="project-info">
                    {p.year} · {p.tag}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
