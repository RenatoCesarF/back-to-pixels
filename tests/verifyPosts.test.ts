// const verifyAllPosts = require('../utils/verifyPosts');



import { readdirSync } from 'fs';
import { join } from 'path';
import { createPost } from '../classes/postType';
import { verifyPostValues } from '../utils/verifyPosts';

describe('Testing every post ', () => {
  const postsFiles = readdirSync(join('posts'));
  postsFiles.forEach((filename) =>{
    const createdPost = createPost(filename);
    test(`Testing post [${createdPost.slug}] `, () => {
      expect(verifyPostValues(createdPost)).toBe(true);
    });
  })
});