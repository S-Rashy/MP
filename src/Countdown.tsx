import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Countdown.css";

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 14); // 2 weeks from now

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = targetDate.getTime() - new Date().getTime();
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <h1 className="title">⏳ Countdown</h1>
      <div className="circle-grid">
        {Object.entries(timeLeft).map(([label, value]) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="circle-box"
          >
            <span className="circle-value">{value}</span>
            <span className="circle-label">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
