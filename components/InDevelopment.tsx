import { motion } from "framer-motion";
import { slideInUp } from "../helpers/animations";
import programmerLotie from '../public/lotties/programmer-lottie.json';
import Lottie from 'react-lottie'

export default function InDevelopment(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: programmerLotie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return(
        <motion.div  className="under-dev"variants={slideInUp}>
            <Lottie options={defaultOptions}/>
            <h2 className="under-dev-title"> In Development</h2>
        </motion.div>
    );
}