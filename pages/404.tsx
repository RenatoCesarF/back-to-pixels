import { motion } from 'framer-motion';
import 'next';
import Link from 'next/link';
import { useRouter } from 'next/router'
import CustomButton, {ButtonIcon} from '../components/CustomButton';
import { slideButtonDown, slideInDown, slideInUp } from '../helpers/animations';


export default function Custom404() {
    const router = useRouter()

    return (
        <div className="page">

            <div className='center-404'>
                <motion.div variants={slideInDown}>
                    <h1 className='text-404'> Page Not Found <br/>404</h1>
                </motion.div>

                <motion.div variants={slideInUp}>
                    <CustomButton description="Return to last Page" onClick={() => {router.back()}} text="Back" icon={ButtonIcon.arrowBack} />
                </motion.div>
            </div>
        </div>
    )
}

