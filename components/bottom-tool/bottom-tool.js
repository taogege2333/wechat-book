// components/bottom-tool/bottom-tool.js
Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false,
      observer(n) {
        if (n) {
          this.animate('.content', [
            {translateY: '100%'},
            {translateY: 0}
          ], 200)
          this.animate('.mask', [
            {opacity: 0},
            {opacity: 1}
          ], 200)
        }
      }
    },
    book: {
      type: Object,
      value: {},
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isTop: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCloseTool() {
      this.animate('.content', [
        {translateY: 0},
        {translateY: '100%'},
      ], 200)
      this.animate('.mask', [
        {opacity: 1},
        {opacity: 0},
      ], 200, () => this.triggerEvent('close-tool'));
    },
    handleSwitchChange() {
      this.setData({
        isTop: !this.data.isTop
      })
    }
  }
})
