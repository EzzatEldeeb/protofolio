import { useState } from "react";
import "./Contact.css";

const EMAIL = "ezzateldeeb006@email.com";
//دا كوموننت عملتلو كوبي يبعتلي الداتا علي الايميل
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message} ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="container-xxl px-3 px-md-5">
        <p className="section-label">Contact</p>

        <div className="row g-5">
          <div className="col-lg-6">
            <h2 className="contact-title">
              Let’s work <em>together.</em>
            </h2>
            <p className="contact-text">
              عندك فكرة أو فرصة شغل؟ ابعتلي رسالة وهرد عليك في أقرب وقت.
            </p>

            <ul className="socials">
              <li>
                <a href="#" aria-label="GitHub">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} aria-label="Email">
                  <i className="fa-regular fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-6">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-hire align-self-start">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
