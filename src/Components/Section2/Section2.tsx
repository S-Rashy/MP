import "./Section2.css";
import { motion } from "framer-motion";
import sc from "../../assets/sc.png";
import ellipse from "../../assets/Ellipse.png";
import Subprops from "../../Reuseables/SubProp/SubProp";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, 
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


const Section2 = () => {
  return (
    <div className="section2">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }} 
        initial={{ opacity: 0, x: -100 }} 
        transition={{ duration: 1.5, ease: "easeOut" }} 
        viewport={{ once: false, amount: 0.2 }} 
        className="box"
      >
        <div className="left2">
          <img src={sc} alt="Music App Screenshot" />
        </div>
      </motion.div>

      <div className="right2">
        <img src={ellipse} alt="" id="ellipse" />
        <motion.div
          className="sub"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: false, amount: 0.2 }} 
        >
          {/* <Subprops
            head="Unlimited Streaming"
            content="Access millions of songs with no interruptions"
          />
          <Subprops
            head="Custom Playlists"
            content="Create, share, and enjoy personalized playlists"
          />
          <Subprops
            head=" Offline Mode"
            content="Download and listen anytime, anywhere"
          />
          <Subprops
            head="High-Quality Audio"
            content="Enjoy crystal-clear sound with lossless support"
          />
          <Subprops
            head="Cross-Platform"
            content="Sync your music across all your devices"
          /> */}

          {[
            {
              head: "Unlimited Streaming",
              content: "Access millions of songs with no interruptions",
            },
            {
              head: "Custom Playlists",
              content: "Create, share, and enjoy personalized playlists",
            },
            {
              head: "Offline Mode",
              content: "Download and listen anytime, anywhere",
            },
            {
              head: "High-Quality Audio",
              content: "Enjoy crystal-clear sound with lossless support",
            },
            {
              head: "Cross-Platform",
              content: "Sync your music across all your devices",
            },
          ].map((item, index) => (
            <motion.div key={index} variants={childVariants}>
              <Subprops head={item.head} content={item.content} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;
