import css from 'styled-jsx/css'

export default css.global`
.button-div{
    background-color: var(--button-color);
   
    border-radius: 0.3rem;
    display: inline-flex;
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    border: none;
    text-align:center;
    vertical-align:middle;
    
    margin: 0.5rem 0.4rem;
    max-width: 100vw;
  }
  .button-text{
    color: var(--button-text-color);
    margin: 0.3rem 0;
    font-size: 1em;
    font-weight: 400;
    font-family: 'Inter';    
  }
  .button-icon{
    color: var(--button-text-color);
    width: 1.6em;
    height: 1.6em;
    margin: 0.1rem;
    align-self: self-start;
  }
  
`
