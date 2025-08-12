import { Variants } from "framer-motion"
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
  hidden: { opacity: 0, y: 100 }
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
  hidden: { opacity: 0, y: -90 }
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
  hidden: { opacity: 0, y: -90 }

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


export const cardVariants: Variants = {
  offscreen: {
    y: 400,
    opacity: 0
  },
  onscreen: {
    y: 50,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8
    }
  },
  hidden: {
    y: 400,
    opacity: 0
  },
  exit: {
    y: 400,
    opacity: 0
  }
};
