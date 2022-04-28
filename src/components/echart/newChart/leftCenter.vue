<template>
  <!-- 左中组件 生长周期 -->
  <div style="width: 100%; height: 100%">
    <div class="div_center colorFont">
      <div class="item_div_center" @click="changeOptions(0)">
        <dv-decoration-9
          id="circle0"
          :dur="5"
          class="dv_item"
          style="opacity: 0.3"
        >
          <div class="div_img1"></div>
        </dv-decoration-9>
        <div class="absolve_center_text">幼苗期</div>
      </div>
      <div class="item_div_center" @click="changeOptions(1)">
        <dv-decoration-9
          id="circle1"
          :dur="5"
          class="dv_item"
          style="opacity: 0.3"
        >
          <div class="div_img2"></div>
        </dv-decoration-9>
        <div class="absolve_center_text">幼年期</div>
      </div>
      <div class="item_div_center" @click="changeOptions(2)">
        <dv-decoration-9 id="circle2" :dur="5" class="dv_item">
          <div class="div_img3"></div>
        </dv-decoration-9>
        <div class="absolve_center_text">成长期</div>
      </div>
      <div class="item_div_center" @click="changeOptions(3)">
        <dv-decoration-9
          id="circle3"
          :dur="5"
          class="dv_item"
          style="opacity: 0.3"
        >
          <div class="div_img4"></div>
        </dv-decoration-9>
        <div class="absolve_center_text">衰老期</div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      circle0: null,
      circle1: null,
      circle2: null,
      circle3: null,
      // 成长期数据
      option: {
        legend: {
          orient: 'horizontal',
          x: 'right',
          y: 'top',
          padding: [10, 30, 0, 0],
          icon: 'circle', //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
          itemWidth: 13, // 设置宽度
          itemHeight: 13, // 设置高度
          itemGap: 20, // 设置间距
          textStyle: {
            color: '#fff', // 图例文字颜色
          },
        },
        tooltip: {},
        dataset: {
          dimensions: ['product', '优秀', '达标', '未达标'],
          source: [
            { product: 'A区', 优秀: 320, 达标: 301, 未达标: 200 },
            { product: 'B区', 优秀: 520, 达标: 550, 未达标: 150 },
            { product: 'C区', 优秀: 620, 达标: 606, 未达标: 100 },
            { product: 'D区', 优秀: 530, 达标: 504, 未达标: 100 },
          ],
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
            },
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#fff',
            },
          },
        },

        series: [
          {
            type: 'bar',
            itemStyle: {
              color: '#00DACD',
            },
          },
          {
            type: 'bar',
            itemStyle: {
              color: '#FFCF5F',
            },
          },
          {
            type: 'bar',
            itemStyle: {
              color: '#1893F2',
            },
          },
        ],
      },
      // 幼苗期数据
      option1: {
        legend: {
          orient: 'horizontal',
          x: 'right',
          y: 'top',
          padding: [10, 30, 0, 0],
          icon: 'circle', //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
          itemWidth: 13, // 设置宽度
          itemHeight: 13, // 设置高度
          itemGap: 20, // 设置间距
          textStyle: {
            color: '#fff', // 图例文字颜色
          },
        },
        tooltip: {},
        dataset: {
          dimensions: ['product', '优秀', '达标', '未达标'],
          source: [
            { product: 'A区', 优秀: 620, 达标: 101, 未达标: 30 },
            { product: 'B区', 优秀: 420, 达标: 150, 未达标: 50 },
            { product: 'C区', 优秀: 340, 达标: 106, 未达标: 20 },
            { product: 'D区', 优秀: 260, 达标: 104, 未达标: 10 },
          ],
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
            },
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#fff',
            },
          },
        },

        series: [
          {
            type: 'bar',
            itemStyle: {
              color: '#00DACD',
            },
          },
          {
            type: 'bar',
            itemStyle: {
              color: '#FFCF5F',
            },
          },
          {
            type: 'bar',
            itemStyle: {
              color: '#1893F2',
            },
          },
        ],
      },
      // 幼年期数据
      option2: {
        legend: {
          orient: 'horizontal',
          x: 'right',
          y: 'top',
          padding: [10, 30, 0, 0],
          icon: 'circle', //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
          itemWidth: 13, // 设置宽度
          itemHeight: 13, // 设置高度
          itemGap: 20, // 设置间距
          textStyle: {
            color: '#fff', // 图例文字颜色
          },
        },
        tooltip: {},
        dataset: {
          dimensions: ['product', '优秀', '达标', '未达标'],
          source: [
            { product: 'A区', 优秀: 820, 达标: 101, 未达标: 130 },
            { product: 'B区', 优秀: 520, 达标: 450, 未达标: 50 },
            { product: 'C区', 优秀: 670, 达标: 106, 未达标: 320 },
            { product: 'D区', 优秀: 380, 达标: 204, 未达标: 110 },
          ],
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
            },
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#fff',
            },
          },
        },

        series: [
          {
            type: 'bar',
            itemStyle: {
              color: '#00DACD',
            },
          },
          {
            type: 'bar',
            itemStyle: {
              color: '#FFCF5F',
            },
          },
          {
            type: 'bar',
            itemStyle: {
              color: '#1893F2',
            },
          },
        ],
      },
      // 衰老期数据
      option3: {
        legend: {
          orient: 'horizontal',
          x: 'right',
          y: 'top',
          padding: [10, 30, 0, 0],
          icon: 'circle', //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
          itemWidth: 13, // 设置宽度
          itemHeight: 13, // 设置高度
          itemGap: 20, // 设置间距
          textStyle: {
            color: '#fff', // 图例文字颜色
          },
        },
        tooltip: {},
        dataset: {
          dimensions: ['product', '优秀', '达标', '未达标'],
          source: [
            { product: 'A区', 优秀: 510, 达标: 401, 未达标: 430 },
            { product: 'B区', 优秀: 300, 达标: 150, 未达标: 20 },
            { product: 'C区', 优秀: 710, 达标: 506, 未达标: 120 },
            { product: 'D区', 优秀: 250, 达标: 204, 未达标: 310 },
          ],
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
            },
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#fff',
            },
          },
        },

        series: [
          {
            type: 'bar',
            itemStyle: {
              color: '#00DACD',
            },
          },
          {
            type: 'bar',
            itemStyle: {
              color: '#FFCF5F',
            },
          },
          {
            type: 'bar',
            itemStyle: {
              color: '#1893F2',
            },
          },
        ],
      },
    }
  },
  mounted() {
    this.circle0 = document.getElementById('circle0')
    this.circle1 = document.getElementById('circle1')
    this.circle2 = document.getElementById('circle2')
    this.circle3 = document.getElementById('circle3')
  },
  methods: {
    // 点击周期改变opacity状态
    changeOptions(i) {
      this.changeOpacity()
      // 幼苗期
      if (i == 0) {
        this.circle0.style.opacity = 1
        this.$emit('OptionList', this.option1)
      }
      // 幼年期
      if (i == 1) {
        this.circle1.style.opacity = 1
        this.$emit('OptionList', this.option2)
      }
      // 成年期
      if (i == 2) {
        this.circle2.style.opacity = 1
        this.$emit('OptionList', this.option)
      }
      // 衰老期
      if (i == 3) {
        this.circle3.style.opacity = 1
        this.$emit('OptionList', this.option3)
      }
    },
    // 统一赋值0.3
    changeOpacity() {
      this.circle0.style.opacity = 0.3
      this.circle1.style.opacity = 0.3
      this.circle2.style.opacity = 0.3
      this.circle3.style.opacity = 0.3
    },
  },
}
</script>
 
<style scoped lang="less">
.flex {
  display: flex;
  flex-wrap: wrap;
}
.j-c {
  justify-content: center;
}
.a-c {
  align-items: center;
}
.f-d {
  flex-direction: column;
}
.div_green {
  color: #00dacd;
}
.colorFont {
  color: #ffffff;
  font-size: 16px;
}
.dv_item {
  width: 100%;
  height: 0;
  padding: 50% 0;
}
.div_center {
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  justify-content: center;
  margin-top: 5%;
  // border: 1px solid #fff;

  .item_div_center {
    width: 22%;
    height: 0;
    padding-bottom: 22%;
    // border-radius: 50%;
    // border: 3px solid rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    position: relative;
    cursor: pointer;

    .div_img1 {
      width: 85%;
      height: 0;
      padding-bottom: 85%;
      background: url(http://jincunxiao.cn/tea1.png) no-repeat center
        center;
      background-size: cover;
      border-radius: 50%;
      z-index: 100;
    }
    .div_img2 {
      width: 85%;
      height: 0;
      padding-bottom: 85%;
      background: url(http://jincunxiao.cn/tea3.png) no-repeat center
        center;
      background-size: cover;
      border-radius: 50%;
      z-index: 100;
    }
    .div_img3 {
      width: 85%;
      height: 0;
      padding-bottom: 85%;
      background: url(http://jincunxiao.cn/tea2.png) no-repeat center
        center;
      background-size: cover;
      border-radius: 50%;
      z-index: 100;
    }
    .div_img4 {
      width: 85%;
      height: 0;
      padding-bottom: 85%;
      background: url(http://jincunxiao.cn/tea4.png) no-repeat center
        center;
      background-size: cover;
      border-radius: 50%;
      z-index: 100;
    }

    .absolve_center_text {
      position: absolute;
      top: 110%;
      left: calc(50% - 24px);
    }
  }

  div + .item_div_center {
    margin-left: 3%;
  }
}
</style>