import css from 'styled-jsx/css'

export default css.global`
    /*============= TEAM PAGE ===============*/
    .teammate-cards-grid{
        display: grid;
    
        grid-template-columns: repeat(auto-fit, 18rem); 
        justify-content: center;
        row-gap: 0; 
    }
     
    @media only screen and (min-width:4px) and (max-width:577px){
        .teammate-card-div{ width: 11rem;}        
        .teammate-cards-grid{
          grid-template-columns: repeat(auto-fit, 12rem);
        }
    }
    @media only screen and (max-width: 383px) {
        .teammate-card-div{ width: 90vw; }        
        .teammate-cards-grid{
          grid-template-columns:max-content;
        }
    }
 
    /*============= TEAMMATE CARD ===========*/
    .teammate-card-div{
        cursor: pointer;
        position: relative;
        color: var(--code-color);

        height: clamp(7rem, 27vmin, 10rem ); 
        width: clamp(fit-content, 18.5rem, 90vw);

        display:flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        border-radius: 10px;
    }

    .teammate-card-name{
        font-size: 1.2em;
        margin-top: 15px;
        margin-left: 15px;
        margin-right: 4rem;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: bold;
        display: flex;
        flex-wrap: wrap;
    }
    .teammate-card-roles-div{
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
    }
    .teammate-card-author-role{
        padding:0;
        font-style: oblique;
        font-weight: 100;
        font-family: monospace;
        margin:0;
        margin-left: 20px;
        margin-bottom: 10px;
        color: var(--code-color);
    }

    .teammate-image-container{
        width: 50%;
        height: 100%;
    }
    .teammate-card-background-image{
        background-size:cover;
        object-fit: cover;
        margin-left: auto;
        margin-right: auto; 
        height:100%;
        width: 100%;
        align-self: end;
        border-radius: 10px;
    }
    .teammate-card-gradient{
        position:absolute;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        display: grid;
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