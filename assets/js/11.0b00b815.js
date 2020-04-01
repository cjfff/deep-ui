(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{877:function(n,t,s){"use strict";s.r(t);var a=s(5),e=Object(a.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"markdown-view"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-view"}},[n._v("#")]),n._v(" markdown-view")]),n._v(" "),s("p",[n._v("快速渲染 markdown 内容以及 toc 标题生成")]),n._v(" "),s("h2",{attrs:{id:"基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[n._v("#")]),n._v(" 基本使用")]),n._v(" "),s("vue-live",{attrs:{layoutProps:{lang:"vue"},code:'<template>\n  <ClientOnly>\n    <markdown-view :content="content"/>\n  </ClientOnly>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            content: `<div data-note-content="" class="show-content">\n  <div class="show-content-free">\n    <blockquote>\n      <p>Markdown 是什么：</p>\n    </blockquote>\n    <ul>\n      <li>Markdown 是一种非常简单的、轻量级的标记语言。用户可以使用简单的标记符号<strong>以最小的输入代价去生成极富表现力的文档</strong>。Markdown\n        的语法简洁明了、学习容易，功能比纯文本强得多，因此有很多人用它写博客、写文档。</li>\n    </ul>\n    <hr>\n    <blockquote>\n      <p>Markdown 具有很多优点：</p>\n    </blockquote>\n    <ul>\n      <li>写作中添加简单符号即可完成排版，所见即所得，让你专注于文字而不是排版。</li>\n      <li>格式转换方便，Markdown 的文本你可以轻松转换为 HTML、PDF等文件。</li>\n      <li>自带格式化/排版信息，且规则简单友好，可保存为纯文本。</li>\n      <li>对比HTML：它更专注于内容，标签对内容的侵入性低。</li>\n      <li>写作时舒服，优雅感，你会感觉它就是为博客而生。</li>\n    </ul>\n    <hr>\n    <blockquote>\n      <p>Markdown 的编辑器：</p>\n    </blockquote>\n    <ol>\n      <li>\n        <a href="https://www.jianshu.com/" target="_blank">简书</a><br>\n        一个非常不错的博客平台，写作时每几秒钟便会自动存入一个备份。<br>\n        可直接从本地拖入照片生成链接，支持左右两栏的实时预览。<br>\n        需要注册后在个人中心设置常用编辑器为 Markdown。</li>\n      <li>\n        <a href="https://link.jianshu.com?t=http://soft.xiaoshujiang.com/" target="_blank" rel="nofollow">小书匠编辑器</a><br>\n        免费，功能很强大，同时支持离线与在线，界面美观。<br>\n        第一次加载稍微慢些。</li>\n      <li>\n        <a href="https://link.jianshu.com?t=http://mahua.jser.me/" target="_blank" rel="nofollow">MaHua</a><br>\n        一款简洁的免费在线编辑 Markdown 文档的编辑器，加载很快，界面一般。</li>\n      <li>\n        <a href="https://link.jianshu.com?t=https://maxiang.io/" target="_blank" rel="nofollow">马克飞象</a><br>\n        在线好用的 Markdown 工具，为印象笔记而生。<br>\n        对于重度印象笔记用户是个不错的选择。<br>\n        付费软件，可以免费试用10天。</li>\n      <li>\n        <a href="https://link.jianshu.com?t=http://25.io/mou/" target="_blank" rel="nofollow">Mou</a><br>\n        如果你是Mac用户，使用过后你一定会是Mou的粉丝！</li>\n    </ol>\n    <hr>\n    <h3>Markdown使用语法如下:</h3>\n    <h4>1.[标题]一级标题-六级标题</h4>\n    <p>语法: # 标题名称</p>\n    <pre class="hljs bash"><code class="bash"><span class="hljs-comment"># 一级标题</span>\n<span class="hljs-comment">## 二级标题</span>\n<span class="hljs-comment">### 三级标题</span>\n<span class="hljs-comment">#### 四级标题</span>\n<span class="hljs-comment">##### 五级标题</span>\n<span class="hljs-comment">###### 六级标题</span>\n</code></pre>\n    <p>效果如下:</p>\n    <h1>一级标题</h1>\n    <h2>二级标题</h2>\n    <h3>三级标题</h3>\n    <h4>四级标题</h4>\n    <h5>五级标题</h5>\n    <h6>六级标题</h6>\n    <p>注:# 和一级标题之间要保留一个空格(其它部分语法也同样需要加空格),因为这才是最标准的 Markdown 写法。</p>\n    <hr>\n    <h4>2.[列表]无序列表-有序列表</h4>\n    <p>无序列表语法: - 名称</p>\n    <pre class="hljs undefined"><code>- 我是无序列表\n- 我是无序列表\n- 我是无序列表\n</code></pre>\n    <p>效果如下:</p>\n    <ul>\n      <li>我是无序列表</li>\n      <li>我是无序列表</li>\n      <li>我是无序列表</li>\n    </ul>\n    <hr>\n    <p>有序列表语法: 1. 名称</p>\n    <pre class="hljs undefined"><code>1. 我是有序列表\n2. 我是有序列表\n3. 我是有序列表\n</code></pre>\n    <p>效果如下:</p>\n    <ol>\n      <li>我是有序列表</li>\n      <li>我是有序列表</li>\n      <li>我是有序列表</li>\n    </ol>\n    <hr>\n    <h4>3.链接</h4>\n    <p>语法: <code>[名称](链接地址)</code><br>\n      如:<br>\n      <code>[百度一下,你就知道](http://www.baidu.com)</code><br>\n      效果如下:<br>\n      <a href="https://link.jianshu.com?t=http://www.baidu.com" target="_blank" rel="nofollow">百度一下,你就知道</a></p>\n    <hr>\n    <h4>4.图片</h4>\n    <p>语法:<code>![](链接地址)</code><br>\n      如:</p>\n    <pre class="hljs cpp"><code class="cpp">![百度logo](https:<span class="hljs-comment">//ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/holiday/habo/res/doodle/11.png)</span>\n</code></pre>\n    <p>效果如下:</p>\n    <br>\n    <div class="image-package">\n      <img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/holiday/habo/res/doodle/11.png"\n        data-original-src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/holiday/habo/res/doodle/11.png"\n        alt="百度logo" style="cursor: zoom-in;">\n      <div class="image-caption">百度logo</div>\n    </div>\n    <hr>\n    <h4>5.引用文字(注意是文字!不是代码,因为有专门的引用代码语法,还在后面)</h4>\n    <p>注:在我们使用Markdown写作的时候经常需要引用他人的文字,这个时候引用语法就很有必要了,在 Markdown 中,你只需要在你希望引用的文字前面加上 &gt; 就好了,例如:</p>\n    <p><code>&gt; 有了引用文字语法,读者在看我的文章时可以明显看的清晰明了~</code></p>\n    <p>效果如下:</p>\n    <blockquote>\n      <p>有了引用文字语法,读者在看我的文章时可以明显看的清晰明了~</p>\n    </blockquote>\n    <hr>\n    <h4>6.粗体-斜体</h4>\n    <p>注:用两个 * 包含一段文本(也就是开始和结尾)就是粗体的语法,如:</p>\n    <p><code>**劳资翻身做码农**</code></p>\n    <p><strong>劳资翻身做码农</strong></p>\n    <p>注:用一个 * 包含一段文本(也就是开始和结尾)就是斜体的语法,如:</p>\n    <p><code>*劳资翻身做地主*</code></p>\n    <p><em>劳资翻身做地主</em></p>\n    <hr>\n    <h4>7.代码引用(码农最爱啦~)</h4>\n    <p>注:假设你引用的代码只有一段,不分行,那么可以用  将此段代码前后(首字前末字尾)包起来.<br>\n      如:</p>\n    <pre class="hljs javascript"><code class="javascript"><span class="hljs-string"> hello world </span>\n</code></pre>\n    <p>效果如下:<br>\n      <code>hello world</code></p>\n    <p>注:假设你引用的代码很多段,很多行,那么可以用将此段代码前后(首字前末字尾)包起来.<br>\n      效果如下:</p>\n    <pre class="hljs cpp"><code class="cpp"><span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Hello</span>{</span>\n<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span><span class="hljs-params">(String args[])</span></span>{\n<span class="hljs-keyword">int</span> age = <span class="hljs-number">16</span> ;\n<span class="hljs-keyword">if</span>(age &lt; <span class="hljs-number">18</span>){\nSystem.out.println(<span class="hljs-string">"少儿不宜"</span>) ;\n}\n}\n}\n</code></pre>\n    <hr>\n    <h4>8.做表格</h4>\n    <p>注:比较以上语法来说稍有点绕,但是不难理解.如:</p>\n    <pre class="hljs ruby"><code class="ruby"><span class="hljs-params">| 吃 |</span> 喝 <span class="hljs-params">| 玩 |</span>\n<span class="hljs-params">| --- |</span> --- <span class="hljs-params">| ---- |</span>\n<span class="hljs-params">| 炸鸡 |</span> 啤酒 <span class="hljs-params">| 欧洲游 |</span>\n<span class="hljs-params">| 烧烤 |</span> 香槟 <span class="hljs-params">| 非洲游 |</span>\n<span class="hljs-params">| 火锅 |</span> 雪碧 <span class="hljs-params">| 家里游 |</span>\n</code></pre>\n    <p>效果如下:</p>\n    <table>\n      <thead>\n        <tr>\n          <th>吃</th>\n          <th>喝</th>\n          <th>玩</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>炸鸡</td>\n          <td>啤酒</td>\n          <td>欧洲游</td>\n        </tr>\n        <tr>\n          <td>烧烤</td>\n          <td>香槟</td>\n          <td>非洲游</td>\n        </tr>\n        <tr>\n          <td>火锅</td>\n          <td>雪碧</td>\n          <td>家里游</td>\n        </tr>\n      </tbody>\n    </table>\n    <p>注:表格标题会默认居中,但内容不会居中.如果想要让内容居中的话,请参考如下代码:</p>\n    <pre class="hljs ruby"><code class="ruby"><span class="hljs-params">| 吃 |</span> 喝 <span class="hljs-params">| 玩 |</span>\n<span class="hljs-params">| :---: |</span> <span class="hljs-symbol">:---</span>: <span class="hljs-params">| :---: |</span>\n<span class="hljs-params">| 炸鸡 |</span> 啤酒 <span class="hljs-params">| 欧洲游 |</span>\n<span class="hljs-params">| 烧烤 |</span> 香槟 <span class="hljs-params">| 非洲游 |</span>\n<span class="hljs-params">| 火锅 |</span> 雪碧 <span class="hljs-params">| 家里游 |</span>\n</code></pre>\n    <p>效果如下:</p>\n    <table>\n      <thead>\n        <tr>\n          <th style="text-align:center">吃</th>\n          <th style="text-align:center">喝</th>\n          <th style="text-align:center">玩</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td style="text-align:center">炸鸡</td>\n          <td style="text-align:center">啤酒</td>\n          <td style="text-align:center">欧洲游</td>\n        </tr>\n        <tr>\n          <td style="text-align:center">烧烤</td>\n          <td style="text-align:center">香槟</td>\n          <td style="text-align:center">非洲游</td>\n        </tr>\n        <tr>\n          <td style="text-align:center">火锅</td>\n          <td style="text-align:center">雪碧</td>\n          <td style="text-align:center">家里游</td>\n        </tr>\n        <tr>\n          <td style="text-align:center">注:只需要在第二行里面每个的</td>\n          <td style="text-align:center">---</td>\n          <td style="text-align:center">里面加上一对儿::(英文冒号)即可内容居中.~</td>\n        </tr>\n      </tbody>\n    </table>\n    <hr>\n    <h5>以上是常用的Markdown语法.可以满足一般博客的书写了.</h5>\n    <blockquote>\n      <p>当然, 如果这些会让你感觉不满足, 你可以进一步的进行Markdown的学习:</p>\n    </blockquote>\n    <ul>\n      <li><a href="https://link.jianshu.com?t=http://wowubuntu.com/markdown/" target="_blank" rel="nofollow">Markdown\n          语法说明 (简体中文)</a></li>\n    </ul>\n\n  </div>\n</div>\n`\n        }\n    }\n}\n<\/script>\n',requires:{}}}),s("h2",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[n._v("#")]),n._v(" props")]),n._v(" "),s("table",[s("thead",[s("tr",[s("th",[n._v("Name")]),n._v(" "),s("th",[n._v("Description")]),n._v(" "),s("th",[n._v("Type")]),n._v(" "),s("th",[n._v("Required")]),n._v(" "),s("th",[n._v("Default")])])]),n._v(" "),s("tbody",[s("tr",[s("td",[n._v("content")]),n._v(" "),s("td",[n._v("内容")]),n._v(" "),s("td",[s("code",[n._v("String")])]),n._v(" "),s("td",[s("code",[n._v("true")])]),n._v(" "),s("td",[n._v('""')])]),n._v(" "),s("tr",[s("td",[n._v("menuFixedClass")]),n._v(" "),s("td",[n._v("菜单 fixed class")]),n._v(" "),s("td",[s("code",[n._v("String")])]),n._v(" "),s("td",[s("code",[n._v("false")])]),n._v(" "),s("td",[n._v("fixed")])]),n._v(" "),s("tr",[s("td",[n._v("menuClass")]),n._v(" "),s("td",[n._v("菜单附加class")]),n._v(" "),s("td",[s("code",[n._v("String")])]),n._v(" "),s("td",[s("code",[n._v("false")])]),n._v(" "),s("td",[n._v("deepexi-scrollbar-wrap")])]),n._v(" "),s("tr",[s("td",[n._v("fixedHeight")]),n._v(" "),s("td",[n._v("滚动多少距离后添加 class")]),n._v(" "),s("td",[s("code",[n._v("Number")])]),n._v(" "),s("td",[s("code",[n._v("false")])]),n._v(" "),s("td",[n._v("-")])]),n._v(" "),s("tr",[s("td",[n._v("textColor")]),n._v(" "),s("td",[n._v("菜单默认文字color")]),n._v(" "),s("td",[s("code",[n._v("String")])]),n._v(" "),s("td",[s("code",[n._v("false")])]),n._v(" "),s("td",[n._v("#595959")])]),n._v(" "),s("tr",[s("td",[n._v("activeTextColor")]),n._v(" "),s("td",[n._v("菜单激活文字颜色")]),n._v(" "),s("td",[s("code",[n._v("String")])]),n._v(" "),s("td",[s("code",[n._v("false")])]),n._v(" "),s("td",[n._v("#5d81f9")])]),n._v(" "),s("tr",[s("td",[n._v("offsetTop")]),n._v(" "),s("td",[n._v("距离顶部多高")]),n._v(" "),s("td",[s("code",[n._v("Number")])]),n._v(" "),s("td",[s("code",[n._v("false")])]),n._v(" "),s("td",[n._v("-")])]),n._v(" "),s("tr",[s("td",[n._v("target")]),n._v(" "),s("td",[n._v("滚动目标")]),n._v(" "),s("td",[s("code",[n._v("String")])]),n._v(" "),s("td",[s("code",[n._v("false")])]),n._v(" "),s("td",[n._v("-")])]),n._v(" "),s("tr",[s("td",[n._v("hasMenu")]),n._v(" "),s("td",[n._v("是否有菜单")]),n._v(" "),s("td",[s("code",[n._v("Boolean")])]),n._v(" "),s("td",[s("code",[n._v("false")])]),n._v(" "),s("td",[n._v("-")])]),n._v(" "),s("tr",[s("td",[n._v("maxImageWidth")]),n._v(" "),s("td",[n._v("图片最大渲染宽度")]),n._v(" "),s("td",[s("code",[n._v("Number")])]),n._v(" "),s("td",[s("code",[n._v("false")])]),n._v(" "),s("td",[n._v("746")])]),n._v(" "),s("tr",[s("td",[n._v("scrollEventTime")]),n._v(" "),s("td",[n._v("监听事件的间隔")]),n._v(" "),s("td",[s("code",[n._v("Number")])]),n._v(" "),s("td",[s("code",[n._v("false")])]),n._v(" "),s("td",[n._v("30")])]),n._v(" "),s("tr",[s("td",[n._v("resizeEventTime")]),n._v(" "),s("td",[n._v("监听resize的事件间隔")]),n._v(" "),s("td",[s("code",[n._v("Number")])]),n._v(" "),s("td",[s("code",[n._v("false")])]),n._v(" "),s("td",[n._v("300")])])])]),n._v(" "),s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[n._v("#")]),n._v(" events")]),n._v(" "),s("table",[s("thead",[s("tr",[s("th",[n._v("Event Name")]),n._v(" "),s("th",[n._v("Description")]),n._v(" "),s("th",[n._v("Parameters")])])]),n._v(" "),s("tbody",[s("tr",[s("td",[n._v("on-scroll")]),n._v(" "),s("td",[n._v("-")]),n._v(" "),s("td",[n._v("-")])]),n._v(" "),s("tr",[s("td",[n._v("handleClick")]),n._v(" "),s("td",[n._v("-")]),n._v(" "),s("td",[n._v("-")])]),n._v(" "),s("tr",[s("td",[n._v("loading")]),n._v(" "),s("td",[n._v("-")]),n._v(" "),s("td",[n._v("-")])]),n._v(" "),s("tr",[s("td",[n._v("error")]),n._v(" "),s("td",[n._v("-")]),n._v(" "),s("td",[n._v("-")])]),n._v(" "),s("tr",[s("td",[n._v("loaded")]),n._v(" "),s("td",[n._v("-")]),n._v(" "),s("td",[n._v("-")])]),n._v(" "),s("tr",[s("td",[n._v("resize")]),n._v(" "),s("td",[n._v("-")]),n._v(" "),s("td",[n._v("-")])]),n._v(" "),s("tr",[s("td",[n._v("resized")]),n._v(" "),s("td",[n._v("-")]),n._v(" "),s("td",[n._v("-")])])])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);