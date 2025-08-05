import css from 'styled-jsx/css'

export default css.global`
  .back-to-top-button{
    position: fixed;
    display: flex;
    align-items: flex-end;
    right: 0;
    bottom: 60px;
    transform: rotate(270deg);
    opacity: 0.5;
    font-family: var(--date-font);
    font-weight: 500;
  }
  .back-to-top-button span, .back-to-top-button svg{
    color: var(--post-text-color);
    user-select: none;
  }

  .back-to-top-button:hover{
    opacity: 1;
  }
  .post-section{
    font-family: var(--main-font);
  }
  .post-content p{
    line-height: 1.8em;
    text-align: justify
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
  .post-content h1{
    font-size: 1.8em;
    margin-top: 2rem;
    font-family:var(--title-font);
    font-weight: bolder;
  }
  .post-content h1::before{
    content: "#  ";
    font-family:var(--title-font);
    font-weight: 600;
    color: var(--title-before-color);
    margin-right: 0.2rem;
  }
  .post-content h2{
    font-size: 1.8em;
    margin: 1.5rem 0 -1rem 0;
    font-weight: bolder;
    // font-family: var(--title-font);
  }

  .post-content h2::before{
    content: "##  ";
    font-family:var(--title-font);
    font-weight: 300;
    color: var(--title-before-color-h2);
    margin-right: 0.2rem;
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
  
  .image-container {
    width: max-content;
    max-width: 100%;

    margin-right: auto;
    margin-left: auto;
  }
  .image-container > span{
    position: unset !important;

  }
  
  .image-container .next-image {
    object-fit: contain;
    position: relative !important;
    height: unset !important;
    width: 100% !important;
  } 
  .post-cover{
    border-radius: 0.3rem;
    height: 100%;
    width:100%;
    object-fit: cover;
    max-height: 100rem;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto; 
  }
  .post-cover-div{
    position: relative;
    background-color: #2d2d2d 
    border-radius: 0.3rem;
  }

  .post-cover-date{
    position: absolute;
    margin-top: -35%;
    width: 100%;
    
    
    user-select: none;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
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
    margin-left: 22vw;
    margin-right: 27vw; 
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
  
 
  @media only screen and (min-width:600px) and (max-width:1000px){
    .post-container{
      margin-left: 10vw;
      margin-right: 16vw; 
    }
  }
  
  @media only screen and (max-width: 599px){
    .back-to-top-button{
      display: none;

    }
    .post-container{
      margin-left: 5vw;
      margin-right: 5vw; 
    }
    .post-cover-date{
      font-size: 2em;
      /* margin-top: 28%; */
    }
  }
  .tooltip-expand{
    font-size: 1.0em;
    text-decoration: none;
    font-weight: bold;
    user-select:none;
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
  .author-tooltip-img{
    border-radius: 100%;
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
    font-size: 1rem;
  }

  /*================ POST INTERN INFO =================*/
  .post-author-info{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 1rem 0.5rem;
  }
  .post-info-author-image{
    clip-path: circle(50% at 50% 50%);
    margin-right: 0.6rem;
    cursor: pointer;
  }
  .post-author-info p{
    line-height:normal;
    font-family: var(--main-font)
  }
  .post-info-author-name{
    margin:0 0 0.5rem 0;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.15em;
  }
  .post-info-publish-date{
    margin:0;
    color: var(--card-date-color);
    font-family:var(--date-font);
    font-size: 0.9rem;
    font-weight: 400;
    object-fit: cover;
  }
  .post-info-buttons{
    margin-top: 0.5rem;
    display: flex;
  }

/*============ ==============*/
.post-sumarry{
  background-color: var(--background-quote-color);
  border-radius: 0.2rem;
  padding: 0.05rem 1rem 0.6rem 1rem;
  margin: 0rem auto;
}
.post-sumarry h2{
  font-family: var(--main-font);
  margin: 0;
  padding: 0.8rem 0px 0.4rem 0px;
  font-size: 1.2rem;
}
.post-sumarry a{
  font-family: var(--main-font);
  margin: 0;
  padding: 0.1rem 0;
  text-decoration: none;
    user-select:none;
  font-weight: 600;
  color: var(--link-color);
}

`
