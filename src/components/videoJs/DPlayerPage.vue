<template>
  <Dplayer
    :video="dplayerObj.video"
    :danmaku="dplayerObj.danmaku"
    :contextmenu="dplayerObj.contextmenu"
    :highlight="dplayerObj.highlight"
  />
</template>

<script>
import Hls from 'hls.js'

export default {
  data() {
    return {
      dplayerObj: {
        video: {
          url: 'https://api.dogecloud.com/player/get.m3u8?vcode=5ac682e6f8231991&userId=17&ext=.m3u8', //视频地址
          type: 'customHls',
          customType: {
            customHls: function (video, player) {
              const hls = new Hls() //实例化Hls  用于解析m3u8
              hls.loadSource(video.src)
              hls.attachMedia(video)
            },
          },
        },
        danmaku: {
          id: '4157142',
          api: 'http://localhost:1207/',
          token: 'tokendemo',
          maximum: 1000,
          addition: ['http://localhost:1207/v2/bilibili?aid=4157142'],
          user: 'DIYgod',
          bottom: '15%',
          unlimited: true,
          speedRate: 0.5,
        },
        contextmenu: [
          {
            text: 'custom1',
            link: 'https://github.com/DIYgod/DPlayer',
          },
          {
            text: 'custom2',
            click: (player) => {
              console.log(player)
            },
          },
        ],
        highlight: [
          {
            time: 20,
            text: '这是第 20 秒',
          },
          {
            time: 120,
            text: '这是 2 分钟',
          },
        ],
      },
    }
  },
  components: {
    Dplayer: () => import('@/myCom/Dplayer/index'),
  },
  computed: {},
  methods: {},
  watch: {},
  created() {},
  mounted() {},
}
</script>

<style scoped lang="less"></style>
