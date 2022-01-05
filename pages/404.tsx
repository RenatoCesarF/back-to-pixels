import 'next';
import Link from 'next/link';
import { useRouter } from 'next/router'
import CustomButton, {ButtonIcon} from '../components/CustomButton';


export default function Custom404() {
    const router = useRouter()

    return (
        <div className='center-404'>
            <h1>404 - Page Not Found</h1>
            <CustomButton onClick={() => {router.back()}} text="Go Back" icon={ButtonIcon.arrowBack} />
        </div>
    )
}

