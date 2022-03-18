import Category from '@classes/category'
import globalStyles from './categoryTag.styles'
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
        <>
        <style jsx global>
            {globalStyles}
        </style>
        <button name={`${props.category.name} button`}  className="category-tag" style={buttonStyle} onClick={() => {}}>
            <span className='category-tag-text' style={{color: category.textColor }}>{category.name}</span>
        </button>
        </>
    )
}

export const CategoryTagTransparent: React.FC<tagProps> = (props: tagProps) => {
    const category = props.category
    const gradientColor:string  = category.color;
    const style = {backgroundImage: `linear-gradient(90deg, ${gradientColor} 7px, transparent 17px)`}
    return (
        <>
            <style jsx global>
                {globalStyles}
            </style>
            <button name={`${props.category.name} button`} className="category-tag transparent-tag" style={style}>
                <span className='category-tag-text' style={{ color: 'transparent' }}>dt</span>
            </button>
        </>
    )
}

export default CategoryTag;

