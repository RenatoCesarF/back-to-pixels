const instagramURL: string = "https://www.instagram.com";
const twitterURL: string = "https://www.twitter.com";

export const redirectToInstagram = (user: string) => window.open(`${instagramURL}/${user}/`);
export const redirectToTwitter = (user: string) => window.open(`${twitterURL}/${user}/`);
