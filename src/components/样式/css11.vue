<template>
  <div>
    <h2>-webkit-reflect ; (镜像反射)</h2>
    <div class="flex">
      <img
        class="pic1"
        src="https://img0.baidu.com/it/u=4278216090,542028317&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        alt="#"
      />
      <img
        class="pic2"
        src="https://img2.baidu.com/it/u=2080244369,3435160753&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        alt="#"
      />
      <img
        class="pic3"
        src="https://img2.baidu.com/it/u=3618236253,1028428296&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        alt="#"
      />
      <img
        class="pic4"
        src="https://img0.baidu.com/it/u=1217304799,3113310756&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        alt="#"
      />
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {},
  watch: {},
  created() {},
  mounted() {},
}
</script>
 
<style scoped lang="less">
.flex {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 3px solid red;
  position: relative;
  inset: 500px 0 0 0;
}
img {
  width: 200px;
  height: 200px;
  border: 3px solid green;
}
.pic1 {
  // 下面镜面、镜面距离原图5px
  -webkit-box-reflect: below 5px;
}
.pic2 {
  // 左边镜面
  -webkit-box-reflect: left;
}
.pic3 {
  // 右边镜面
  -webkit-box-reflect: right;
}
.pic4 {
  // 上面镜面、渐变
  -webkit-box-reflect: above 0px
    linear-gradient(transparent, rgba(0, 0, 0, 1));
}
</style>