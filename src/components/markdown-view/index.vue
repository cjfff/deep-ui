<template>
  <section class="mardkdown-view" ref="menu-wrap">
    <section class="left-content">
      <div v-html="renderContent" class="markdown-preview"></div>
    </section>
    <section class="right-content" v-if="hasMenu && this.menuList.length">
      <section :class="menuClasses">
        <section
          class="deepexi-scrollbar"
          ref="scrollBar"
          :style="{ height: `${menuHeight}px` }"
        >
          <ul class="fe-menu" ref="menu">
            <li
              v-for="(item, index) in menuList"
              :key="item.id"
              class="fe-menu-item"
              :style="{
                'padding-left': item.level * 10 + 'px',
                color: currentIndex === index ? activeTextColor : textColor,
                'border-color':
                  currentIndex === index ? activeTextColor : '#f2f2f2'
              }"
              :class="{ active: currentIndex === index }"
              :title="item.content"
              @click="handleClickMenuItem(item)"
              ref="menu-item"
            >
              {{ item.content }}
            </li>
          </ul>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import {
  throttle,
  handleMenuReplace,
  handleImageList,
  handleMenuList,
  getElementViewTop
} from "./utils";

export default {
  name: "MarkdownView",
  props: {
    // 内容
    content: {
      required: true,
      type: String,
      // ""
      default: ""
    },
    /**
     * 菜单 fixed class
     */
    menuFixedClass: {
      type: String,
      default: "fixed"
    },
    /**
     * 菜单附加class
     */
    menuClass: {
      type: String,
      default: "deepexi-scrollbar-wrap"
    },
    /**
     * 滚动多少距离后添加 class
     */
    fixedHeight: {
      type: Number,
      default: 0
    },
    /**
     * 菜单默认文字color
     */
    textColor: {
      type: String,
      default: "#595959"
    },
    /**
     * 菜单激活文字颜色
     */
    activeTextColor: {
      type: String,
      default: "#5d81f9"
    },
    /**
     * 距离顶部多高
     */
    offsetTop: {
      type: Number,
      default: 0
    },
    /**
     * 滚动目标
     */
    target: {
      type: String,
      default: ""
    },
    /**
     * 是否有菜单
     */
    hasMenu: {
      type: Boolean,
      default: true
    },
    /**
     * 图片最大渲染宽度
     */
    maxImageWidth: {
      type: Number,
      default: 746
    },

    /**
     * 监听事件的间隔
     */
    scrollEventTime: {
      type: Number,
      default: 30
    },
    /**
     * 监听resize的事件间隔
     */
    resizeEventTime: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      el: null,
      container: null,
      menuList: [], // 右侧菜单列表
      listHeight: [], // 计算的高度列表
      scrollY: -1, // 滚动距离
      currentIndex: -1, // 当前高亮的右侧列表
      renderContent: "", // 渲染内容
      checkEnable: false,
      contentTop: 0, // 相对顶部的高度
      menuHeight: 0
    };
  },
  computed: {
    _contentOffsetTop() {
      return this.offsetTop || this.contentTop;
    },
    /**
     * 右边菜单距离顶部多长距离后开始 fixed
     */
    _fixedHeight() {
      return this.fixedHeight || this._contentOffsetTop;
    },
    menuClasses() {
      return [
        this.menuClass,
        this.scrollY > this._fixedHeight ? this.menuFixedClass : ""
      ];
    }
  },
  watch: {
    content: {
      immediate: true,
      handler: function() {
        this.el && (this.el.scrollTop = 0);
        this.initData();
      }
    },
    scrollY(newY) {
      this.$emit("on-scroll", newY);

      const listHeight = this.listHeight;
      for (let i = 0; i < listHeight.length - 1; i++) {
        const height1 = listHeight[i];
        const height2 = listHeight[i + 1];
        if (newY >= height1 && newY < height2) {
          this.currentIndex = i - 1;
          return;
        }
      }
      this.currentIndex = listHeight.length - 2;
    },
    // 监听滚动实时改变右边导航距离
    currentIndex(val) {
      if (this.checkEnable && val - 1 > 0) {
        const currentItemTop = this.$refs["menu-item"][val].offsetTop;
        this.$refs.scrollBar.scrollTop = currentItemTop - this.halfHeight;
      }
    }
  },
  mounted() {
    this.init();
    this.throttledScrollHandler = throttle(this.onScroll, this.scrollEventTime);
    this.throttleResizeHandler = throttle(
      this.handleCalcHeight,
      this.resizeEventTime
    );
    this.handleClickContent = event => {
      this.$emit("handleClick", event);
    };

    this.container.addEventListener("scroll", this.throttledScrollHandler);
    window.addEventListener("resize", this.throttleResizeHandler);
    this.container.addEventListener("click", this.handleClickContent);
  },
  methods: {
    init() {
      this.container = document;
      this.el = document.documentElement;
      if (this.target) {
        this.el = document.querySelector(this.target);
        if (!this.el) {
          throw new Error(`target is not existed: ${this.target}`);
        }
        this.container = this.el;
      }
    },
    async initData() {
      this.$emit("loading");

      let renderContent = this.content;

      if (this.hasMenu) {
        this.menuList = handleMenuList(renderContent); // 获取全部菜单
        // 进行 html 替换
        renderContent = handleMenuReplace(renderContent, this.menuList);
      }

      try {
        // 批量处理图片 初始化尺寸问题
        renderContent = await handleImageList(
          renderContent,
          this.maxImageWidth
        );
      } catch (error) {
        this.$emit("error", error);
      }

      this.renderContent = renderContent;

      this.$emit("loaded");
      // 计算右边 navMenu 高度
      setTimeout(() => {
        // 取得dom距离顶部距离
        if (this.$refs["menu-wrap"]) {
          this.contentTop = getElementViewTop(
            this.$refs["menu-wrap"],
            !!this.target
          );
        }

        this.menuHeight = Math.min(
          this.el.offsetHeight - 20,
          Number(this.$refs.menu && this.$refs.menu.offsetHeight)
        );

        this._calculateHeight();

        this._calcNavMenuHeight();
      }, 20);
    },

    onScroll() {
      this.scrollY = this.el.scrollTop;
    },

    handleClickMenuItem({ id }) {
      document.querySelector(`#${id}`).scrollIntoView();
    },

    /**
     * 计算高度
     */
    _calculateHeight() {
      const listHeight = [];
      const height = 0; // 从哪里开始计算
      listHeight.push(height);
      for (let i = 0; i < this.menuList.length; i++) {
        const { id } = this.menuList[i];
        // 拿到每一个标题在父节点中的 offsetTop(用来计算左侧快速导航的亮灯距离), 如果父节点上面还有别的节点在，需要加上那个节点距离，计算是按照整个 html 距离算的。
        const dom = document.querySelector(`#${id}`);
        if (dom) {
          const offsetTop = document.querySelector(`#${id}`).offsetTop;
          listHeight.push(offsetTop + this._contentOffsetTop);
        }
      }
      this.listHeight = listHeight;
    },

    /**
     * 计算菜单高度
     */
    _calcNavMenuHeight() {
      if (this.hasMenu && this.$refs.scrollBar) {
        const clientHeight = window.innerHeight;
        this.halfHeight = ~~(clientHeight / 2);
        this.checkEnable = clientHeight < this.$refs.menu.offsetHeight;
      }
    },

    async handleCalcHeight() {
      this.$emit("resize");
      this._calculateHeight();
      this._calcNavMenuHeight();
      // 批量处理图片 初始化尺寸问题
      this.renderContent = await handleImageList(
        this.renderContent,
        this.maxImageWidth
      );
      this.$emit("resized");
    }
  },
  beforeDestroy() {
    this.container.removeEventListener("scroll", this.throttledScrollHandler);
    this.container.removeEventListener("click", this.handleClickContent);
    window.removeEventListener("resize", this.throttleResizeHandler);
  }
};
</script>
