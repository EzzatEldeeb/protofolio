import "./NavBar.css";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    const theme = dark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [dark]);

  return (
    <nav className="navbar navbar-expand-md sticky-top site-nav">
      <div className="container-xxl px-3 px-md-5">
        <a className="navbar-brand logo-slot" href="#hero" aria-label="Home">
          <img
            src="/MiniLogo-removeBG.png"
            alt=""
            className="logo-img"
            width="567"
            height="440"
          />
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-md-center gap-md-4">
            <li className="nav-item">
              <a className="nav-link nav-label" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-label" href="#work">
                Work
              </a>
            </li>
            <li className="nav-item">
              <button
                className="icon-btn"
                onClick={() => setDark(!dark)}
                aria-label="Toggle dark mode"
              >
                <i className={`fa-solid ${dark ? "fa-sun" : "fa-moon"}`}></i>
              </button>
            </li>
            <li className="nav-item">
              <a className="btn btn-hire" href="#contact">
                Hire me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
