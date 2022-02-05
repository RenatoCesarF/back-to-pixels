import { m } from "framer-motion"
import Link from "next/link"
import Author from "../classes/authorType"
import { cardVariants } from "../helpers/animations"


interface teamMateProps {
    author: Author
}

const TeammateCard: React.FC<teamMateProps> = ({author}:teamMateProps) =>{
    return(
        <Link href={`/team/${author.key}`}>
            <m.div className='teammate-card-div' variants={cardVariants}>
                <p>{author.name}</p>
                
            </m.div>
        </Link>
    )
}

export default TeammateCard