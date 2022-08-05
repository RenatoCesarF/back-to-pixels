import { sortByCategoryImportance } from "@utils/sort";

const categoriesInfo = require('@helpers/categoriesInfo.json');


interface Category {
  key: CategoryType;
  name: string;
  about: string;
  color: string;
  textColor: string;
}

export enum CategoryType {
  //Categories
  DESIGN = 1,
  ART = 2,
  PROGRAMMING = 3,
  PYTHON = 4,
  //Tools / languages
  ARCHITECTURE = 5,
  TUTORIAL = 6,
  NEXTJS = 7,
  //Projects
  BLOG = 8,
  RINGS = 9,
}

export const getPostCategories = (categories: string[]): Category[] => {
  var categoryList: Category[] = [];

  categories.forEach((category: string) => {
    if (category === undefined || category === null) {
      throw new Error(`Category is null, undefined or invalid {${category}}`);
    }
    const tagkey: string = category.toString().toLowerCase();
    categoryList.push(getCategoryByKey(tagkey));
  });
  return categoryList.sort(sortByCategoryImportance);;
}

export const getAllCategories = (): Category[] => {
  const listOfCategories = Object.entries(categoriesInfo);

  const categoriesList: Category[] = listOfCategories.map((element) => {
    let tagKey = element[0];
    return getCategoryByKey(tagKey);
  })

  return categoriesList;
}

export const getCategoryByKey = (categoryName: string): Category => {
  var tagInfo: Category = categoriesInfo[categoryName.toLowerCase().trim()];

  if (tagInfo === undefined || tagInfo === null) {
    throw new Error(`CategoryName not find or undefined (${categoryName})`);
  }
  return tagInfo;
}

export const isCategoriesInCategories = (searchedCategories: Category[], targetCategories: Category[]): boolean => {
  return searchedCategories.every(cat => targetCategories.includes(cat));
}

export default Category