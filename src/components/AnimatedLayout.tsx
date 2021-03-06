import { motion } from "framer-motion"


const variants = {
    hidden: {opacity: 0},
    enter: {opacity: 1},
    exit: {opacity: 0}
}

interface AnimatedLayoutProps{
    children?: JSX.Element | JSX.Element[]
}
const AnimatedLayout  = ({children}: AnimatedLayoutProps): JSX.Element =>{
    return(
            <motion.div 
                initial="hidden" 
                animate="enter" 
                exit="exit" 
                // variants={variants} 
                transition={{duration: 0.7,type: 'easeInOut'}}
                style={{position:"relative"}}
            >
                {children}
            </motion.div>
    )
}

export default AnimatedLayout