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
    
    margin: 1rem 0.2rem;
    max-width: 100vw;
}
  .button-text{
    color: var(--button-text-color);
    margin: 0.3rem 0;
    font-size: 1em;

  }
  .button-icon{
    color: var(--button-text-color);
    width: 1.6em;
    height: 1.6em;
    margin: 0.1rem;
    // margin-top: 3px;
  }
  
`
