import LoadingDialog from "./index.vue";

LoadingDialog.install = function(Vue) {
  Vue.component(LoadingDialog.name, LoadingDialog);
};

export default LoadingDialog;
