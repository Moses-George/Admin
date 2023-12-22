export const dropIn = {
  hidden: {
    y: '100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
};


export const framerBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 }
};

export const framerSidebarPanel = {
  initial: { x: "100%" },
  animate: { x: 0 },
  exit: { x: "100%" },
  transition: { duration: 0.3 }
};

export const framerDelaySlide = (delay) => {
  return {
      whileInView: { x: 0, opacity: 1 },
      viewport: { once: true },
      initial: { opacity: 0, x: -50 },
      // animate: { opacity: 1, x: 0 },
      transition: {
          delay: 0.5 + delay / 10
      }
  }
};

export const framerIcon = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 1.5
  }
};

export const framerHorizontalSlide = {
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true },
  transition: { delay: 0.3, duration: 1, ease: "easeIn" },
  initial: { x: -100, opacity: 0 }
};

export const framerVerticalSlide = {
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { delay: 0.3, duration: 1, ease: "easeIn" },
  initial: { y: 100, opacity: 0 }
}; 