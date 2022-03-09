import { readdirSync } from 'fs';
import { join } from 'path';
import { createPost } from '@classes/postType';
import { isPostValid } from '@utils/verifyPosts';

describe('TESTING POSTS', () => {
  const postsFiles = readdirSync(join('posts'));

  postsFiles.forEach((filename) =>{
    const createdPost = createPost(filename);
    
    test(`Testing post [${createdPost.slug}] `, () => {
      expect(isPostValid(createdPost)).toBe(true);
    });
  });
});