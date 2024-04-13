import Category, { getAllCategories } from "@classes/category";
import Post from "@classes/Post";
import { opacityChange } from "@helpers/animations";
import { motion } from "framer-motion";
import CategoryTag from "./CategoryTag/CategoryTag";


interface CategoriesTagPostCountProps {
    posts: Post[]
}

interface CategoriesTagPostCountElement {
    category: Category,
    amount: number,
}

const CategoriesTagPostCount = ({ posts }: CategoriesTagPostCountProps) => {
    const categoryList = getCategoriesAndAmount(posts);
    return (
        <div className="category-count">
            {
                categoryList.map((value: CategoriesTagPostCountElement, index: number) => {
                    if (value.amount === 0)
                        return <></>

                    return (
                        <motion.div variants={opacityChange} key={index} className="category-count">
                            <div className="category-count-element" key={index}>
                                <CategoryTag category={value.category} internText={value.amount.toString()} />
                            </div>
                        </motion.div>
                    )
                })

            }
        </div>
    );
}


const getCategoriesAndAmount = (posts: Post[]): CategoriesTagPostCountElement[] => {
    const categories = getAllCategories();
    const result: CategoriesTagPostCountElement[] = [];

    categories.map((category: Category) => {
        result.push({ category: category, amount: 0 });
    });
    posts.map((post: Post) => {
        result.map(ele => {
            const isCategoryInElement = post.categories.findIndex((cat) => cat.key == ele.category.key) != -1;
            if (isCategoryInElement) {
                ele.amount += 1
            }
        })
    })
    return result;
}

export default CategoriesTagPostCount;
