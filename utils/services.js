import { get, post } from './request';

export const getBookList = (data, noLoading) => {
  return get({
    url: '/getBookList',
    data,
    noLoading
  })
}
