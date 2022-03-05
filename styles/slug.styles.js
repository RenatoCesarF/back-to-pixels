import css from 'styled-jsx/css'

export default css.global`
  .post-section{
    font-family: 'Roboto', sans-serif;
  }
  .post-section p{
    line-height: 1.8em;
  }
  .post-section li{
    line-height: 1.7em;
    font-size: 1.0em;
    color: var(--post-text-color);
  }
  .post-section em{
    /* color: var(--main-color); */
    font-weight: 600;
    font-style: italic;
  }

  .post-section a{
    font-size: 1.0em;
    border-bottom: 1px dashed var(--link-color);
    text-decoration: none;
    font-weight: bold;
    color: var(--link-color);
    padding-left: 3px;
    padding-right: 3px;
    transition: color .4s ease-in-out, box-shadow .4s ease-in-out;
    box-shadow: inset 0 0 0 0 var(--link-color);
  }
  .post-section a:hover{
    border-bottom: none;
    font-weight: 500;
    box-shadow: inset 200px 0 0 0 var(--link-color);
    color: var(--link-hover-color);
  }
  .post-content h1{
    font-size: 1.6em;
    margin-top: 2rem;
  }
  .post-content h2{
    color: var(--post-h1-color);
    font-size: 1.3em;
    margin-top: 1rem;
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
    border-radius: 0.15rem;
    height: 100%;
    width:100%;
    object-fit: cover;
    max-height: 100rem;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto; 
  }
  .post-cover-div{
    display: flex;
    position: relative;
  }

  .post-cover-date{
    font-family: 'Open Sans', sans-serif;
    margin: auto;
    margin-top: 27%;
    text-align: center;
    height: 100%;
    width: 100%;
    position: absolute;
    user-select: none;

    
    font-size: 2.5em;
    color: var(--font-contrast-color); 
   
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
    color: var(--post-resume-color);
    font-size: 1rem;

    margin-left: 5%;
    margin-right:5%;
    margin-top: 0px;
    margin-bottom: 0px;

    text-align: justify;
    font-style: italic;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
 
  @media only screen and (min-width:600px) and (max-width:990px){
    .post-container{
      margin-left: 14vw;
      margin-right: 20vw; 
    }
  }
  
  @media only screen and (max-width: 599px){
    .post-container{
      margin-left: 5vw;
      margin-right: 5vw; 
    }
    .post-cover-date{
      font-size: 2em;
      margin-top: 28%;
    }
  }
  .tooltip-expand{
    font-size: 1.0em;
    text-decoration: none;
    font-weight: bold;
    color: var(--link-color);
    cursor: pointer;
    user-select: none;
    position: relative;
    display: inline-block;
  }
  /*===================TOOLTIP BALLON ===========*/
  .expanded-tooltip-div{
      /* -webkit-box-shadow:  -6px 10px 13px 1px rgb(0 0 0 / 53%); 
      box-shadow:  -6px 10px 13px 1px rgb(0 0 0 / 53%); */
      
      color: rgb(245, 244, 244);
      white-space: nowrap;
      
      background-color:var(--secondary-color);
      border-radius: 0.5rem;
      
      position: absolute;
      z-index: 2;
      
      height: fit-content;
      width: max-content;
      min-width: 100px;
      min-height: 70px;

      top: -90px;
      
      padding: 8px 8px 0px 5px;
      
      transition: all 0.6s cubic-bezier(.65,-0.53,.24,1.12);
  }
  .expanded-tooltip-div::after {
      content: "";
      position: absolute;
      top: 98%;
    
      margin-left: -9px;
      border-width: 9px;
      border-style: solid;
      border-color:var(--secondary-color) transparent transparent transparent;
      transition: all 0.6s cubic-bezier(.65,-0.53,.24,1.12);
  }
  .tooltip-expand:hover .expanded-tooltip-div{
      clip-path: circle(100%);
  }
  .author-tooltip-role{
      padding-left: 10px;
      margin: auto;
      line-height: 60px;
      height: max-content;
  }
  .author-tooltip-role p{ 
      margin: 0;
      color: var(--font-contrast-color);
      vertical-align: middle;
      line-height: normal;
      font-size: 17px;
  }
`
