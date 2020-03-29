/* eslint-disable */
/**
 * 生成带有 id 的标题 DOM
 * @param {*} param0
 */
export const renderTitle = ({level, id, content}) => `<h${level} id=${id}>${content}</h${level}>`;

/**
 * 生成带有 height & width 的 img DOM
 * @param {*} param0
 */
export const renderImage = ({src, height, width}) =>
  `<img src="${src}" referrerPolicy="no-referrer" style="height:${height}px;width:${width}px" alt>`;

/**
 * 生成随机值的 id
 * @param {*} name
 */
export const ganerateId = name =>
  name + (Math.random().toString(16) + Date.now()).toString(16).slice(2);

// 进行
export const handleMenuReplace = (html, menuList) =>
  menuList.reduce((content, {origin, htmlContent}) => content.replace(origin, htmlContent), html);

// 批量对图片节点进行替换
export const handleImageList = async (content, maxImageWidth) => {
  let imageList = [];

  try {
    imageList = await handleContentImage(content, maxImageWidth); // 批量获取图片宽高
  } catch (error) {
    console.error(error);
    return imageList;
  }

  return imageList.reduce(
    (html, {origin, src, height, width}) => html.replace(origin, renderImage({src, height, width})),
    content,
  );
};

/**
 * 获取图片高度宽度
 * @param {*} param0
 * @param {*} maxImageWidth
 */
export const getImageWidthAndHeight = ({src, dom}, maxImageWidth = 746) => {
  return new Promise(resolve => {
    const image = new Image();
    image.referrerPolicy = 'no-referrer';
    image.src = src;
    image.onload = () => {
      const {width, height} = image;
      const rate = width > maxImageWidth ? parseFloat((image.width / maxImageWidth).toFixed(2)) : 1;
      const isOrigin = rate === 1;
      resolve({
        src,
        origin: dom,
        width: isOrigin ? width : maxImageWidth,
        height: isOrigin ? height : ~~(height / rate),
      });
    };
  });
};

export const handleContentImage = async (content, maxImageWidth = 746) => {
  const imgRegExp = /<img.*?src="(.*?)".*?\/?>/i;
  // 取得内容中所有的 img 标签字符

  const imgListReg = RegExp(imgRegExp.source, 'ig');
  const imgList = content.match(imgListReg);

  if (!imgList) return [];

  // 这个正则是用来取得 src="" 里面的链接的
  const srcRegexp = RegExp(imgRegExp.source, 'i');

  return Promise.all(
    imgList.map(imgItem => {
      const [dom, src] = srcRegexp.exec(imgItem);
      return getImageWidthAndHeight(
        {
          dom,
          src,
        },
        maxImageWidth,
      );
    }),
  );
};

export const handleMenuList = html => {
  const TITLE_REGEXP = /<h(\d).*?>(.*)<\/h\1>/;

  // 匹配到所有的 title
  const titleListRegexep = RegExp(TITLE_REGEXP.source, 'g');

  const titleList = html.match(titleListRegexep);

  const titleRegExp = RegExp(TITLE_REGEXP.source, 'i');

  const menuList = (titleList || []).reduce((acc, item) => {
    const id = ganerateId('menu_');

    const [str, level, _content] = titleRegExp.exec(item);

    // 只提取标签内的内容
    const content = _content.replace(/<[^>]+>/gi, '').replace(/&nbsp;/g, ' ');

    if (level && content) {
      const htmlContent = renderTitle({level, content, id});
      acc.push({
        origin: str,
        htmlContent,
        level,
        content,
        id,
      });
    }
    return acc;
  }, []);
  return menuList;
};

/**
 * 节流，一段时间只运行一次
 * @param {*} fn 回调函数
 * @param {*} wait
 */
export const throttle = (fn, wait) => {
  let inThrottle, lastFn, lastTime;
  return function() {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function() {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

/**
 * 获取element元素对于target元素的相对高度
 * @param {*} element
 */
export function getElementViewTop(element, isRelative = false) {
  let actualTop = element.offsetTop;
  let current = element.offsetParent;
  if (!isRelative) {
    while (current !== null && current !== parent) {
      actualTop += current.offsetTop;
      current = current.offsetParent;
    }
  }
  let elementScrollTop = 0;
  if (document.compatMode == 'BackCompat') {
    elementScrollTop = document.body.scrollTop;
  } else {
    elementScrollTop = document.documentElement.scrollTop;
  }
  return actualTop - elementScrollTop;
}
