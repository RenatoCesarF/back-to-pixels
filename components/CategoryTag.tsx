import Category, { CategoryType } from '../classes/category'

interface tagProps{
    category: Category
}

const CategoryTag: React.FC<tagProps> = (props: tagProps)=>{
    const category = props.category
    const buttonStyle = {
        backgroundColor: category.color,
        backgroundImage: category.gradient ? `linear-gradient(90deg, ${category.gradient[0]}, ${category.gradient[1]})` : "none"
    }

    return(
        <button className="category-tag" style={buttonStyle} onClick={()=>console.log("a")}>
            <p className='category-tag-text' style={{color: category.textColor }}>{category.name}</p>
        </button>
    )
}

export const CategoryTagTransparent: React.FC<tagProps> = (props: tagProps) => {
    const category = props.category
    const gradientColor:string  = category.color;
    const style = {backgroundImage: `linear-gradient(90deg, ${gradientColor} 7px, #00000000 17px)`}
    return (
        <button className="category-tag transparent-tag" style={style}>
            <p className='category-tag-text' style={{ color: 'transparent' }}>Tf</p>
        </button>
    )
}

export default CategoryTag;

