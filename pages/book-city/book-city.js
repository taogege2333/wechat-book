// pages/book-city/book-city.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        name: '精选',
        component: '精选'
      },
      {
        name: '男频',
        component: '男频'
      },
      {
        name: '女频',
        component: '女频'
      },
      {
        name: '排行',
        component: '排行'
      },
      {
        name: '书单',
        component: '书单'
      }
    ],
    slideTranslate: 0,
    currentIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { windowWidth: width } = wx.getSystemInfoSync()
    const tabWidth = width / this.data.tabs.length;
    this.currentSlideTranslate = tabWidth / 2 - 8
    this.setData({ slideTranslate: this.currentSlideTranslate });
  },

  handleTabClick(e) {
    this.setData({ currentIndex: e.target.dataset.index });
  },

  onSwiperChange(e) {
    this.setData({ currentIndex: e.detail.current });
  },

  onTransition(e) {
    const { windowWidth: width } = wx.getSystemInfoSync()
    const tabWidth = width / this.data.tabs.length;
    const progress = e.detail.dx / width;
    const slideTranslate = this.currentSlideTranslate + tabWidth * progress;
    this.setData({ slideTranslate });
  },

  onAnimationfinish() {
    this.currentSlideTranslate = this.data.slideTranslate;
  }
})