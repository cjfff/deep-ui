/*
  支持自动引入less变量表，使用时无需手动引入
*/

const styles = {
  "@primary-color": "#5D81F9",
  "@--color-primary": "#5D81F9",
  /// color|1|SecondaryColor|1
  "@--color-success": "#02C5E2",
  /// color|1|SecondaryColor|1
  "@--color-warning": "#F5A623",
  /// color|1|SecondaryColor|1
  "@--color-danger": "#E24156",
  /// color|1|SecondaryColor|1
  "@--color-info": "#6A6E7B",

  /// color|1|FontColor|2
  "@--color-text-primary": "#2D303B",
  /// color|1|FontColor|2
  "@--color-text-regular": "#2D303B",
  /// color|1|FontColor|2
  "@--color-text-secondary": "#93959b",
  /// color|1|FontColor|2
  "@--color-text-placeholder": "#9CA6C7",
  /// color|1|BorderColor|3
  "@--border-color-base": "#CAD1E8",
  /// color|1|BorderColor|3
  "@--border-color-light": "#CAD1E8",
  /// color|1|BorderColor|3
  "@--border-color-lighter": "#EBEEF5",
  /// color|1|BorderColor|3
  "@--border-color-extra-light": "#F2F6FC",

  "@--font-color-disabled-base": "#bbb",

  // Background
  /// color|1|BackgroundColor|4
  "@--background-color-base": "#f5f7fa",

  //sidebar
  "@menuText": "rgba(255, 255, 255, 1)",
  "@menuFontColor": "rgba(255, 255, 255, 0.7)",
  "@menuActiveText": "#fff",
  "@subMenuActiveText": "#f4f4f5",
  "@menuBg": "rgba(51, 54, 67, 1)",

  "@subMenuBg": "#1f2d3d",
  "@subMenuHover": "#001528",

  "@sideBarMaxWidth": "200px", // 侧边栏的最大宽"度
  "@sideBarMinWidth": "64px", // 侧边栏的最小宽"度

  "@padding-size": "24px",
  "@margin-size": "16px",

  "@cyan": "#02C5E2",
  "@black": "#2D303B",
  "@white": "#fff",
  "@gray": "#9CA6C7",
  "@error": "#E24156",

  "@font-l": "16px",
  "@font-m": "14px",
  "@font-s": "12px",

  "@border-color": "#CAD1E8",
  "@bg-color": "#F0F2F5",
  "@bg-code": "#f6f8fa",

  "@basic-font-family": "PingFangSC-Regular",
  "@font-weight": "400"
};

module.exports = styles;
