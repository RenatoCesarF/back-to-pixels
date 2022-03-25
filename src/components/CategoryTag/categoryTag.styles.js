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
    margin-right: 0.3rem;
    max-width: 100vw;
}
.category-tag-text{
    font-size: 1em;
    color: var(--font-contrast-color);
    font-family: "Open Sans", sans-serif;
    font-weight: bolder;
  }

.transparent-tag{
  background-color:transparent;
  background-image: linear-gradient(90deg, grey 5px, #00000000 10px);
  margin-right: 0px;
  padding-right: 0px;
}
.transparent-tag span{
  margin: 0;
}

.big{
  font-size: .8em;
  padding: 0.4rem;
  margin: 0.3rem;
}
.big span{

}
`
