export const easing = [0.175, 0.85, 0.42, 0.96];

export const slideInUp = {
    exit: {
      y: 100,
      opacity: 0,
      transition: { duration: 0.2, ease: easing }
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.1, duration: 0.5, ease: easing }
    }
  };
export const slideCardUp = {
    exit: {
      y: 100,
      opacity: 0,
      transition: { duration: 0.5, ease: easing }
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easing }
    }
  };

export const slideInLeft = {
    exit: {
      x: -100,
      opacity: 0,
      transition: { duration: 0.4, ease: easing }
    },
    enter: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.1, duration: 0.5, ease: easing }
    }
    };
  
  