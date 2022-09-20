// pages/index/index.js
import { getBookList } from '../../utils/services';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMenu: false,
    showTool: false,
    refreshed: true,
    refreshText: '下拉即可刷新',
    bookList: [],
    page: 1,
    pageNum: 10,
    total: 0,
    finished: false,
    book: {}
  },

  onLoad() {
    this.getBooks(1);
  },

  getBooks(page, noLoading = false) {
    this.setData({page});
    getBookList({
      page: this.data.page,
      pageNum: this.data.pageNum
    }, noLoading).then(res => {
      this.setData({
        bookList: [...this.data.bookList, ...res.data.list],
        total: res.data.total,
      }, () => {
        if (this.data.total === this.data.bookList.length) {
          this.setData({finished: true});
        }
      });
    })
  },

  handleOpenMenu() {
    this.setData({ showMenu: true })
  },

  handleCloseMenu() {
    this.setData({ showMenu: false })
  },

  handleOpenTool(e) {
    console.log(e)
    this.setData({ showTool: true, book: e.target.dataset.book })
  },

  handleCloseTool() {
    this.setData({ showTool: false })
  },

  onPulling(event) {
    let detail = event.detail;
    if (detail.dy < 45) {
      this.setData({
        refreshText: '下拉即可刷新'
      });
    } else {
      this.setData({
        refreshText: '松开即可刷新'
      });
    }
  },

  onRefresh() {
    this.setData({ refreshText: 'Loading...' });
    getBookList({
      page: 1,
      pageNum: this.data.pageNum
    }, true).then(res => {
      this.setData({
        page: 1,
        bookList: res.data.list,
        total: res.data.total,
        refreshed: false,
        finished: false,
        refreshText: '下拉即可刷新'
      }, () => {
        if (this.data.total === this.data.bookList.length) {
          this.setData({finished: true});
        }
      });
    })
  },

  onScrolltolower() {
    if (this.data.finished) return;
    this.getBooks(this.data.page + 1, true);
  }

})