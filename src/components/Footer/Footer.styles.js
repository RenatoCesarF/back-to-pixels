import css from 'styled-jsx/css'
export default css.global`

/*--------------------FOOTER------------*/
.page-footer{
  background: var(--header-background-color);
  text-align: center;
  height: 3rem; 
  width: 100%;
  margin:0px 0px;

  position: absolute;  

}
.page-footer::after{
  position: absolute;
  bottom: 0; 
}
.page-footer p{
  color: var(--font-contrast-color);
  margin: 0;
  font-size: 0.8em;
  padding-top: 0.9rem;
}

`