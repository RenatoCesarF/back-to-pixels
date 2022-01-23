import Category from '../classes/category'
const categoriesInfo = require('../helpers/categoriesInfo.json');
// import categoriesInfo from '../helpers/categoriesInfo'

interface tagProps{
    categoryKey: Category;
}

const CategoryTag: React.FC<tagProps> = (props: tagProps)=>{
    const tagkey: string = props.categoryKey.toString().toLowerCase();
    const tagInfo: Category  = categoriesInfo[tagkey];
    const isGradient: boolean = tagInfo.gradient ? tagInfo === null : false;

    return(
        <>
            <button id="tag" style={{backgroundColor: tagInfo.color, color: tagInfo.textColor }} >
                <p>{tagInfo.name}</p>
            </button>
        </>
    )
}

export default CategoryTag