import { createPost, getPostsFileName } from '@classes/Post';
import { isPostValid } from '@utils/verifyPosts';

describe('TESTING POSTS', () => {
  const postsFiles = getPostsFileName();

  postsFiles.forEach((filename) =>{
    const createdPost = createPost(filename);
    
    test(`Testing post [${createdPost.slug}] `, () => {
      expect(isPostValid(createdPost)).toBe(true);
    });

  });
});