import windowScrollTo from "@utils/windowScrollTo"
import { useEffect, useState } from "react"
import { BiRightArrowAlt } from "react-icons/bi"


const BackToTopButton = () =>{
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => {
            window.removeEventListener("scroll", listenToScroll); 
        }
    }, []);
    
    const listenToScroll = () => {
        let heightToShow = 600;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            
        if (winScroll > heightToShow) {  
             !isVisible && setIsVisible(true);
             return;
        } 
        setIsVisible(false); 
    };

    if(!isVisible) return <></>;

    return (
        <div className='back-to-top-button' onClick={() => windowScrollTo()}>
            <span>Bak To Top {scroll}</span>
            <BiRightArrowAlt />
        </div>
    );
}
export default BackToTopButton