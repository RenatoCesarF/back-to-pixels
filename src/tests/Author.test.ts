import { getAuthor, getAuthorsKeyList, getAuthorsList } from "@classes/Author"

describe("Testing getAuthor function data return", () =>{
    const author = getAuthor('renato')
    author.image_path
    test("GetAuthor name", () => expect(author.name).toBe("Renato Cesar"))
    test("GetAuthor email", () => expect(author.email).toBe("re.fbarcellos@hotmail.com"))
    test("GetAuthor instagram", () => expect(author.instagram).toBe("eu_renato_"))
    test("GetAuthor twitter", () => expect(author.twitter).toBe("nerat0"))
    test("GetAuthor image_path", () => expect(author.image_path).toBe("/images/authors/renato.webp"))
})
describe("Testing getRoleFromString function", () =>{
    const authorsList = getAuthorsKeyList()
    test("First author is 'renato'", () => expect(authorsList[0]).toBe("renato"))
    test("Second author is 'tayna'", () => expect(authorsList[1]).toBe("tayna"))
    test("Thrird author is 'bruno'", () => expect(authorsList[2]).toBe("bruno"))
})
describe("Testing getAuthorsList function", () =>{
    const authorsList = getAuthorsList()
    test("First author is 'renato'", () => expect(authorsList[0][0]).toBe("renato"))
    test("Second author is 'tayna'", () => expect(authorsList[1][0]).toBe("tayna"))
    test("Thrird author is 'bruno'", () => expect(authorsList[2][0]).toBe("bruno"))
})