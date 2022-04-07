import Category from '@classes/category'
import Link from 'next/link'
import globalStyles from './categoryTag.styles';
interface CategoryTagProps{
    category: Category
    isBig?: boolean
    insideText?: string
}

const CategoryTag: React.FC<CategoryTagProps> = (props: CategoryTagProps)=>{
    const tagPageURL: string = `/blog/tag/${props.category.key}`
    const category = props.category
    const buttonStyle = { backgroundColor: category.color }
    return(
        <>
            <style jsx global>
                {globalStyles}
            </style>
            <Link href={tagPageURL} passHref>
                    <button
                        name={`${props.category.name} button`}
                        className={`category-tag ${props.isBig ? "big" : " "}`}
                        style={buttonStyle} onClick={() => { } }
                    >
                        <span className='category-tag-text' style={{ color: category.textColor }}>
                            {category.name} 
                            {props.insideText ? 
                                <sub style={{marginLeft: ".2rem"}}> {props.insideText}</sub> 
                                : null
                            }
                        </span>
                    </button>
            </Link>
        </>
    )
}

export const CategoryTagTransparent: React.FC<CategoryTagProps> = (props: CategoryTagProps) => {
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

