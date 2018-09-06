Vue.component('menu_button', {
  template: '#child-template',
  props: ['title'],
});

var wrapper = new Vue({
  el: '#wrapper',
  data: {
    all_session: [
      '1th 表演影片',
      '2th 表演影片',
      '6th 表演影片',
      '7th 表演影片',
      '8th 表演影片',
      '9th 表演影片',
      '10th 表演影片',
      '11th 表演影片',
      '12th 表演影片',
      '13th 表演影片',
      '14th 表演影片',
      '15th 表演影片',
      '16th 表演影片',
    ],
    lists_091_1: {
      title: '小成',
    },
  }
});
