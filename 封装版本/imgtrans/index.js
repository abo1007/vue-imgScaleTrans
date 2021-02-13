import imgtrans from "./imgtrans";

const ImgTrans = {
  install:function (Vue) {
    Vue.component('img-box',imgtrans)
  }
};

export default ImgTrans;
