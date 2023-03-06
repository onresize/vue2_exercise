<template>
  <div class="container">
    <div class="box">
      <videoHls
        class="video"
        v-for="{ src, id } in HlsList"
        :key="id"
        :videoUrl="src"
      />
    </div>
  </div>
</template>

<script>
import videoHls from './hls.vue'
export default {
  components: { videoHls },
  data() {
    return {
      HlsList: [
        // {
        //   id: 3,
        //   src: 'https://open.ys7.com/v3/openlive/J01988899_1_1.m3u8?expire=1680751282&id=433587361763614720&t=53fde60b919073ba414a7e2557d3d2c5913fbb815ab36245c0a5da94076c6243&ev=100',
        // },
        {
          id: 31,
          src: 'http://127.0.0.1:8080/index.m3u8', // live-server开启服务访问本地m3u8
          //XXX node服务端代码： https://www.aliyundrive.com/s/poWuVfSnuDr
        },
        {
          id: 321,
          src: 'http://1257120875.vod2.myqcloud.com/0ef121cdvodtransgzp1257120875/3055695e5285890780828799271/v.f230.m3u8',
        },
      ],
    }
  },
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  border: 1px solid red;
  box-sizing: border-box;
  padding: 5px;

  .box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    .video {
      width: 33.3%;
      height: 33.3%;
      border: 5px solid transparent;
    }
  }
}
</style>
