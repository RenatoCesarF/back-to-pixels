import css from 'styled-jsx/css'

export default css.global`

/*----------BLOG PAGE ----------*/

.posts-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, 20rem);
    justify-content: center;
}
  
  /*----------POST CARD------*/
.post-card-div{
    background-color: var(--card-color);
    width: 17rem;
    height: 17rem;
    cursor: pointer;
    /* border: 2px solid  */
    border-left: solid var(--secondary-color);
    border-bottom: solid var(--secondary-color);
    border-radius: 0.7rem;
    margin: 0.5rem;
    /* transition: height 1s cubic-bezier(0,.68,.5,.94); */
    transition: height 0.69s cubic-bezier(.65,-0.53,.24,1.12);
    
    -webkit-box-shadow:  9px 9px 10px -6px rgba(58, 58, 58, 0.69);
    -moz-box-shadow:  9px 9px 10px -6px rgba(58, 58, 58, 0.69);
    box-shadow: 9px 9px 10px -6px rgba(58, 58, 58, 0.69);
  }
  
  .post-card-image-container{
    background-color: var(--main-color);
    border-radius: 0.5rem 0.5rem 0px 0px;
    height: 9rem;
    display: inline-flex; /* change the default display type to inline-block */
    width: 100%;
    overflow: hidden;
  }

  .post-card-img{
    border-radius: 0.5rem 0.5rem 0px 0px;
    width: 100%;
    height: 9rem;
    object-fit: cover;
    vertical-align: middle;
    transition: opacity 4s cubic-bezier(.65,-0.53,.24,1.12);
    transition: transform 1.3s cubic-bezier(.165,.84,.44,1);
  }
  .post-card-cover-date{
    color: var(--main-font-color);
    text-align: center;
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    vertical-align: middle;
    font-family: 'Source Code Pro', sans-serif;
    transition: transform 1.3s cubic-bezier(.165,.84,.44,1);
  }
  
  @media screen and (max-width: 640px) {
    .post-card-div{width: 90vw;}
    .posts-grid{
      display: grid;
      grid-template-columns:max-content;
    }
  }
  
  .post-card-a-tag{
    color: inherit;
    text-decoration: inherit;
  }
  
  .post-card-container{
    margin-left: 0.5vw;  
    margin-right: 0.5vw;  
    margin-top: 0.2vh;  
    margin-bottom: 0.5vh;  
    height: auto;
  }
  .post-card-title{
    font-family: 'Inconsolata', sans-serif;
    font-size: 1.15rem;
    margin: 0;
    margin-top: 0.2rem;
    margin-left: 0.4rem;
    color: var(--card-text-color)
  }
  .post-card-resume{
    margin: 0;
    margin-left: 0.2rem;
    font-size: 0.80rem;
    color: var(--card-text-color)
  }
  
  .post-card-date{
    color: var(--card-text-color);
    font-size: 12px;
    bottom: 0px;
  }
  .post-card-date-div{
      transition: all 0.69s cubic-bezier(.65,-0.53,.24,1.12);  
  }

  /*--------Animations and hover -------------*/
  /*on hover, change image and text*/
  .post-card-div:hover .post-card-img,.post-card-div:hover .post-card-cover-date{
    -webkit-transform:scale(1.15); /* Safari and Chrome */
    -moz-transform:scale(1.15); /* Firefox */
    -ms-transform:scale(1.15); /* IE 9 */
    -o-transform:scale(1.15); /* Opera */
    transform:scale(1.15);
  }


  .post-card-div:hover{
    height: 19em;
  }
`
