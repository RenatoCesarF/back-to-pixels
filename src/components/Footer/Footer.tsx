
import globalStyles from './Footer.styles'
export default function Footer(){
    return(
        <>
            <style jsx global>
                {globalStyles}
            </style>
            <footer className="page-footer">
                <p>© 2022 Renato Cesar</p>
            </footer>
        </>
    )
}