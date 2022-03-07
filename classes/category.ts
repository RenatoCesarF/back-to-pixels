
const categoriesInfo = require('../categoriesInfo.json');


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
  TUTORIAL = 6,
  //Projects
  BLOG = 7,
  RINGS = 8,
}


export const getPostCategories = (categories: any[]): Category[] => {
    var categoryList: Category[] = [];
  
    categories.forEach((category: Category) => {
      if(category === undefined || category === null){
        throw new Error("Category is null, undefined or invalid");
      }
      const tagkey: string = category.toString().toLowerCase();
      categoryList.push(getCategoryInfo(tagkey));  
    });
    return categoryList;
}

export const getAllCategories = (): Category[] =>{
  const listOfCategories = Object.entries(categoriesInfo);
  
  const categoriesList: Category[] = listOfCategories.map((element) => {
    let tagKey = element[0];
    return getCategoryInfo(tagKey);
  })

  return categoriesList;
}

export const getCategoryInfo = (categoryName: string): Category =>{
  var tagInfo: Category  = categoriesInfo[categoryName];

  if(tagInfo === undefined || tagInfo === null){
    throw `CategoryName not find or undefined (${categoryName})`
  }
  return tagInfo;
}
 
export default Category