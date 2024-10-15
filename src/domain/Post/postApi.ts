
import { MetaDataPageAPI, PageAPI } from '@api';

import { PostAPI} from './PostTypes';

interface ResponseAPI {
  meta: MetaDataPageAPI[];
  data: PostAPI[];
}

async function getList(): Promise<PageAPI<PostAPI>> {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer MQ.zFHGVf1n10gL5-drMj8OIUBHmU-TwUyhaUL8y4kZZmNlXiXSvhWUSVYdhEXH',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();
  return data;

  // await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  // return postListMock;
}
export const postApi = {
  getList,
};
