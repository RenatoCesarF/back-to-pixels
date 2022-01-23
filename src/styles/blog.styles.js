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
  width: 17rem;
  height: 17rem;
  cursor: pointer;
  
  
  display: flex;
  flex-direction: column;
  
  background-color: var(--card-color);
  border-left:   0.2rem solid var(--secondary-color);
  border-bottom: 0.15rem solid var(--secondary-color);
  border-radius: 0.7rem;
  margin: 0.5rem;
  user-select: none;
  transition: height 0.69s cubic-bezier(.65,-0.53,.24,1.12);
  
  -webkit-box-shadow:  9px 9px 10px -6px rgba(58, 58, 58, 0.69);
  -moz-box-shadow:  9px 9px 10px -6px rgba(58, 58, 58, 0.69);
  box-shadow: 9px 9px 10px -6px rgba(58, 58, 58, 0.69);
}

/*----------IMAGE------------*/
.post-card-image-container{
  background-color: var(--main-color);
  border-radius: 0.5rem 0.5rem 0px 0px;
  height: 9rem;
  display: inline-flex; 
  width: 100%;
  overflow: hidden;
}


.post-card-img{
  border-radius: 0.5rem 0.5rem 0px 0px;
  width: 100%;
  height: 9rem;
  object-fit: cover;
  vertical-align: middle;
  transition: opacity 4s cubic-bezier(.65,-0.53,.24,1.12);
  transition: transform 1.3s cubic-bezier(.165,.84,.44,1);
}
.post-card-cover-date{
  color: var(--main-font-color);
  text-align: center;
  margin-top: 3.5rem;
  margin-left: auto;
  margin-right: auto;
  vertical-align: middle;
  font-family: 'Source Code Pro', sans-serif;
  transition: transform 1.3s cubic-bezier(.165,.84,.44,1);
}

@media screen and (max-width: 640px) {
  .post-card-div{width: 90vw;}
  .posts-grid{
    display: grid;
    grid-template-columns:max-content;
  }
}
/*----------CONTENT-----------*/
.post-card-container{
  margin-left: 0.5vw;  
  margin-right: 0.5vw;  
  margin-top: 0.2vh;  
  margin-bottom: 0.5vh;  
  height: auto;

}
.post-card-title{
  font-family: 'Inconsolata', sans-serif;
  font-size: 1.15rem;
  margin: 0;
  margin-top: 0.2rem;
  margin-left: 0.4rem;
  color: var(--card-text-color)
}
.excerpt-post-card-div{
  position: relative; 
  z-index: 0;
  
  width: 100%;
  background-color: var(--card-color);
  margin-left: 0.15rem;
  margin-top: 0.1rem;
}
.post-card-resume{
  margin: 0;
  display: block;
  position: absolute;
  height: auto;
  
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  word-break: keep-all;
  font-size: 0.80rem;
  text-size-adjust: 20%;
  
  color: var(--card-text-color);

  transition: all .7s cubic-bezier(.165,.84,.44,1);
}

/*------------FOOOTER--------------*/
.post-card-footer{
  z-index: 1;
  margin-top: auto;
  background-color: var(--card-color);
  border-radius: 0px 0px 0.7rem 0.7rem;
  height: auto;
  
}
.card-date-row{
  overflow: hidden;
  display: inline-flex;
  margin-left: 0.3rem;
}

#card-date-icon{
  color: #636363;
  margin-top: 0.95rem;
  margin-right: 0.14rem;
}

.post-card-date{
  color: #636363;
  font-size: 0.9em;
  margin-bottom: 0.45rem;
  vertical-align: bottom;
  font-family: sohne,"Helvetica Neue", Helvetica, Arial, sans-serif;
}

/*--------Animations and hover -------------*/
.post-card-div:hover{
  height: 20em;
  overflow:hidden;
}
/*on hover, change image and text*/
.post-card-div:hover .post-card-img, .post-card-div:hover .post-card-cover-date{
  -webkit-transform:scale(1.15); /* Safari and Chrome */
  -moz-transform:scale(1.15); /* Firefox */
  -ms-transform:scale(1.15); /* IE 9 */
  -o-transform:scale(1.15); /* Opera */
  transform:scale(1.15);
  min-height: 100%;
}

`
