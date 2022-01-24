import Category, { CategoryType } from '../classes/category'
const categoriesInfo = require('../helpers/categoriesInfo.json');
// import categoriesInfo from '../helpers/categoriesInfo'

interface tagProps{
    categoryKey: CategoryType
}

const CategoryTag: React.FC<tagProps> = (props: tagProps)=>{
    const tagkey: string = props.categoryKey.toLowerCase();
    const tagInfo: Category  = categoriesInfo[tagkey];
    const isGradient: boolean = tagInfo.gradient ? tagInfo === null : false;

    return(
        <button className="category-tag" style={{backgroundColor: tagInfo.color}} >
            <p className='category-tag-text' style={{color: tagInfo.textColor }}>{tagInfo.name}</p>
        </button>
    )
}

export const CategoryTagTransparent: React.FC<tagProps> = (props: tagProps) => {
    const tagkey: string = props.categoryKey.toLowerCase();
    const gradientColor:string  = categoriesInfo[tagkey].color;
    const style = {backgroundImage: `linear-gradient(90deg, ${gradientColor} 7px, #00000000 17px)`}
    return (
        <button className="category-tag transparent-tag" style={style}>
            <p className='category-tag-text' style={{ color: 'transparent' }}>Tf</p>
        </button>
    )
}

export default CategoryTag

