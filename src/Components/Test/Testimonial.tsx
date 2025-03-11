import React from "react";
import { motion } from "framer-motion";
import "./Testimonial.css";
import { FaStarHalfAlt } from "react-icons/fa";
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";


const testimonials = [
  {
    name: "Alex Johnson",
    text: "Listen UP has completely changed how I enjoy music. Offline mode is a game-changer!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Kim",
    text: "Crystal-clear sound and unlimited streaming. I love it!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Daniel Martins",
    text: "Cross-platform sync makes switching between devices seamless!",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="testimonials">
      <h2 className="testimonials-title">What Our Users Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
            <div className="testimonial-stars">
              { "⭐".repeat(Math.floor(testimonial.rating))}
              {testimonial.rating % 1 !== 0 && <FaStarHalfAlt/>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
