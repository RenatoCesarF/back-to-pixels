import css from 'styled-jsx/css'
export default css.global`
.post-card-expanded-external{
    height: 19rem;
    width: fit-content;
    text-decoration: none;
    user-select:none;
  }
  .post-card-div{
    width: 17em;
    height: 17em;
    
    display: flex;
    flex-direction: column;
    
    background-color: var(--card-color);
    border-left:   0.2rem solid var(--card-border-color);
    border-bottom: 0.15rem solid var(--card-border-color);
    border-radius: 0.5rem;
    margin: 0.5rem;
    user-select:none;
    /* transition: height 0.69s cubic-bezier(.65,-0.53,.24,1.12); */
    transition: height .6s cubic-bezier(0.215, 0.610, 0.355, 1), background .2s ease-in;
  
    
    -webkit-box-shadow:  9px 9px 10px -6px var(--card-shadow-color);
    -moz-box-shadow:  9px 9px 10px -6px var(--card-shadow-color);
    box-shadow: 9px 9px 10px -6px var(--card-shadow-color); 
  }
  
  .post-card-clickable{
    text-decoration: none;
    cursor: pointer;
    user-select:none;
  }
  /*----------IMAGE------------*/
  .post-card-image-container{
    background-color: var(--main-color);
    border-radius: 0.35rem 0.35rem 0px 0px;
    height: 9rem;
    display: inline-flex; 
    position: relative;
    width: 100%;
    width: 100%;
    overflow: hidden;
    object-fit: cover;
  }
  .post-card-img{
    border-radius: 0.35rem 0.35rem 0px 0px;
    width: 100%;
    height: 9rem;
    object-fit: cover;
    vertical-align: middle;
    transition: opacity 4s cubic-bezier(.65,-0.53,.24,1.12);
    transition: transform 1.3s cubic-bezier(.165,.84,.44,1);
  }
  
  .post-card-cover-date{
    font-family: 'Open Sans', sans-serif;
    margin: auto;
    margin-top: 3.7rem;
    text-align: center;
    height: 100%;
    width: 100%;
    position: absolute;
  
    font-size: 1.8em;
    color: var(--font-contrast-color); 
   
    transition: transform 1.3s cubic-bezier(.165,.84,.44,1);
  }
  
  @media screen and (max-width: 640px) {
    .post-card-expanded-external{height: fit-content;}
    .post-card-div{width: 90vw;}
  
  }
  /*----------CONTENT-----------*/
  .post-card-container{
    margin-left: 0.5vw;  
    margin-right: 0.5vw;  
    margin-top: 0.2vh;  
    margin-bottom: 0.5vh;  
    height: auto;
    text-decoration: none;
    user-select:none;
  }
  .post-card-title{
    font-family: 'Inconsolata', sans-serif;
    font-size: 1.15rem;
    margin: 0;
    margin-top: 0.2rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    color: var(--card-text-color);
    text-decoration: none !important;
    user-select:none;
  }

  .excerpt-post-card-div{
    position: relative; 
    z-index: 0;
    
    width: 100%;
    background-color: var(--card-color);
    margin-left: 0.15rem;
    margin-top: 0.1rem;
  }
  .post-card-resume{
    margin: 0;
    display: block;
    position: absolute;
    height: auto;
    
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    word-break: keep-all;
    font-size: 0.80rem;
    text-size-adjust: 20%;
    
    transition: all .7s cubic-bezier(.165,.84,.44,1);
  
    color: var(--card-resume-text-color);
  }
  
  /*------------FOOOTER--------------*/
  .post-card-footer{
    z-index: 1;
    margin-top: auto;
    display: flex;
    background-color: var(--card-color);
    border-radius: 0px 0px 0.4rem 0.4rem;
    height: auto;
    justify-content: space-between;
    transition: background .2s ease-in;
    
  }
  .card-date-row{
    overflow: hidden;
    display: inline-flex;
    margin-left: 0.3rem;
  }
  .post-card-categories-row{
    padding-top: 0.7rem;
    padding-bottom: 0.3rem;
    padding-right: 0.4rem;
  }
  
  /*========= TOOLTIP ========= */
  .tooltip {
    position: relative;
    display: inline-block;
  }
  
  .tooltiptext {
    display: -webkit-inline-box;
    line-height: 2rem;
    user-select: none;
  
    width: 50px;
    height: 20px;
    background-color:var(--header-background-color);
    text-align: center;
    padding: 8px 2px;
    visibility: hidden;
    border-radius: 0.5rem;
  
    /* Position the tooltip text */
    position: absolute;
    z-index: 2;
    bottom: 120%;
    left: 57%;
    margin-left: -90px;
  
    opacity: 0;
    transition: all 0.4s cubic-bezier(.65,-0.53,.24,1.12);
  
  }
  /* Tooltip arrow */
  .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color:var(--main-color) transparent transparent transparent;
  }
  
  .tooltip .categories-row{
    transition: all 0.5s cubic-bezier(.65,-0.53,.24,1.12);
    animation: moveLeft 0.5s 1;
    animation-fill-mode: forwards;
  }
  
  .tooltip .extended-categories{
    opacity: 0;
  }
  
  /* Show the tooltip text when you mouse over the tooltip container */
  .post-card-categories-row:hover .tooltiptext {
    visibility: visible;
    width: 155px;
    height: fit-content;
    opacity: 1;
  }
  .post-card-categories-row:hover .categories-row{
    animation: moveRight 0.4s 1 cubic-bezier(.65,-0.53,.24,1.12);
    animation-fill-mode: forwards;
    animation-delay: 0.2s;
    pointer-events: none;
  }
  .post-card-categories-row:hover .categories-row button{
    user-select: none;
    cursor: default;
  }
  .post-card-categories-row:hover .extended-categories{
    opacity: 1;
  }
  @keyframes moveRight {
    0% {
      opacity: 1;
      /* margin-right: 0rem; */
    }
    
    90% {
      /* margin-right: 2rem; */
    }
    100%{
      opacity: 0;
      /* margin-right: 0px; */
      /* margin-right: 2rem; */
    }
  }
  @keyframes moveLeft {
    0% {
      opacity: 0;
      /* margin-right: 2rem; */
    }
  
    90% {
      /* margin-right: 0rem; */
    }
    100%{
      /* margin-right: 0rem; */
      opacity: 1;
    }
  }
  /*========== */
  
  #card-date-icon{
    color: var(--card-date-color);
    margin-top: 0.95rem;
    margin-right: 0.14rem;
  }
  
  .post-card-date{
    font-size: 0.8em;
    margin-bottom: 0.45rem;
    margin-top: 1.2em;
    color: var(--card-date-color);
    font-family: var(--date-font)
  }
  
  /*--------Animations and hover -------------*/
  .post-card-div:hover, .post-card-div:active, .post-card-div:focus {
    height: 19em;
    overflow:hidden;
  }
  /*on hover, change image and text*/
  .post-card-clickable:hover .post-card-img, .post-card-clickable:hover .post-card-cover-date{
    user-select:none;
    -webkit-transform:scale(1.15); /* Safari and Chrome */
    -moz-transform:scale(1.15); /* Firefox */
    -ms-transform:scale(1.15); /* IE 9 */
    -o-transform:scale(1.15); /* Opera */
    transform:scale(1.15);
    text-decoration: none;
    user-select:none;
    min-height: 100%;
  }
  

  .post-card-clickable:focus .post-card-title{
    text-decoration: none;
    user-select:none;
  }
  .post-card-clickable .post-card-title{
    text-decoration: none;
    user-select:none;
  }
  .post-card-clickable:focus-within h2:focus {
    text-decoration: none;
    user-select:none;
  }

  .post-card-clickable:active h2:focus {
    text-decoration: none;
    user-select:none;
  }

`
