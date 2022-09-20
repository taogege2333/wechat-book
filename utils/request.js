const BASE_URL = 'https://mock.mengxuegu.com/mock/6326bc9ceb2aea51d36d1278/api';
const TIMEOUT = 10000;

export const request = (options) => {
  !options.noLoading && wx.showLoading({
    title: '加载中...',
    mask: true
  })
  return new Promise((resolve, reject) => {
    wx.request({
      timeout: TIMEOUT,
      ...options,
      url: BASE_URL + options.url,
      success({ data }) {
        if (data.code === '0000') resolve(data);
        else reject(data);
      },
      fail({ errMsg }) {
        reject(errMsg);
      },
      complete() {
        wx.hideLoading();
      }
    })
  })
}

export const get = (options) => {
  return request({
    ...options,
    method: 'GET'
  });
}

export const post = (options) => {
  return request({
    ...options,
    method: 'POST'
  });
}
