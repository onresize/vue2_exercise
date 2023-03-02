<template>
  <!-- HLS是只能播放rtmp流、不能播放rtsp流 -->
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
          // src: 'http://218.89.77.46:1986/hls/c815050001dd.m3u8'
          //   src:
          //     'https://open.ys7.com/v3/openlive/J01988899_1_1.m3u8?expire=1680751282&id=433587361763614720&t=53fde60b919073ba414a7e2557d3d2c5913fbb815ab36245c0a5da94076c6243&ev=100'
          // }
          // src: 'http://devimages.apple.com.edgekey.net/streaming/examples/bipbop_4x3/gear2/prog_index.m3u8',
          // src: 'https://open.ys7.com/v3/openlive/J18981272_1_1.m3u8?expire=1692844973&id=484311975430455296&t=c8dd9ce076a6763fff9a9bbce54fe534485dae7b2ea0f74d9c09fa4bd812e0c7&ev=100',
          // src: 'http://47.38.11.206:83/openUrl/qbGwpMY/live.m3u8'
        // },
        // {
        //   id: 4,
        //   src: 'http://47.38.11.206:83/openUrl/ucybUhW/live.m3u8'
        // },
        {
          id: 31,
          src: 'http://139.9.207.185:1986/hls/c84415000d97.m3u8'
        },
        // {
        //   id: 51,
        //   src: 'http://218.89.77.46:1986/hls/c815050001df.m3u8'
        // },
        // {
        //   id: 311,
        //   src: 'http://218.89.77.46:1986/hls/c815050001e0.m3u8'
        // },
        // {
        //   id: 411,
        //   src: 'http://218.89.77.46:1986/hls/c815050001e1.m3u8'
        // },
        // {
        //   id: 511,
        //   src: 'http://139.9.207.185:1986/hls/c84415000d2e.m3u8'
        // }
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
