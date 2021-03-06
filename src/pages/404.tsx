import { motion } from 'framer-motion';
import { useRouter } from 'next/router'
import CustomButton from '@components/CustomButton/CustomButton';
import { slideInDown, slideInUp } from '@helpers/animations';
// import lotie404 from '@public/lotties/404-lottie.json';
// import Lottie from 'react-lottie'
import HeadTag from '@components/HeadTag';
import WEBSITE_INFO from '@helpers/webSiteInfo';

import styles from '@styles/404.styles'
import AnimatedLayout from '@components/AnimatedLayout';

// const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: lotie404,
// };

export default function Custom404() {
    const router = useRouter()
    
    return (
        <AnimatedLayout>
            <div className="page">
                <style jsx global>
                    {styles}
                </style>
                <HeadTag 
                    image={WEBSITE_INFO.LOGO_PATH}
                    title="404 - Not Found" 
                    description={`${WEBSITE_INFO.NAME} website - Page not found`}
                    keywords={[]} 
                    date={new Date()} 
                    url="/404"
                />

                <div className='center-404'>
                    <motion.div variants={slideInDown}>
                        <h1 style={{fontSize: "5em", fontWeight: 900}}> 404</h1>
                        <h1> Page Not Found</h1>
                    </motion.div>

                    <motion.div variants={slideInUp}>
                        <CustomButton description="Return to last Page" onClick={() => {router.back()}} text="Back" icon={"arrowBack"} />
                    </motion.div>
                </div>
            </div>
        </AnimatedLayout>
    )
}

