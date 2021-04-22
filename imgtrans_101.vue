<template id="img-temp">
  <div id="img-container" :style="newstyle">
    <img :src="url" id="img-oneself" alt="image">
    <p id="img-content">{{text}}</p>
  </div>
</template>

<script>
  export default {
    name: "imgtrans",
    data(){
      return{
        newstyle:''
      }
    },
    props:['url','text','height','width'],
    methods:{
      getHeiAndWid(){
        this.newstyle = 'height:' + this.height + ';width:' + this.width + ';'
      }
    },
    created(){
      this.getHeiAndWid()
    }
  }
</script>

<style scoped>
  *{margin:0;padding:0;}
  #img-container{
    width:100%;height:100%;
    overflow: hidden;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgb(0,0,0);
    transition:all 0.4s ease;
  }
  #img-container:hover #img-oneself{
    opacity:0.3;
    transform:scale(1.3,1.3);
    transition:all 0.4s ease;
  }
  #img-oneself{
    height:100%;width:100%;transition:all 0.4s ease;
  }
  #img-content{
    width:80%;
    position:absolute;
    color:#ffffff;text-align:center;opacity:0;
    transform:translate(-100%,0);transition:all 0.4s ease;
  }
  #img-container:hover #img-content{
    transform:translate(0,0);transition:all 0.4s ease;
    opacity:1;
  }
</style>
