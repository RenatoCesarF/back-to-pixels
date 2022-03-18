import css from 'styled-jsx/css'

export default css.global`

.teammate-page{
    justify-content: center;
    margin: 0 10vw 10vh 15vw;
}
.teammate-page p{
    line-height: 1.85rem;
    font-size: 1.1em;
}
.teammate-page-author-info-row{
    display: flex;
}
.teammate-page-author-image{
    margin-right: 1rem;
    border-radius: 2%;
}

@media screen and (max-width: 860px){
    .teammate-page{margin: 0 5vw;}
    .teammate-page-author-info-row{flex-direction: column;}
    .teammate-page-author-image{
        /* height: 70vw; */
        height: 24rem;
        max-width: 90vw;
        max-height: 90vw;
        margin: 0 0 1rem 0;
        padding: auto;
    }
}

.author-roles{
    display: flex;
}
.author-roles > * {
    display: block;
    margin: 0.1rem 0.3rem;
}

.teammate-page-posts-section{
    background-color: var(--constrated-brackground-color);
    height: max-content;
    min-height: max-content;
    padding: 3rem 0 3rem 0;
}

`