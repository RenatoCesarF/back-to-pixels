export const easing = [0.175, 0.85, 0.42, 0.96];


export const opacityChange = {
  exit: {
    opacity: 0,
  },
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  }
}
export const slideInUp = {
    exit: {
      y: 100,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
    },
    hidden: {opacity: 0, y: 100}
};
export const slideInDown = {
    exit: {
      y: -90,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
    },
    hidden: {opacity: 0, y: -90}
};
export const slideButtonDown = {
    exit: {
      y: -50,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
    },
    hidden: {opacity: 0, y: -90}

};
export const slideCardUp = {
    exit: {
      y: 300,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
    }
};

export const slideInLeft = {
    exit: {
      x: -100,
      opacity: 0,
    },
    enter: {
      x: 0,
      opacity: 1,
    },
    hidden: {
      x: -100,
      opacity: 0,
    }
};
  

export const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 0,
      type: "spring",
      bounce: 0.2,
      duration: 0.6
  },
  exit: {
    y: 300,
    opacity: 0,

  },
  enter: {
    y: 0,
    opacity: 1,
  },
  hidden:{
    y: 0,
    opacity: 1,
  }
};
