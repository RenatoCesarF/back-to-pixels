import { m } from "framer-motion"
import Link from "next/link"
import Author, { getAuthorRoleIndex } from "@root/src/classes/authorType"
import { cardVariants } from "@helpers/animations"

const teammateCardImageSize ="120px"

interface teammateProps {
    author: Author
}
enum teammateRole{
    programmer = 0,
    artist = 1,
    designer = 2,
}

const TeammateCard: React.FC<teammateProps> = ({author}:teammateProps) =>{
    const backgroundColor: string = getBackgroundColor(getAuthorRoleIndex(author.roles[0]));
    return(
        <Link href={`/team/${author.key}`} passHref>
            <m.div className='teammate-card-div' variants={cardVariants} style={{backgroundColor: backgroundColor}}>
                <span className='teammate-card-name'>{author.name}</span>
                <div className="teammate-card-foter" style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{display: "flex", alignItems: "flex-end"}}>
                        {author.roles.map((roll: string, index: number) => {
                            return <p key={index} className="teammate-card-author-role">{roll}<br/></p>
                        })}
                    </div>
                <img alt={`${author.name} image`} className="img-fit"src={author.image_path} height={teammateCardImageSize} width={teammateCardImageSize} />
                </div>
            </m.div>
        </Link>
    );
}

const getBackgroundColor = (role: teammateRole): string =>{
    switch (role) {
        case 0:
            return "var(--main-color)";
        case 1:
            return "var(--secondary-color)";
        case 2:
            return "var(--tertiary-color)";
    
        default:
            return  "var(--main-color)";
    }
}

export default TeammateCard;