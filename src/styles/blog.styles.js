import css from 'styled-jsx/css'
export default css.global`

.page-title{
    margin-top: 1rem;
    margin-left: 1.6rem;
    padding-left: 0.6rem;
    color: var(--card-text-color);
    border-bottom: solid  7px;
    border-left: solid 7px;
    width: 7rem;
}

.posts-written{ 
    display:flex;
    /* justify-content: center; */
    
    margin: 1rem 0 1rem 1.9rem;
    /* margin: 2rem 0 1rem 0; */
}

.post-count-text{
    line-height: 2;
    font-family:'Source Code Pro', serif;
}
.post-count{
    font-family:'Source Code Pro', serif;
    font-size: 1.5em;
    font-weight: 900;
    margin: 0 0.5rem 0 0.5rem;
}
`