import css from 'styled-jsx/css'

export default css.global`

  .post-section  li{
    line-height: 1.7em;
    font-size: 1.0em;
    font-family: 'Roboto', sans-serif;
    color: rgba(41, 41, 41, 1);
  }
  .post-section em{
    /* color: var(--main-color); */
    font-weight: 600;
    font-style: italic;
  }

  .post-section a{
    text-decoration: underline;
    color: var(--link-color);
    font-family: 'Roboto', sans-serif; 
  }
  .post-section p{
    line-height: 1.8em;
  }
  /*============ IMAGE ===============*/
  .img-fit{
    object-fit: cover;
    /* max-height: 100vh; */
    max-width: 100%;
    display: flex;
    margin-left: auto;
    margin-right: auto; 
  }
  .post-cover{
    height: 100%;
    object-fit: cover;
    max-height: 100rem;
    max-width: 100%;
    display: flex;
    margin-left: auto;
    margin-right: auto; 
  }
  .post-cover-div{
    background-color: var(--main-color);
    height: 100%;
    padding: 2rem 0px;
    margin-top: 1rem;
    line-height: 100px;
    text-align: center;
  }
  .post-cover-date{
    color: white;
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    font-size: 2em;
    font-family: 'Source Code Pro', sans-serif;
  }
  /*============= CONTENT =============*/
  .post-title{
    letter-spacing: -0.019em;
    line-height: 42px;
    margin-top: 0.56em;
    font-size: 2.3rem;
    margin-bottom: 0.24rem;
    font-family: fell, Georgia, Cambria, "Times New Roman", Times, serif;
    /* font-family: 'Merriweather', serif;*/
    font-weight: 500;
  }
 
  .post-container {
    justify-content: center;
    margin-left: 25vw;
    margin-right: 30vw; 
    margin-bottom: 10vh;
    font-family: charter, Georgia, Cambria, "Times New Roman", Times, serif;
  }
  .post-section .post-resume {
    line-height: 1.2rem;
    color: #575757;
    font-size: 1rem;

    margin-left: 5%;
    margin-right:5%;
    margin-top: 0px;
    margin-bottom: 0px;

    text-align: justify;
    font-style: italic;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
  
  @media only screen and (max-width: 600px){
    .post-container{
      margin-left: 5vw;
      margin-right: 5vw; 
    }
  }
  @media only screen and (min-width:600px) and (max-width:960px){
    .post-container{
      margin-left: 14vw;
      margin-right: 20vw; 
    }
  
  }
`
