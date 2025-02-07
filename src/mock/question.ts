import { Random } from 'mockjs';

export default [
  {
    url: '/api/question/id',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: {
          id: Random.id(),
          title: 'z在',
        },
      };
    },
  },
];