// components/menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      default: false,
      observer(n, o) {
        if (n) {
          this.animate('.menu-content', [
            { opacity: 0, transformOrigin: 'left top', scale: [0, 0] },
            { opacity: 1, transformOrigin: 'left top', scale: [1, 1] }
          ], 200)
          this.animate('.menu-mask', [
            { opacity: 0 },
            { opacity: 1 }
          ], 200)
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCloseMenu() {
      this.animate('.menu-content', [
        { opacity: 1, transformOrigin: 'left top', scale: [1, 1] },
        { opacity: 0, transformOrigin: 'left top', scale: [0, 0] }
      ], 200);
      this.animate('.menu-mask', [
        { opacity: 1 },
        { opacity: 0 }
      ], 200, () => this.triggerEvent('close-menu'));
    }
  }
})
