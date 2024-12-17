import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechVision Inc.",
      content: "Terra Labz's AI solutions have revolutionized our medical imaging processes. Their expertise and innovative approach have truly impressed us.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200",
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director",
      company: "AgriTech Solutions",
      content: "The drone technology provided by Terra Labz has transformed our agricultural monitoring capabilities. Exceptional service and cutting-edge solutions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200",
    },
    {
      name: "Emily Watson",
      role: "Innovation Lead",
      company: "Future Energy Corp",
      content: "Their bladeless wind turbine technology has exceeded our expectations. Terra Labz is truly at the forefront of sustainable energy innovation.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-black/40">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our innovations are making a real impact across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;