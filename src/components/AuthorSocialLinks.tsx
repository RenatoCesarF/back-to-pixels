import Author from "@classes/Author";
import copyToClipboard from "@utils/copyToClipBoard";
import { redirectToInstagram, redirectToTwitter } from "@utils/redirect";
import CustomButton from "./CustomButton/CustomButton";

const instagramGradient: string = 'linear-gradient(193deg, rgba(131,58,180,1) 13%, rgba(253,29,29,1) 64%, rgba(252,176,69,1) 88%)';
const twitterColor: string = '#008CFF';

interface AuthorSocialLinksProps{
    author:Author
}

const AuthorSocialLinks = ({author}: AuthorSocialLinksProps) => {
    return(
        <div className="author-social-links">
            {
                author.twitter ? 
                <CustomButton 
                    description={`Redirect to ${author.name} Twitter`}
                    color={twitterColor}
                    icon={"twitter"} 
                    onClick={() => redirectToTwitter(author.twitter) } text={"Twitter"}/>
                : null
            }
            <CustomButton 
                description={`Redirect to ${author.name} Instagram`}
                color={instagramGradient}
                icon={"instagram"} 
                onClick={() => redirectToInstagram(author.instagram)} text={"Instagram"}/>
            <CustomButton 
                description={`Copy ${author.name} e-mail`}
                color="var(--main-color)" 
                icon={"email"} 
                onClick={() => copyToClipboard(author.email) } text={author.email}/>

        </div>
    )
}

export default AuthorSocialLinks;