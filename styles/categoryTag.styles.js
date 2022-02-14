import css from 'styled-jsx/css'

export default css.global`

.category-tag{
    z-index: 2;
    background-color:var(--secondary-color);
    border-radius: 0.375rem;
    border: none;
    cursor: pointer;
    text-align:center;
    vertical-align:middle;
    padding: 0.2rem 0.4rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    max-width: 100vw;
  }
  .category-tag-text{
    font-size: 1em;
    color: var(--main-font-color);
    font-family: "Open Sans", sans-serif;
    font-weight: bolder;
    margin: 0;
  }
  .transparent-tag{
    margin:0;
    background-color:transparent;
    background-image: linear-gradient(90deg, grey 5px, #00000000 10px);
    margin-right: 0px;
    padding-right: 0px;
  }
`
