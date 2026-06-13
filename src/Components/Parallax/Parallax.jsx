import './Parallax.css';

const Parallax = () => {
  const handleGetStarted = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="parallax" id="home">
      <div className="parallax-content">
        <h1>Reliable Truck Dispatch Service</h1>
        <p>We help you find loads, manage routes and grow your trucking business</p>
        <a href="#about" className="btn" onClick={handleGetStarted}>
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Parallax;