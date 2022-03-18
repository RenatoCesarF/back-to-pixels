import css from 'styled-jsx/css'
export default css.global`


.posts-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, 20rem);
    justify-content: center;
    row-gap: 0;
}

@media screen and (max-width: 640px) {
    .posts-grid{
      display: grid;
      grid-template-columns:max-content;
    }
  }
`