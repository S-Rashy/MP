import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../Header/Header";

const ComingSoon: React.FC = () => {
  return (
    <div>
            <Header/>

        <motion.div
          className="coming-soon"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Coming Soon
          </motion.h1>
        
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            We're working on something amazing. Stay tuned!
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <Link to="/" className="back-home">Go Back</Link>
          </motion.div>
        </motion.div>
    </div>
  );
};

export default ComingSoon;
