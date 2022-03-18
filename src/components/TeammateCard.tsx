import { motion } from "framer-motion"
import Link from "next/link"
import Author, { roleFromString, Role } from "@classes/authorType"
import { slideInUp } from "@helpers/animations"

interface teammateProps {
    author: Author
}

export const TeammateCard: React.FC<teammateProps> = ({author}:teammateProps) =>{
    const backgroundColor: string = getBackgroundColor(Role[roleFromString(author.roles[0])]);
    return (
        <Link href={`/team/${author.key}`} passHref>
            <motion.div     
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className='teammate-card-div'
                variants={slideInUp} layout  
            >
                <div className="teammate-image-container">
                    <img className="teammate-card-background-image" alt={`${author.name} image`} src={author.image_path}/>
                </div>
                <div className="teammate-card-gradient" style={{backgroundImage: `linear-gradient(to right, ${backgroundColor} 50% , transparent 75%)`}}>
                    <span className='teammate-card-name'>{author.name}</span>
                    <div className="teammate-card-foter" style={{display: "flex", justifyContent: "space-between"}}>
                        <div className="teammate-card-roles-div">
                            {author.roles.map((roll: string, index: number) => {
                                return <p key={index} className="teammate-card-author-role">{roll}<br/></p>
                            })}
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}

const getBackgroundColor = (role: Role): string =>{
    switch (role) {
        case Role.Developer:
            return "var(--secondary-color)";
        case Role.Designer:
            return "#582F60";//"var(--secondary-color)";
        case Role.Artist:
            return "var(--tertiary-color)";
    
        default:
            return  "var(--main-color)";
    }
}

export default TeammateCard;

//possible colors
//#2F6160
//#582F60  
//#612F5F
//#7ea0c6