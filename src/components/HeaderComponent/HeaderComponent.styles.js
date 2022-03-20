import css from 'styled-jsx/css'
export default css.global`

.header {
    overflow: hidden;
    z-index: 1;
    background-color: var(--header-background-color);
    display: flex;
    justify-content: space-between;
    
  }
  
  .header .logo{
    margin-left: 1.3rem;
    margin-top:0.5rem;
    margin-bottom: 0.7em;
    height: 3.5rem;
    cursor: pointer;
    aspect-ratio: 129/56;
  }
  .header .logo-menu-line{
    display: inline-flex;
    /* justify-content: space-between; */
  }
  .header a {
    float: left;
    color: var(--header-option-text);
    font-weight: 700;
    text-align: center;
  
    margin: 0.2vh 0.6vw;
    padding: 8px 0px 8px 0px;
    padding-right: 14px;
  
    line-height: 1.4em;
    text-indent: 1rem;
  
    text-decoration: none;
    font-size: 18px; 
    border-radius: 3px;
  }
  .header a:hover {
    background-color: var(--header-option-hover);
  }
  .header a.active {
    background-color:var(--header-option-activated);
    color: var(--header-text-option-activated);
  
  }
  .menu-icon-div{
    display: none;
  }
  
  .header-right {
    float: right;
    margin-top:1rem;
    margin-right: 1rem;
    margin-bottom:1rem;
    display: flex;
    height: auto;
  }
  
  
  @media screen and (max-width: 500px) {
    .theme-switcher{
      user-select: none;
      position: absolute;
      top: 1.2rem;
      right: 4.5rem;
    }
    .header{
      display: block;
    }
    .logo{
      padding-top:0;
      padding-bottom:0;
      margin-bottom: 0;
    }
    .header .logo-menu-line{
      margin-top: 0.3rem;
  }
    #home-option{
      margin-top: 20px;
    }
    .header a {
      float: none;
      display: block;
      text-align: left;
      margin-bottom: 7px;
      margin-left: 3vw;
      margin-right: 3vw;
    }
    .header-right {
      margin-bottom:0rem;
      display: block;
      float: none;
      margin-top:  0px;
      margin-right: 0px;
      visibility: visible;
      height: 150px;
      transition: height .5s  cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .closed{
      transition: height .5s cubic-bezier(0.175, 0.885, 0.32, 1.275), visibility .32s ;
      height: 0px;
      margin-top: 0px;
      margin: 0px;
      float: none;
      display: block;
      overflow-y: hidden;
      /* visibility: hidden; */
    }
    /*-------MENU----------*/
    .menu-icon{
      display: flex;
      color: var(--secondary-color);
      width: 40px;
      height: 40px;
    }
   
    .header .menu-icon-div{
      color: var(--secondary-color);
      position: absolute;
      right: 0;      
      margin-right: 2vw;
      align-items: center;
      display: flex;
    }
  }
  

  /*===========MENU ICON ============*/
@media screen and (max-width: 500px){ 
  .menu-toggle {
    box-sizing: border-box;
    background-color: transparent;
    width: 3.3em;
    height: 5.8em;
    border: none;
    outline:0;
    display: block;
    visibility: visible;
    margin-right: 0.5rem;
    margin-left: 1rem;
  }
  .menu-toggle span {
    background-color: var(--open-menu-icon-color);
    display: block;
    height: 0.3em;
    border-radius: 30px;
    margin-bottom: .5em;
 
    transition: ease 0.3s;
  }
  button.toggled span:nth-child(1) {
    transform: rotate(45deg);
    margin-bottom: .8em;
    margin-top:.8em;
  }
  
  button.toggled span:nth-child(2) {
    transform: rotate(-135deg);
    margin-bottom: .8em;
    margin-top: -1.1em;
  }
  
  button.toggled span:nth-child(3) {
    transform: rotate(-45deg);
    margin-bottom: .8em;
    margin-top: -1.1em;
  }  
}

.switch-theme-icon{
    color: var(--theme-switch-color);
    width: 1.5rem;
    height: 1.5rem;
    user-select: none;
    margin: 0.5rem;
    margin-top: 0.6rem;
  }
  
`