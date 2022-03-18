import css from 'styled-jsx/css'
export default css.global`
.rss-feed-link{
    text-decoration: none;
    color: var(--rss-link-color);
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    transition: color .2s ease-in;
    font-size: 1em;
  }
  .rss-feed-link:hover{
    text-decoration: dashed;
    color: var(--main-color);
  }
  .rss-feed-container{
    display: inline-flex;
    margin: auto;
    margin-top: 3rem;
    padding: 10px;
    text-align: center;
    max-width: 100vw;
    width: 100%;
    justify-content: center;
  }
  
`