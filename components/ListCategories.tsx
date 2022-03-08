import { motion } from "framer-motion";

import Category from "@classes/category";
import { sortByCategoryImportance } from "@utils/sort";
import CategoryTag from "@components/CategoryTag";

interface ListOfCategoriesProps{categories: Array<Category>}

const ListOfCategories = ({categories}: ListOfCategoriesProps) =>{
    const sortedCategories: Category[] = categories.sort(sortByCategoryImportance);
    return(
        <>
            {
                sortedCategories.map((category: Category, index: number)=>{
                    return (
                        <motion.div 
                            whileHover={{ scale: 1.1 }}
                            style={{display: "inline-grid", transitionDuration: "0.07s", marginBottom: "0.2rem"}}
                            key={index}  
                        >
                            <CategoryTag category={category} key={index} />
                        </motion.div>
                    )
                })
            }
        </>
    )
}

export default ListOfCategories;

