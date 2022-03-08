import Author, { getAuthor, getAuthorsList } from "@classes/authorType";
import InDevelopment from "@components/InDevelopment";


interface IAuthor{author: Author};
type Params = {teammate: string};
type StaticResponse = {params: Params};


const Teammate: React.FC<IAuthor> = ({author}: IAuthor) => {
    return (
        <>
            <div className="page">
                <p>{author.name}</p>
                <InDevelopment/>
            </div>
        </>
    )
} 


export async function getStaticPaths(){
    const authorsList = getAuthorsList();
    const paths = authorsList.map(authorKey => ({
        params: {
            teammate: authorKey[0]
        }
    }));

    return {paths, fallback: false};
}

export async function getStaticProps({params}: StaticResponse ){
    const author: Author = getAuthor(params.teammate);

    return {
        props:{ author } 
    };
}



export default Teammate;
