import { motion } from "framer-motion";
import Link from "next/link";
import Author, { getRoleFromString, Role, getRoleBackgroundColor } from "@classes/Author";
import { slideInUp } from "@helpers/animations";

interface teammateProps {
    author: Author
}

const TeammateCard: React.FC<teammateProps> = ({author}:teammateProps) =>{
    const backgroundColor: string = getRoleBackgroundColor(Role[getRoleFromString(author.roles[0])]);
    return (
        <Link href={`/team/${author.key}`} passHref>
            <motion.div     
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className='teammate-card-div'
                variants={slideInUp} layout >
                <div className="teammate-image-container">
                    <img className="teammate-card-background-image" alt={`${author.name} image`} src={author.image_path}/>
                </div>

                <section className="teammate-card-gradient" style={{backgroundImage: `linear-gradient(to right, ${backgroundColor} 50% , transparent 75%)`}}>
                    <span className='teammate-card-name'>{author.name}</span>
                    <div className="teammate-card-foter" style={{display: "flex", justifyContent: "space-between"}}>
                        <div className="teammate-card-roles-div">
                            {author.roles.map((roll: string, index: number) => {
                                return <p key={index} className="teammate-card-author-role">{roll}<br/></p>
                            })}
                        </div>
                    </div>
                </section>
            </motion.div>
        </Link>
    );
}

export default TeammateCard;
