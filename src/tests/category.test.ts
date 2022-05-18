import Category, { getAllCategories, getCategoryByKey, isCategoriesInCategories } from "@classes/category"


describe("Testing getAllCategories function", ()=> {
    const allCategories = getAllCategories();

    test("The amount of categories should be 8", () => expect(allCategories.length).toBe(8))

})
describe("Testing getCategoryByKey function", () =>{
    const category = getCategoryByKey('rings')
    test("Category name should be Rings", () => expect(category.name).toBe("Rings"))
    test("Category key should be Rings", () => expect(category.key).toBe("rings"))
})

describe("Testing Category isCategoriesInCategories function", () =>{
    const categoryTest1: Category = getCategoryByKey("rings")
    const categoryTest2: Category = getCategoryByKey("blog")
    const categoryTest3: Category = getCategoryByKey("tutorial")

    const categoriesList1: Category[] = [categoryTest1]
    const categoriesList2: Category[] = [categoryTest1, categoryTest2]
    const categoriesList3: Category[] = [categoryTest1, categoryTest3]

    test("Is list 1 in list 2, should be true", ()=>{
        const isList1InsideList2 = isCategoriesInCategories(categoriesList1, categoriesList2);
        expect(isList1InsideList2).toBe(true)
    })

    test("Is list 3 in list 2, should be false", ()=>{
        const isList3InsideList2 = isCategoriesInCategories(categoriesList3, categoriesList2);
        expect(isList3InsideList2).toBe(false)
    })
})