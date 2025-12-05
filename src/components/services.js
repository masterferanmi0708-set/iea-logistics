import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services" className="container py-5">
      <h2 className="mb-4">Our Core Services</h2>

      <div className="row g-4">

        <div className="col-md-6 col-lg-4 ">
          <ServiceCard
            title="Courier Delivery"
            text="Same-day and next-day courier services with secure handling and online tracking."
          />
        </div>

        <div className="col-md-6 col-lg-4 ">
          <ServiceCard
            title="Haulage & Transport"
            text="Fleet management for large and small consignments across major routes."
          />
        </div>

        <div className="col-md-6 col-lg-4 ">
          <ServiceCard
            title="Warehouse Solutions"
            text="Short- and long-term secure storage with inventory support."
          />
        </div>

        <div className="col-md-6 col-lg-4 ">
          <ServiceCard
            title="International Shipping"
            text="Partnerships with global carriers for door-to-door shipping."
          />
        </div>

        <div className="col-md-6 col-lg-4 ">
          <ServiceCard
            title="Custom Logistics Solutions"
            text="Tailored solutions for B2B and e-commerce retailers."
          />
        </div>

        <div className="col-md-6 col-lg-4 ">
          <ServiceCard
            title="Returns Management"
            text="Streamlined reverse logistics for smoother return experiences."
          />
        </div>

      </div>

      <div className="mt-4">
        <div className="cta">
          <h3 className="mb-2">Let's move your business forward</h3>
          <p className="mb-3">Request a tailored quote or start a partnership with our logistics experts.</p>
          <a href="#contact" className="btn btn-light btn-lg">Request a Quote</a>
        </div>
      </div>
    </section>
  );
};

export default Services;