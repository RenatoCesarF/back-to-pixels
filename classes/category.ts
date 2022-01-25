
const categoriesInfo = require('../helpers/categoriesInfo.json');

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
  NEXTJS = 4,
  //Projects
  BLOG = 5,
  RINGS = 6,
}


export const getCategories = (categories: any[]) => {
    var categoryList: Category[] = [];
  
    categories.forEach((category: Category) => {
      if(category === undefined || category === null){
        return;
      }
      const tagkey: string = category.toString().toLowerCase();
      var tagInfo: Category  = categoriesInfo[tagkey];
      

      if(tagInfo.gradient && tagInfo.gradient.length < 2){
          throw new Error("Gradiend need to be an array with 2 values ");
      }
      categoryList.push(tagInfo)
      
    });
    return categoryList;
}




export default Category