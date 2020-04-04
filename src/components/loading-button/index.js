import LoadingButton from "./index.vue";

LoadingButton.install = function(Vue) {
  Vue.component(LoadingButton.name, LoadingButton);
};

export default LoadingButton;
