import yeah from '../images/yeah.avif'

const About = () => {
  return (
    <section id="about" className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h2>About IEA Logistics</h2>
          <p className="text-muted">A modern, customer-first logistics company focused on reliability, safety and transparency.
          We combine technology and operational excellence to deliver packages on time.</p>
          <p className="mb-0"><strong>Vision:</strong> To be the leading logistics partner across our market.</p>
          <p className="mb-0"><strong>Mission:</strong> To deliver unparallel logistics and haulage solutions, driven by the commitment  to excellence and customer satisfaction.</p>
          <p className="mb-0"><strong>Values:</strong> Ownership. Innovation. Efficiency. Hard work. Sustainable. Safety. Efficiency. and Reliable.</p>
        </div>
        <div className="col-lg-6 text-center mt-4 mt-lg-0">
          <img src={ yeah } class="img-fluid rounded shadow" alt="team"/>
        </div>
      </div>
    </section>
   )
}

export default About;