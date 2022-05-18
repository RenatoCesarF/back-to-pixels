import Category, { getCategoryByKey } from "@classes/category";
import { isCategoriesInCategories } from "@classes/category";

const categoryTest1 = getCategoryByKey('rings')
const categoryTest2 = getCategoryByKey('tutorial')

const categories1:Category[] = [categoryTest1, categoryTest2];

describe('Verify if post has same categories', () => {
    const categories2:Category[] = [categoryTest1, categoryTest2];
    it(`[rings, tutorial] in [rings,tutorial]`, () => {
        expect(isCategoriesInCategories(categories1, categories2)).toBe(true);
    });
});

describe('Verify if post has not the same categories', () => {
    const categories2:Category[] = [categoryTest1];
    it(`[rings, tutorial] in [rings]`, () =>{
        expect(isCategoriesInCategories(categories1, categories2)).toBe(false);
    });
});

describe('Verify if post has not the same categories', () => {
    const categories2:Category[] = [categoryTest1, categoryTest2, getCategoryByKey('blog')];
    it(`[rings, tutorial] in [rings, tutorial, blog]`, () =>{
        expect(isCategoriesInCategories(categories1, categories2)).toBe(true);
    });
});
