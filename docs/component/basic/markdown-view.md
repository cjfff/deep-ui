---
title: markdown-view
---
# markdown-view

快速渲染 markdown 内容以及 toc 标题生成

## 基本使用

```vue live
<template>
    <markdown-view :content="content"/>
</template>

<script>
export default {
    data() {
        return {
            content: `<div data-note-content="" class="show-content">
  <div class="show-content-free">
    <blockquote>
      <p>Markdown 是什么：</p>
    </blockquote>
    <ul>
      <li>Markdown 是一种非常简单的、轻量级的标记语言。用户可以使用简单的标记符号<strong>以最小的输入代价去生成极富表现力的文档</strong>。Markdown
        的语法简洁明了、学习容易，功能比纯文本强得多，因此有很多人用它写博客、写文档。</li>
    </ul>
    <hr>
    <blockquote>
      <p>Markdown 具有很多优点：</p>
    </blockquote>
    <ul>
      <li>写作中添加简单符号即可完成排版，所见即所得，让你专注于文字而不是排版。</li>
      <li>格式转换方便，Markdown 的文本你可以轻松转换为 HTML、PDF等文件。</li>
      <li>自带格式化/排版信息，且规则简单友好，可保存为纯文本。</li>
      <li>对比HTML：它更专注于内容，标签对内容的侵入性低。</li>
      <li>写作时舒服，优雅感，你会感觉它就是为博客而生。</li>
    </ul>
    <hr>
    <blockquote>
      <p>Markdown 的编辑器：</p>
    </blockquote>
    <ol>
      <li>
        <a href="https://www.jianshu.com/" target="_blank">简书</a><br>
        一个非常不错的博客平台，写作时每几秒钟便会自动存入一个备份。<br>
        可直接从本地拖入照片生成链接，支持左右两栏的实时预览。<br>
        需要注册后在个人中心设置常用编辑器为 Markdown。</li>
      <li>
        <a href="https://link.jianshu.com?t=http://soft.xiaoshujiang.com/" target="_blank" rel="nofollow">小书匠编辑器</a><br>
        免费，功能很强大，同时支持离线与在线，界面美观。<br>
        第一次加载稍微慢些。</li>
      <li>
        <a href="https://link.jianshu.com?t=http://mahua.jser.me/" target="_blank" rel="nofollow">MaHua</a><br>
        一款简洁的免费在线编辑 Markdown 文档的编辑器，加载很快，界面一般。</li>
      <li>
        <a href="https://link.jianshu.com?t=https://maxiang.io/" target="_blank" rel="nofollow">马克飞象</a><br>
        在线好用的 Markdown 工具，为印象笔记而生。<br>
        对于重度印象笔记用户是个不错的选择。<br>
        付费软件，可以免费试用10天。</li>
      <li>
        <a href="https://link.jianshu.com?t=http://25.io/mou/" target="_blank" rel="nofollow">Mou</a><br>
        如果你是Mac用户，使用过后你一定会是Mou的粉丝！</li>
    </ol>
    <hr>
    <h3>Markdown使用语法如下:</h3>
    <h4>1.[标题]一级标题-六级标题</h4>
    <p>语法: # 标题名称</p>
    <pre class="hljs bash"><code class="bash"><span class="hljs-comment"># 一级标题</span>
<span class="hljs-comment">## 二级标题</span>
<span class="hljs-comment">### 三级标题</span>
<span class="hljs-comment">#### 四级标题</span>
<span class="hljs-comment">##### 五级标题</span>
<span class="hljs-comment">###### 六级标题</span>
</code></pre>
    <p>效果如下:</p>
    <h1>一级标题</h1>
    <h2>二级标题</h2>
    <h3>三级标题</h3>
    <h4>四级标题</h4>
    <h5>五级标题</h5>
    <h6>六级标题</h6>
    <p>注:# 和一级标题之间要保留一个空格(其它部分语法也同样需要加空格),因为这才是最标准的 Markdown 写法。</p>
    <hr>
    <h4>2.[列表]无序列表-有序列表</h4>
    <p>无序列表语法: - 名称</p>
    <pre class="hljs undefined"><code>- 我是无序列表
- 我是无序列表
- 我是无序列表
</code></pre>
    <p>效果如下:</p>
    <ul>
      <li>我是无序列表</li>
      <li>我是无序列表</li>
      <li>我是无序列表</li>
    </ul>
    <hr>
    <p>有序列表语法: 1. 名称</p>
    <pre class="hljs undefined"><code>1. 我是有序列表
2. 我是有序列表
3. 我是有序列表
</code></pre>
    <p>效果如下:</p>
    <ol>
      <li>我是有序列表</li>
      <li>我是有序列表</li>
      <li>我是有序列表</li>
    </ol>
    <hr>
    <h4>3.链接</h4>
    <p>语法: <code>[名称](链接地址)</code><br>
      如:<br>
      <code>[百度一下,你就知道](http://www.baidu.com)</code><br>
      效果如下:<br>
      <a href="https://link.jianshu.com?t=http://www.baidu.com" target="_blank" rel="nofollow">百度一下,你就知道</a></p>
    <hr>
    <h4>4.图片</h4>
    <p>语法:<code>![](链接地址)</code><br>
      如:</p>
    <pre class="hljs cpp"><code class="cpp">![百度logo](https:<span class="hljs-comment">//ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/holiday/habo/res/doodle/11.png)</span>
</code></pre>
    <p>效果如下:</p>
    <br>
    <div class="image-package">
      <img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/holiday/habo/res/doodle/11.png"
        data-original-src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/holiday/habo/res/doodle/11.png"
        alt="百度logo" style="cursor: zoom-in;">
      <div class="image-caption">百度logo</div>
    </div>
    <hr>
    <h4>5.引用文字(注意是文字!不是代码,因为有专门的引用代码语法,还在后面)</h4>
    <p>注:在我们使用Markdown写作的时候经常需要引用他人的文字,这个时候引用语法就很有必要了,在 Markdown 中,你只需要在你希望引用的文字前面加上 &gt; 就好了,例如:</p>
    <p><code>&gt; 有了引用文字语法,读者在看我的文章时可以明显看的清晰明了~</code></p>
    <p>效果如下:</p>
    <blockquote>
      <p>有了引用文字语法,读者在看我的文章时可以明显看的清晰明了~</p>
    </blockquote>
    <hr>
    <h4>6.粗体-斜体</h4>
    <p>注:用两个 * 包含一段文本(也就是开始和结尾)就是粗体的语法,如:</p>
    <p><code>**劳资翻身做码农**</code></p>
    <p><strong>劳资翻身做码农</strong></p>
    <p>注:用一个 * 包含一段文本(也就是开始和结尾)就是斜体的语法,如:</p>
    <p><code>*劳资翻身做地主*</code></p>
    <p><em>劳资翻身做地主</em></p>
    <hr>
    <h4>7.代码引用(码农最爱啦~)</h4>
    <p>注:假设你引用的代码只有一段,不分行,那么可以用  将此段代码前后(首字前末字尾)包起来.<br>
      如:</p>
    <pre class="hljs javascript"><code class="javascript"><span class="hljs-string"> hello world </span>
</code></pre>
    <p>效果如下:<br>
      <code>hello world</code></p>
    <p>注:假设你引用的代码很多段,很多行,那么可以用将此段代码前后(首字前末字尾)包起来.<br>
      效果如下:</p>
    <pre class="hljs cpp"><code class="cpp"><span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Hello</span>{</span>
<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span><span class="hljs-params">(String args[])</span></span>{
<span class="hljs-keyword">int</span> age = <span class="hljs-number">16</span> ;
<span class="hljs-keyword">if</span>(age &lt; <span class="hljs-number">18</span>){
System.out.println(<span class="hljs-string">"少儿不宜"</span>) ;
}
}
}
</code></pre>
    <hr>
    <h4>8.做表格</h4>
    <p>注:比较以上语法来说稍有点绕,但是不难理解.如:</p>
    <pre class="hljs ruby"><code class="ruby"><span class="hljs-params">| 吃 |</span> 喝 <span class="hljs-params">| 玩 |</span>
<span class="hljs-params">| --- |</span> --- <span class="hljs-params">| ---- |</span>
<span class="hljs-params">| 炸鸡 |</span> 啤酒 <span class="hljs-params">| 欧洲游 |</span>
<span class="hljs-params">| 烧烤 |</span> 香槟 <span class="hljs-params">| 非洲游 |</span>
<span class="hljs-params">| 火锅 |</span> 雪碧 <span class="hljs-params">| 家里游 |</span>
</code></pre>
    <p>效果如下:</p>
    <table>
      <thead>
        <tr>
          <th>吃</th>
          <th>喝</th>
          <th>玩</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>炸鸡</td>
          <td>啤酒</td>
          <td>欧洲游</td>
        </tr>
        <tr>
          <td>烧烤</td>
          <td>香槟</td>
          <td>非洲游</td>
        </tr>
        <tr>
          <td>火锅</td>
          <td>雪碧</td>
          <td>家里游</td>
        </tr>
      </tbody>
    </table>
    <p>注:表格标题会默认居中,但内容不会居中.如果想要让内容居中的话,请参考如下代码:</p>
    <pre class="hljs ruby"><code class="ruby"><span class="hljs-params">| 吃 |</span> 喝 <span class="hljs-params">| 玩 |</span>
<span class="hljs-params">| :---: |</span> <span class="hljs-symbol">:---</span>: <span class="hljs-params">| :---: |</span>
<span class="hljs-params">| 炸鸡 |</span> 啤酒 <span class="hljs-params">| 欧洲游 |</span>
<span class="hljs-params">| 烧烤 |</span> 香槟 <span class="hljs-params">| 非洲游 |</span>
<span class="hljs-params">| 火锅 |</span> 雪碧 <span class="hljs-params">| 家里游 |</span>
</code></pre>
    <p>效果如下:</p>
    <table>
      <thead>
        <tr>
          <th style="text-align:center">吃</th>
          <th style="text-align:center">喝</th>
          <th style="text-align:center">玩</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align:center">炸鸡</td>
          <td style="text-align:center">啤酒</td>
          <td style="text-align:center">欧洲游</td>
        </tr>
        <tr>
          <td style="text-align:center">烧烤</td>
          <td style="text-align:center">香槟</td>
          <td style="text-align:center">非洲游</td>
        </tr>
        <tr>
          <td style="text-align:center">火锅</td>
          <td style="text-align:center">雪碧</td>
          <td style="text-align:center">家里游</td>
        </tr>
        <tr>
          <td style="text-align:center">注:只需要在第二行里面每个的</td>
          <td style="text-align:center">---</td>
          <td style="text-align:center">里面加上一对儿::(英文冒号)即可内容居中.~</td>
        </tr>
      </tbody>
    </table>
    <hr>
    <h5>以上是常用的Markdown语法.可以满足一般博客的书写了.</h5>
    <blockquote>
      <p>当然, 如果这些会让你感觉不满足, 你可以进一步的进行Markdown的学习:</p>
    </blockquote>
    <ul>
      <li><a href="https://link.jianshu.com?t=http://wowubuntu.com/markdown/" target="_blank" rel="nofollow">Markdown
          语法说明 (简体中文)</a></li>
    </ul>

  </div>
</div>
`
        }
    }
}
</script>
```


<[vuese](markdown-view/index.vue)