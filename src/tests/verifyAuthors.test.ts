import isAuthorValid from '@utils/verifyAuthors';
import authorsData from '@helpers/authorsData'

describe('Testing isAuthorValid for every Author ', () => {
    for(let author in authorsData){
        test(`verifying author [${author}]`, () => {
            expect(isAuthorValid(author.toString())).toBe(true);
        });
    }
})


