import 'next';
import Link from 'next/link';
import { useRouter } from 'next/router'
import CustomButton, {ButtonIcon} from '../components/CustomButton';


export default function Custom404() {
    const router = useRouter()

    return (
        <div className='center-404'>
            {/* <h1>404 - Page Not Found</h1> */}

            <p className='opensans'>Open Sans: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/></p>
            <hr className="solid"></hr>
            <br/>

            <p className='roboto'>Roboto: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/></p>
            <hr className="solid"></hr>
            <br/>

            <p className='dosis'>Dosis: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/></p>
            <hr className="solid"></hr>
            <br/>
            {/* <CustomButton onClick={() => {router.back()}} text="Go Back" icon={ButtonIcon.arrowBack} /> */}
        </div>
    )
}

