import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
import { Service } from "../types/types";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service: Service, index: number) => (
        <ServiceCard key={index} {...service} />
      ))}
    </section>
  );
};

export default Services;
