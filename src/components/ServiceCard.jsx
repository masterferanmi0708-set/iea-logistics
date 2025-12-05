import { useEffect, useRef, useState } from "react";

const ServiceCard = ({ title, text }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return (
    <div ref={ref} className={`service-card ${visible ? "show" : ""}`}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ServiceCard;
