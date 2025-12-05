import { useState, useEffect } from "react";



const Home = () => {

    const images = [
    "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {

      // Start fade-out
      setFade(true);

      // After fade-out completes, change the image
      setTimeout(() => {
        setIndex(prev => (prev + 1) % images.length);
        setFade(false);   // fade-in
      }, 800);

    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
<section id="home" className="hero">
    <div className="container">
        <div className="row align-items-center pt-5 px-4">
            <div className="col-12 col-md-6 col-lg-7">
                <div className="story">
                        <h1 className="display-5">Reliable logistics — modern thinking</h1>
                        <p className="lead text-muted">Fast, secure and trackable courier & haulage services. Shipping across the UK and international partners.</p>
                        <div className="d-flex gap-2 mt-3">
                        <a href="#track" className="btn btn-primary btn-lg">Track a shipment</a>
                        <a href="#services" className="btn btn-outline-secondary btn-lg">Our services</a>
                        </div>
                        
                <div className="mt-4 track-box">
                <form id="quickTrackForm" className="row g-2 align-items-center">
                    <div className="col-9">
                    <input id="quickTrackInput" className="form-control" placeholder="Enter tracking number e.g. IEA123456" />
                    </div>
                    <div className="col-3">
                    <button className="btn btn-primary w-100" type="submit">Track</button>
                    </div>
                    <div className="col-12 small mt-2 text-muted">Use demo codes: <code>IEA123456</code>, <code>IEA999999</code></div>
                </form>
                </div>
                </div>
            </div>

                <div className="col-12 col-md-6 col-lg-5">
                    <img src={images[index]} alt="logistics" className={`img-fluid rounded ${fade ? "fade" : ""}`} />
                </div>
                
        </div>
    </div>
</section>
   )
}

export default Home;