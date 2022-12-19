import { motion, useScroll, useSpring } from "framer-motion";
import styled from "@emotion/styled";

const Progress = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 80px;
  height: 5px;
  background: #66c189;
`;

const ScrollYProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 100,
    restDelta: 0.001,
  });

  return <Progress style={{ scaleX }} />;
};

export default ScrollYProgress;
