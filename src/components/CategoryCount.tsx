import Category, { getAllCategories } from "@classes/category";
import Post from "@classes/Post";
import { opacityChange } from "@helpers/animations";
import { motion } from "framer-motion";
import CategoryTag from "./CategoryTag/CategoryTag";


interface CategoryCountProps{
    posts: Post[]
}

interface CategoryCountElement {
    category: Category,
    amount: number,
}

const CategoryCount = ({posts}: CategoryCountProps) =>{
    const categoryList = getCategoriesAndAmount(posts);
    return (
        <motion.div variants={opacityChange} className="category-count">
            {
                categoryList.map((value: CategoryCountElement, index: number) =>{
                    return(
                        <div className="category-count-element" key={index}>
                            <CategoryTag category={value.category} insideText={value.amount.toString()}/>
                        </div>
                    )
                })
            }
        </motion.div>
    );
}


const getCategoriesAndAmount = (posts: Post[]): CategoryCountElement[] => {
    const categories = getAllCategories();
    const result: CategoryCountElement[] = [];

    categories.map((category: Category) => {
        result.push({category: category, amount: 0});
    });
    posts.map((post: Post) =>{
        result.map(ele =>{
            const isCategoryInElement = post.categories.findIndex((cat) => cat.key == ele.category.key) != -1;
            if(isCategoryInElement){
                ele.amount +=1
            }
        })        
    })
    return result;
}

export default CategoryCount;
