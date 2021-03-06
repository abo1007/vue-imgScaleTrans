# vue-imgScaleTrans
vue组件-实现鼠标悬停图片放大过渡变暗的效果

## 注意
* 建议使用101版本，因为它能更好的调整大小

## 使用方式(单组件版本)

1. 将 vue 文件放置到合适的目录下
2. 在需要使用的Vue组件中 使用`import ImgTrans from '../'`的形式引入到组件中
3. 在该组件实例下的 components 中注册
4. 按照注册的名字在页面中以标签的形式写入   (默认是ImgTrans)

## 使用方式(封装版本)
1. 将 vue 文件放置到合适的目录下
2. 在 `main.js` 主入口文件中注册
```
import imgtrans from "./components/children/imgtrans/";
Vue.use(imgtrans);
```
3. 在页面组件中使用
```
<div class="img-container">
      <img-box url="xxx" text="你好世界" />
</div>
```

## 属性

1. `url` : 要引入图片的地址 就是src
2. `text` : 鼠标悬停后要显示的文字  (非必须)
3. `height` : (101)设置高度，需要单位，如 `px` 等(非必须，默认会按照父容器的100%)
4. `width` : (101)设置宽度，需要单位，如 `px` 等(非必须，默认会按照父容器的100%)

## 更新

### 封装版本 (2021_0212)
* 使用封装形式

### 101 (2020_0506)
* 取消了默认宽高，可以使用 height 和 width 属性来设置宽高
* 如果你觉得宽高不能合适，大可不必使用属性来设定宽高，设置一个有大小的外层div容器包裹它也是个不错的选择，至于这个外层容器的大小设置，会有更多更好的方法
