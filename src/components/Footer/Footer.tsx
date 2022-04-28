import globalStyles from './Footer.styles'

export default function Footer(){
    return(
        <div>
            <style jsx global>
                {globalStyles}
            </style>
            <div className="page-footer">
                <p>© 2022 Renato Cesar</p>
            </div>
        </div>
    )
}