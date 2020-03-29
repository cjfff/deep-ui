import textTooltip from "./index.vue";

textTooltip.install = function(Vue) {
  Vue.component(textTooltip.name, textTooltip);
};

export default textTooltip;
