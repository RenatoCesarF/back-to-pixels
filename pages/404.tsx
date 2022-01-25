import { motion } from 'framer-motion';
import 'next';
import { useRouter } from 'next/router'
import CustomButton, {ButtonIcon} from '../components/CustomButton';
import { slideInDown, slideInUp } from '../helpers/animations';
import lotie404 from '../public/lotties/404-lottie.json';
import Lottie from 'react-lottie'
import NextHead from 'next/head';

export default function Custom404() {
    const router = useRouter()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lotie404,
        // rendererSettings: {
        //   preserveAspectRatio: "xMidYMid slice"
        // }
      };
    return (
        <div className="page">
            <NextHead>
                <meta name="description" content="Coding Ideas website Home page, Learn more about our work"/>
                <meta property="og:title" content="Coding Ideas – 404 Not Found"/>
        
                <title>404 - Not Found</title>
            </NextHead>

            <div className='center-404'>
                
                <motion.div variants={slideInDown}>
                    <h1> Page Not Found</h1>
                    <Lottie options={defaultOptions}/>
                </motion.div>

                <motion.div variants={slideInUp}>
                    <CustomButton description="Return to last Page" onClick={() => {router.back()}} text="Back" icon={ButtonIcon.arrowBack} />
                </motion.div>
            </div>
        </div>
    )
}

