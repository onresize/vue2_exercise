<template>
  <div>
    <h2>npm i vue-waterfall2@latest --save</h2>
    <waterfall :col="2" :data="imgList" class="box">
      <div class="list_item" v-for="item in imgList" :key="item.url">
        <img :src="item.url" class="cover" width="100%" />
      </div>
    </waterfall>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          url: 'https://img0.baidu.com/it/u=1346293879,1216188986&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        },
        {
          url: 'https://img1.baidu.com/it/u=3455772487,1839910736&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        },
        {
          url: 'https://img0.baidu.com/it/u=2894575446,206838321&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1082',
        },
        {
          url: 'https://img0.baidu.com/it/u=3668818600,4198960452&fm=253&fmt=auto?w=1280&h=800',
        },
        {
          url: 'https://img1.baidu.com/it/u=293889573,3208996596&fm=253&fmt=auto?w=1422&h=800',
        },
        {
          url: 'https://img0.baidu.com/it/u=3256563557,2294778956&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=711',
        },
        {
          url: 'https://img1.baidu.com/it/u=4060201754,291453270&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1084',
        },
        {
          url: 'https://img1.baidu.com/it/u=4119545635,1667312792&fm=253&fmt=auto&app=138&f=PNG?w=281&h=499',
        },
        {
          url: 'https://img0.baidu.com/it/u=1775963641,1501039305&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=499',
        },
        {
          url: 'https://img0.baidu.com/it/u=2359496606,281119058&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=888',
        },
        {
          url: 'https://img1.baidu.com/it/u=3771754291,3193429800&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1083',
        },
        {
          url: 'https://img0.baidu.com/it/u=1037755496,1126803478&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=710',
        },
      ],
    }
  },
  created() {},
  methods: {},
}
</script>

<style scoped lang="less">
.box {
  width: 200px;
  height: 400px;
  .list_item {
    margin: 3px;
    border: 1px solid black;
    .cover {
      padding: 3px;
    }
  }
}
</style>
