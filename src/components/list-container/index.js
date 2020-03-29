import ListContainer from "./index.vue";

ListContainer.install = function(Vue) {
  Vue.component(ListContainer.name, ListContainer);
};

export default ListContainer;
