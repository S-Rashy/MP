import { motion } from "framer-motion";
import "./SubProp.css"
interface SubpropsProps {
  head: string;
  content: string;
}

const Subprops: React.FC<SubpropsProps> = ({ head, content }) => {
  return (
    <motion.div
      className="sub-item"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
    >
      <h3>{head}</h3>
      <p>{content}</p>
    </motion.div>
  );
};

export default Subprops;
