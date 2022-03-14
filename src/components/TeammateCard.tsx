import { m, motion } from "framer-motion"
import Link from "next/link"
import Author, { roleFromString, Role } from "@classes/authorType"
import { cardVariants, slideInUp } from "@helpers/animations"

const teammateCardImageSize ="120px"

interface teammateProps {
    author: Author
}


const TeammateCard: React.FC<teammateProps> = ({author}:teammateProps) =>{
    const backgroundColor: string = getBackgroundColor(Role[roleFromString(author.roles[0])]);
    return(
        <Link href={`/team/${author.key}`} passHref>
            <motion.div className='teammate-card-div' variants={cardVariants} layout style={{backgroundColor: backgroundColor}}>
                <span className='teammate-card-name'>{author.name}</span>
                <div className="teammate-card-foter" style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{display: "flex", alignItems: "flex-end"}}>
                        {author.roles.map((roll: string, index: number) => {
                            return <p key={index} className="teammate-card-author-role">{roll}<br/></p>
                        })}
                    </div>
                <img alt={`${author.name} image`} className="img-fit"src={author.image_path} height={teammateCardImageSize} width={teammateCardImageSize} />
                </div>
            </motion.div>
        </Link>
    );
}

const getBackgroundColor = (role: Role): string =>{
    switch (role) {
        case Role.Developer:
            return "var(--main-color)";
        case Role.Designer:
            return "var(--secondary-color)";
        case Role.Artist:
            return "var(--tertiary-color)";
    
        default:
            return  "var(--main-color)";
    }
}

export default TeammateCard;