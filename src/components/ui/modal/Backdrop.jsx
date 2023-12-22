import { framerBackground } from "../../../utils/framer-motion/variants"; 
import { motion } from "framer-motion"; 

export const Backdrop = () => {
  return (
    <motion.div 
    {...framerBackground}
    className="fixed backdrop top-0 left-0 w-full h-screen z-[1000] bg-[rgba(0,0,0,0.35)]" />
  );
};
