import 'next';
import Link from 'next/link';
import { useRouter } from 'next/router'
import CustomButton, {ButtonIcon} from '../components/CustomButton';


export default function Custom404() {
    const router = useRouter()

    return (
        <div className="page">

            <div className='center-404'>
                <h1 className='text-404'> Page Not Found <br/>404</h1>

                <CustomButton onClick={() => {router.back()}} text="Back" icon={ButtonIcon.arrowBack} />
            </div>
        </div>
    )
}

