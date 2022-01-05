import css from 'styled-jsx/css'

export default css.global`
.post-cover-date{
    color: white;
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
  }
  .post-cover-div{
    background-color: var(--main-color);
    height: 100%;
    line-height: 100px;
    text-align: center;
  }
  .post-title{
    letter-spacing: -0.016em;
    line-height: 42px;
    margin-top: 0.56em;
    font-size: 34px;
    margin-bottom: 0.27em;
    font-family: fell, Georgia, Cambria, "Times New Roman", Times, serif;
    font-weight: 400;
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
  .post-container {
    justify-content: center;
    margin-left: 25vw;
    margin-right: 30vw; 
    margin-bottom: 10vh;
    font-family: charter, Georgia, Cambria, "Times New Roman", Times, serif;
  }
  
  @media  only screen and (max-width: 600px){
    .post-container{
      margin-left: 5vw;
      margin-right: 5vw; 
    }
  }
  @media  only screen and  (min-width:600px) and (max-width:960px){
    .post-container{
      margin-left: 14vw;
      margin-right: 20vw; 
    }
  
  }
`
