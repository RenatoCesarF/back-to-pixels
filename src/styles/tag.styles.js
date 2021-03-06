
import css from 'styled-jsx/css'
export default css.global`

.tag-especific-page{
    margin-left: clamp(1rem, 1rem, 1rem);
    margin-right: clamp(1rem, 1rem, 1rem);
    color: #2d2d2d;
}

.tag-page-description{
    display: flex;
    justify-content: center;
}
.tag-especific-page h2{
    margin: 0;
    margin-left: clamp(0.3rem,1rem, 3vw);
    font-size: 1.5rem;
}
.tag-especific-page h1{
    font-family: 'Source Code Pro', serif;
    margin-left: clamp(0.2rem,2rem, 4vw);
    margin-top: 0.35vh;
    font-size: 2rem;
}

.tag-especific-page p{
    font-size: 1.1rem;
    margin-left: clamp(5vw, 1rem, 20vw);
    margin-right: clamp(5vw, 1rem, 20vw);
}


.tag-page-posts-section{
    background-color: var(--constrated-brackground-color);
    height: max-content;
    min-height: max-content;
    padding: 3rem 0 4rem 0;
}

  `