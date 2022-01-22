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
      transition: {duration: 0.5, ease: easing }
    }
};
export const slideInDown = {
    exit: {
      y: -100,
      opacity: 0,
      transition: { duration: 0.2, ease: easing }
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.5, ease: easing }
    }
};
export const slideButtonDown = {
    exit: {
      y: -50,
      opacity: 0,
      transition: { duration: 0.2, ease: easing }
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.5, ease: easing }
    }
};
export const slideCardUp = {
    exit: {
      y: 300,
      opacity: 0,
      transition: { duration: 0.4, ease: easing }
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: easing }
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
      transition: {duration: 0.5, ease: easing }
    }
};
  
  