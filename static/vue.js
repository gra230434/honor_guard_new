Vue.component('menu_button', {
  template: '#child-template',
  props: ['title', 'name'],
});

var wrapper = new Vue({
  el: '#wrapper',
  data: {
    all_session: [
      {title: 'lists_091_1',  name: '1th 表演影片'},
      {title: 'lists_092_2',  name: '2th 表演影片'},
      {title: 'lists_096_6',  name: '6th 表演影片'},
    ],
    lists_091_1: {
      title: '小成',
    },
  }
});
