 import { useEffect } from "react";
 import logos from '../images/logos.avif';


const Navbar = () => {


    

  useEffect(() => {
    const toggle = document.getElementById("darkToggle");

    if (!toggle) return;

    // Load saved mode
    const saved = localStorage.getItem("darkMode");
    if (saved === "enabled") {
      document.body.classList.add("dark-mode");
      toggle.checked = true;
    }

    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
      }
    });
  }, []);




  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
    <div className="container darkmode">
      <a className="navbar-brand" href="#home"><img src={logos} alt="logo" className="me-2 rounded"/> <strong></strong></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto align-items-lg-center">
          <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
          <li className="nav-item"><a className="nav-link" href="#track">Track</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          <li className="nav-item ms-2"><a className="nav-link btn btn-outline-primary px-3" href="#admin">Admin</a></li>
          <li className="nav-item ms-2">
            <div className="form-check form-switch mt-1">
              <input className="form-check-input" type="checkbox" id="darkToggle"/>
              <label className="form-check-label small" for="darkToggle">Dark</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

   )
}

export default Navbar;