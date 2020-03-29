import DeepexiCard from "./index.vue";

DeepexiCard.install = function(Vue) {
  Vue.component(DeepexiCard.name, DeepexiCard);
};

export default DeepexiCard;
