import "./Hero.css";

const Hero = function () {
  return (
    <section id="hero" className="hero">
      <div className="container-xxl px-3 px-md-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <p className="hero-tag">// Full Stack Dev</p>
            <h1 className="hero-title">
              Ezzat
              <br />
              <em>Eldeeb</em>
            </h1>
          </div>

          <div className="col-lg-5">
            <div className="hero-frame">
              <img src="/Logo-removebg.png" alt="Ezzat Eldeeb" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
