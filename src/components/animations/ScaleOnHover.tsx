import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleOnHoverProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function ScaleOnHover({ children, className = "", scale = 1.05 }: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ 
        scale,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
