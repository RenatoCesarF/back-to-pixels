import css from 'styled-jsx/css'

export default css.global`
    /*============= TEAM PAGE ===============*/
    .teammate-cards-grid{
        display: grid;
        grid-template-columns: repeat(auto-fit, 20rem);
        justify-content: center;
        row-gap: 0;
    }
    /*============= TEAMMATE CARD ===========*/
    .teammate-card-div{
        background-color: red;
        cursor: pointer;
        color: var(--code-color);

        width: 300px;
        min-width: fit-content;
        
        display:flex;
        justify-content: space-between;
    }
    .teammate-card-name{
        font-size: 20px;
        margin-top: 15px;
        margin-left: 15px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: bold;
        
    }
    .teammate-card-author-role{
        padding:0;
        font-style: oblique;
        font-weight: 100;
        font-family: monospace;
        margin:0;
        margin-left: 10px;
        margin-bottom: 10px;
        color: var(--code-color);
    }


    /*======================== TEAM FILTERS ================*/
    .teammates-filters{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: space-between;
        align-items: center;
        justify-content: center;

        margin-top: 3rem;
    }
    .teammates-filters button{
        cursor: pointer;
        border: none;
        margin-right: 1rem;
        margin-bottom: 1rem;
        padding: 0 0.6rem;
        font-weight: bold;
        font-size: clamp(1rem, 1rem, 4vw);
        background-color: transparent;
        color: var(--post-text-color);

    }
    .teammates-filters .active{
        border-bottom: 0.2rem solid var(--secondary-color);
    }
`