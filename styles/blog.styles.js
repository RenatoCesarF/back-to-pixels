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
    background-color: var(--secondary-color);
    width: 17rem;
    height: 15rem;
    cursor: pointer;
    border: 2px solid var(--card-border-color);
    border-radius: 0.7rem;
    margin: 0.5rem;

    -webkit-box-shadow:  9px 9px 10px -6px rgba(58, 58, 58, 0.69);
    -moz-box-shadow:  9px 9px 10px -6px rgba(58, 58, 58, 0.69);
    box-shadow: 9px 9px 10px -6px rgba(58, 58, 58, 0.69);
}
  .post-card-image-container{
    background-color: var(--main-color);
    border-radius: 0.5rem 0.5rem 0px 0px;
    height: 9rem;
  }
  .post-card-img{
    border-radius: 0.5rem 0.5rem 0px 0px;
    width: 100%;
    height: 9rem;
    object-fit: cover;
  }
  .post-card-cover-date{
    color: var(--main-font-color);
    text-align: center;
    padding-top: 3rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
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
  }
  .post-card-title{
    font-family: 'Inconsolata', sans-serif;
    margin: 0;
    margin-top: 0.6rem;
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
    margin-left: 0.2rem
  }
  
`
