
const categoriesInfo = require('../public/categoriesInfo.json');


interface Category{
    key: CategoryType;
    name: string;
    about: string;
    color: string;
    textColor: string;
    gradient: Array<string> | null;
}

export enum CategoryType {
  TRANSPARENT = 0,
  //Categories
  DESIGN = 1,
  ART = 2,
  PROGRAMMING = 3,
  //Tools / languages
  ARCHITECTURE = 4,
  NEXTJS = 5,
  //Projects
  BLOG = 6,
  RINGS = 7,
}


export const getCategories = (categories: any[]) => {
    var categoryList: Category[] = [];
  
    categories.forEach((category: Category) => {
      if(category === undefined || category === null){
        throw new Error("Categories cannot be null or undefined ");
      }
      const tagkey: string = category.toString().toLowerCase();
      var tagInfo: Category  = categoriesInfo[tagkey];
    
      categoryList.push(tagInfo);  
    });
    return categoryList;
}

export default Category