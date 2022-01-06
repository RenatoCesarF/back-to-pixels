import css from 'styled-jsx/css'

export default css.global`
.button-div{
    background-color: var(--secondary-color);
    color: var(--code-color);
    padding: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    justify-content: center;
    display: inline-flex;
    height: qrem;
    max-width: 100vw;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    font-size: 0.7rem;
    text-align: center;
    line-height: 3px;

    margin-top: 3rem;
  }
  .button-text{
    user-select: none;
    font-family: 'Source Sans Pro', sans-serif;
    color: var(--button-text-color);
    vertical-align: center;
    padding-top: 4px;
  }
  .button-icon{
    width: 1.6rem;
    height: 1.6rem;
  }
  
`
