export default {
  name: 'render',
  functional: true,
  props: {
    render: Function,
    data: Object,
    node: Array,
  },
  render: (h, ctx) => {
    const params = {
      data: ctx.props.data,
    };
    const {render} = ctx.props;

    return typeof render === 'object' ? render : render(h, params);
  },
};
