// components/Tabs/Tabs.js
Component({
  /**
   * Component properties
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    }

  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    handItemTap(e) {
      console.log(e);
   const  { index } = e.currentTarget.dataset;
   this.triggerEvent("tabsItemsChange",{index});
    }


  }
})
