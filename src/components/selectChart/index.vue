<template>
  <div>
    <h2>
      多个echarts组合下拉切换、this.myChart.setOption(opt, true) //
      第二个参数表示多个charts切换的参数不合并、默认为false
    </h2>
    <el-select
      class="select"
      v-model="value"
      clearable
      placeholder="请选择chart"
      @clear="clear"
      @change="change"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div id="chartBox">
      <div id="Chart" ref="ChartRef"></div>
      <div class="dot" @mousedown="mousedown"></div>
    </div>
  </div>
</template>
 
<script>
import china from '@/assets/json/china.json'
//地图json地址： http://datav.aliyun.com/portal/school/atlas/area_selector
export default {
  data() {
    return {
      value: '',
      options: [
        {
          value: '柱状图',
          label: '柱状图',
        },
        {
          value: '饼图',
          label: '饼图',
        },
        {
          value: '折线图',
          label: '折线图',
        },
        {
          value: '中国',
          label: '中国',
        },
        {
          value: '船',
          label: '船',
        },
      ],
      opt: {},
      dom: null,
      rect: null,
    }
  },
  methods: {
    clear() {
      console.log('点击了清除')
      this.value = ''
    },
    change(val) {
      if (val == '') {
        this.opt = {}
        this.setChart(this.opt)
        return
      }
      this.myChart.showLoading()
      setTimeout(() => {
        if (val == '饼图') {
          let colorList = [
            '#73DDFF',
            '#73ACFF',
            '#FDD56A',
            '#FDB36A',
            '#FD866A',
            '#9E87FF',
            '#58D5FF',
          ]
          this.opt = {
            title: {
              text: '',
              x: 'center',
              y: 'center',
              textStyle: {
                fontSize: 20,
              },
            },
            tooltip: {
              trigger: 'item',
            },
            series: [
              {
                type: 'pie',
                center: ['50%', '50%'],
                radius: ['24%', '45%'],
                clockwise: true,
                avoidLabelOverlap: true,
                hoverOffset: 15,
                itemStyle: {
                  normal: {
                    color: function (params) {
                      return colorList[params.dataIndex]
                    },
                  },
                },
                label: {
                  show: true,
                  position: 'outside',
                  formatter: '{a|{b}：{d}%}\n{hr|}',
                  rich: {
                    hr: {
                      backgroundColor: 't',
                      borderRadius: 3,
                      width: 3,
                      height: 3,
                      padding: [3, 3, 0, -12],
                    },
                    a: {
                      padding: [-30, 15, -20, 15],
                    },
                  },
                },
                labelLine: {
                  normal: {
                    length: 20,
                    length2: 30,
                    lineStyle: {
                      width: 1,
                    },
                  },
                },
                data: [
                  {
                    name: '一月',
                    value: 1.45,
                  },
                  {
                    name: '二月',
                    value: 2.93,
                  },
                  {
                    name: '三月',
                    value: 3.15,
                  },
                  {
                    name: '四月',
                    value: 4.78,
                  },
                  {
                    name: '五月',
                    value: 5.93,
                  },
                  {
                    name: '六月',
                    value: 5.73,
                  },
                ],
              },
            ],
          }
          this.setChart(this.opt)
          return
        }
        if (val == '柱状图') {
          this.opt = {
            backgroundColor: '#18163B',
            grid: {
              top: '17%',
              right: '12%',
              left: '12%',
              bottom: '12%',
            },
            xAxis: [
              {
                type: 'category',
                color: '#59588D',
                data: [
                  '学员续费率',
                  '试听课转换率',
                  '课程消费率',
                  '课后评分率',
                  '作业完成率',
                  '班级满班率',
                  '排课上课率',
                  '体验课转化率',
                ],
                axisPointer: {
                  type: 'line',
                },
                axisLine: {
                  lineStyle: {
                    color: '#272456',
                  },
                },
                axisLabel: {
                  margin: 20,
                  color: '#59588D',
                  textStyle: {
                    fontSize: 12,
                  },
                },
              },
            ],
            yAxis: [
              {
                min: 0,
                max: 100,
                axisLabel: {
                  formatter: '{value}%',
                  color: '#59588D',
                },
                axisLine: {
                  show: false,
                },
                splitLine: {
                  lineStyle: {
                    color: '#272456',
                  },
                },
              },
            ],
            series: [
              {
                type: 'bar',
                data: [100, 88, 10, 90, 76, 20, 56, 89],
                barWidth: '20px',
                itemStyle: {
                  normal: {
                    color: this.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [
                        {
                          offset: 0,
                          color: '#41E1D4', // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#10A7DB', // 100% 处的颜色
                        },
                      ],
                      false
                    ),
                    barBorderRadius: [30, 30, 0, 0],
                    shadowColor: 'rgba(0,255,225,1)',
                    shadowBlur: 4,
                  },
                },
                label: {
                  normal: {
                    show: true,
                    lineHeight: 30,
                    width: 80,
                    height: 30,
                    backgroundColor: '#252453',
                    borderRadius: 200,
                    position: ['-8', '-60'],
                    distance: 1,
                    formatter: [
                      '    {d|●}',
                      ' {a|{c}%}     \n',
                      '    {b|}',
                    ].join(''),
                    rich: {
                      d: {
                        color: '#3CDDCF',
                      },
                      a: {
                        color: '#fff',
                        align: 'center',
                      },
                      b: {
                        width: 1,
                        height: 30,
                        borderWidth: 1,
                        borderColor: '#234e6c',
                        align: 'left',
                      },
                    },
                  },
                },
              },
            ],
          }
          this.setChart(this.opt)
          return
        }
        if (val == '折线图') {
          let fontColor = '#30eee9'
          this.opt = {
            backgroundColor: '#11183c',
            grid: {
              left: '5%',
              right: '10%',
              top: '20%',
              bottom: '15%',
              containLabel: true,
            },
            tooltip: {
              show: true,
              trigger: 'item',
            },
            legend: {
              show: true,
              x: 'center',
              y: '35',
              icon: 'stack',
              itemWidth: 10,
              itemHeight: 10,
              textStyle: {
                color: '#1bb4f6',
              },
              data: ['已采纳', '已发布', '浏览量'],
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                  color: fontColor,
                },
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: '#397cbc',
                  },
                },
                axisTick: {
                  show: false,
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#195384',
                  },
                },
                data: [
                  '1月',
                  '2月',
                  '3月',
                  '4月',
                  '5月',
                  '6月',
                  '7月',
                  '8月',
                  '9月',
                  '10月',
                  '11月',
                  '12月',
                ],
              },
            ],
            yAxis: [
              {
                type: 'value',
                name: '信息量',
                min: 0,
                max: 1000,
                axisLabel: {
                  formatter: '{value}',
                  textStyle: {
                    color: '#2ad1d2',
                  },
                },
                axisLine: {
                  lineStyle: {
                    color: '#27b4c2',
                  },
                },
                axisTick: {
                  show: false,
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#11366e',
                  },
                },
              },
              {
                type: 'value',
                name: '浏览量',
                min: 0,
                max: 1000,
                axisLabel: {
                  formatter: '{value} 人',
                  textStyle: {
                    color: '#186afe',
                  },
                },
                axisLine: {
                  lineStyle: {
                    color: '#186afe',
                  },
                },
                axisTick: {
                  show: false,
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#11366e',
                  },
                },
              },
            ],
            series: [
              {
                name: '已采纳',
                type: 'line',
                stack: '总量',
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                  normal: {
                    color: '#0092f6',
                    lineStyle: {
                      color: '#0092f6',
                      width: 1,
                    },
                    areaStyle: {
                      //color: '#94C9EC'
                      color: this.$echarts.graphic.LinearGradient(
                        0,
                        1,
                        0,
                        0,
                        [
                          {
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)',
                          },
                          {
                            offset: 1,
                            color: 'rgba(0,146,246,0.9)',
                          },
                        ]
                      ),
                    },
                  },
                },
                markPoint: {
                  itemStyle: {
                    normal: {
                      color: 'red',
                    },
                  },
                },
                data: [
                  120, 132, 101, 134, 90, 230, 210, 182, 191, 234,
                  290, 330,
                ],
              },
              {
                name: '已发布',
                type: 'line',
                stack: '总量',
                symbol: 'circle',
                symbolSize: 8,

                itemStyle: {
                  normal: {
                    color: '#00d4c7',
                    lineStyle: {
                      color: '#00d4c7',
                      width: 1,
                    },
                    areaStyle: {
                      //color: '#94C9EC'
                      color: this.$echarts.graphic.LinearGradient(
                        0,
                        1,
                        0,
                        0,
                        [
                          {
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)',
                          },
                          {
                            offset: 1,
                            color: 'rgba(0,212,199,0.9)',
                          },
                        ]
                      ),
                    },
                  },
                },
                data: [
                  220, 182, 191, 234, 290, 330, 310, 201, 154, 190,
                  330, 410,
                ],
              },
              {
                name: '浏览量',
                type: 'line',
                stack: '总量',
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                  normal: {
                    color: '#aecb56',
                    lineStyle: {
                      color: '#aecb56',
                      width: 1,
                    },
                    areaStyle: {
                      //color: '#94C9EC'
                      color: this.$echarts.graphic.LinearGradient(
                        0,
                        1,
                        0,
                        0,
                        [
                          {
                            offset: 0,
                            color: 'rgba(7,44,90,0.3)',
                          },
                          {
                            offset: 1,
                            color: 'rgba(114,144,89,0.9)',
                          },
                        ]
                      ),
                    },
                  },
                },
                data: [
                  150, 232, 201, 154, 190, 330, 410, 150, 232, 201,
                  154, 190,
                ],
              },
            ],
          }
          this.setChart(this.opt)
          return
        }
        if (val == '中国') {
          var points = [
            {
              value: [118.8062, 31.9208],
              itemStyle: { color: '#4ab2e5' },
            },
            {
              value: [127.9688, 45.368],
              itemStyle: { color: '#4fb6d2' },
            },
            {
              value: [110.3467, 41.4899],
              itemStyle: { color: '#52b9c7' },
            },
            {
              value: [125.8154, 44.2584],
              itemStyle: { color: '#5abead' },
            },
            {
              value: [116.4551, 40.2539],
              itemStyle: { color: '#f34e2b' },
            },
            {
              value: [123.1238, 42.1216],
              itemStyle: { color: '#f56321' },
            },
            {
              value: [114.4995, 38.1006],
              itemStyle: { color: '#f56f1c' },
            },
            {
              value: [117.4219, 39.4189],
              itemStyle: { color: '#f58414' },
            },
            {
              value: [112.3352, 37.9413],
              itemStyle: { color: '#f58f0e' },
            },
            {
              value: [109.1162, 34.2004],
              itemStyle: { color: '#f5a305' },
            },
            {
              value: [103.5901, 36.3043],
              itemStyle: { color: '#e7ab0b' },
            },
            {
              value: [106.3586, 38.1775],
              itemStyle: { color: '#dfae10' },
            },
            {
              value: [101.4038, 36.8207],
              itemStyle: { color: '#d5b314' },
            },
            {
              value: [103.9526, 30.7617],
              itemStyle: { color: '#c1bb1f' },
            },
            {
              value: [108.384366, 30.439702],
              itemStyle: { color: '#b9be23' },
            },
            {
              value: [113.0823, 28.2568],
              itemStyle: { color: '#a6c62c' },
            },
            {
              value: [102.9199, 25.46639],
              itemStyle: { color: '#96cc34' },
            },
            { value: [119.4543, 25.9222] },
          ]
          let index = -1

          this.$echarts.registerMap('china', china)
          this.opt = {
            backgroundColor: '#013954',
            geo: {
              map: 'china',
              aspectScale: 0.75, //长宽比
              zoom: 1.1,
              roam: false,
              itemStyle: {
                normal: {
                  areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#09132c', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#274d68', // 100% 处的颜色
                      },
                    ],
                    globalCoord: true, // 缺省为 false
                  },
                  shadowColor: 'rgb(58,115,192)',
                  shadowOffsetX: 10,
                  shadowOffsetY: 11,
                },
                emphasis: {
                  areaColor: '#2AB8FF',
                  borderWidth: 0,
                  color: 'green',
                  label: {
                    show: false,
                  },
                },
              },
              regions: [
                {
                  name: '南海诸岛',
                  itemStyle: {
                    areaColor: 'rgba(0, 10, 52, 1)',

                    borderColor: 'rgba(0, 10, 52, 1)',
                    normal: {
                      opacity: 0,
                      label: {
                        show: false,
                        color: '#009cc9',
                      },
                    },
                  },
                },
              ],
            },
            series: [
              {
                type: 'map',
                roam: false,
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      color: '#1DE9B6',
                    },
                  },
                  emphasis: {
                    textStyle: {
                      color: 'rgb(183,185,14)',
                    },
                  },
                },

                itemStyle: {
                  normal: {
                    borderColor: 'rgb(147, 235, 248)',
                    borderWidth: 1,
                    areaColor: {
                      type: 'radial',
                      x: 0.5,
                      y: 0.5,
                      r: 0.8,
                      colorStops: [
                        {
                          offset: 0,
                          color: '#09132c', // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#274d68', // 100% 处的颜色
                        },
                      ],
                      globalCoord: true, // 缺省为 false
                    },
                  },
                  emphasis: {
                    areaColor: 'rgb(46,229,206)',
                    //    shadowColor: 'rgb(12,25,50)',
                    borderWidth: 0.1,
                  },
                },
                zoom: 1.1,
                //     roam: false,
                map: 'china', //使用
                // data: this.difficultData //热力图数据   不同区域 不同的底色
              },
              {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                zlevel: 1,
                rippleEffect: {
                  period: 15,
                  scale: 4,
                  brushType: 'fill',
                },
                hoverAnimation: true,
                label: {
                  normal: {
                    formatter: '{b}',
                    position: 'right',
                    offset: [15, 0],
                    color: '#1DE9B6',
                    show: true,
                  },
                },
                itemStyle: {
                  normal: {
                    color: '#1DE9B6' /* function (value){ //随机颜色
 return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
 }*/,
                    shadowBlur: 10,
                    shadowColor: '#333',
                  },
                },
                symbolSize: 12,
                data: points,
              }, //地图线的动画效果
              {
                type: 'lines',
                zlevel: 2,
                effect: {
                  show: true,
                  period: 4, //箭头指向速度，值越小速度越快
                  trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                  symbol: 'arrow', //箭头图标
                  symbolSize: 7, //图标大小
                },
                lineStyle: {
                  normal: {
                    color: '#1DE9B6',
                    /* function (value){ //随机颜色
                        
                        ['#f21347','#f3243e','#f33736','#f34131','#f34e2b',
                        '#f56321','#f56f1c','#f58414','#f58f0e','#f5a305',
                        '#e7ab0b','#dfae10','#d5b314','#c1bb1f','#b9be23',
                        '#a6c62c','#96cc34','#89d23b','#7ed741','#77d64c',
                        '#71d162','#6bcc75','#65c78b','#5fc2a0','#5abead',
                        '#52b9c7','#4fb6d2','#4ab2e5']
 return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
 }*/ width: 1, //线条宽度
                    opacity: 0.1, //尾迹线条透明度
                    curveness: 0.3, //尾迹线条曲直度
                  },
                },
                data: [
                  {
                    coords: [
                      [118.8062, 31.9208],
                      [119.4543, 25.9222],
                    ],
                    lineStyle: { color: '#4ab2e5' },
                  },
                  {
                    coords: [
                      [127.9688, 45.368],
                      [119.4543, 25.9222],
                    ],
                    lineStyle: { color: '#4fb6d2' },
                  },
                  {
                    coords: [
                      [110.3467, 41.4899],
                      [119.4543, 25.9222],
                    ],
                    lineStyle: { color: '#52b9c7' },
                  },
                  {
                    coords: [
                      [125.8154, 44.2584],
                      [119.4543, 25.9222],
                    ],
                    lineStyle: { color: '#5abead' },
                  },
                  {
                    coords: [
                      [116.4551, 40.2539],
                      [119.4543, 25.9222],
                    ],
                    lineStyle: { color: '#f34e2b' },
                  },
                  {
                    coords: [
                      [123.1238, 42.1216],
                      [119.4543, 25.9222],
                    ],
                    lineStyle: { color: '#f56321' },
                  },
                  {
                    coords: [
                      [114.4995, 38.1006],
                      [119.4543, 25.9222],
                    ],
                    lineStyle: { color: '#f56f1c' },
                  },
                  {
                    coords: [
                      [117.4219, 39.4189],
                      [119.4543, 25.9222],
                    ],
                    lineStyle: { color: '#f58414' },
                  },
                  {
                    coords: [
                      [112.3352, 37.9413],
                      [119.4543, 25.9222],
                    ],
                    lineStyle: { color: '#f58f0e' },
                  },
                  {
                    coords: [
                      [109.1162, 34.2004],
                      [119.4543, 25.9222],
                    ],
                    lineStyle: { color: '#f5a305' },
                  },
                  {
                    coords: [
                      [103.5901, 36.3043],
                      [119.4543, 25.9222],
                    ],
                    lineStyle: { color: '#e7ab0b' },
                  },
                  {
                    coords: [
                      [106.3586, 38.1775],
                      [119.4543, 25.9222],
                    ],
                    lineStyle: { color: '#dfae10' },
                  },
                  {
                    coords: [
                      [101.4038, 36.8207],
                      [119.4543, 25.9222],
                    ],
                    lineStyle: { color: '#d5b314' },
                  },
                  {
                    coords: [
                      [103.9526, 30.7617],
                      [119.4543, 25.9222],
                    ],
                    lineStyle: { color: '#c1bb1f' },
                  },
                  {
                    coords: [
                      [108.384366, 30.439702],
                      [119.4543, 25.9222],
                    ],
                    lineStyle: { color: '#b9be23' },
                  },
                  {
                    coords: [
                      [113.0823, 28.2568],
                      [119.4543, 25.9222],
                    ],
                    lineStyle: { color: '#a6c62c' },
                  },
                  {
                    coords: [
                      [102.9199, 25.46639],
                      [119.4543, 25.9222],
                    ],
                    lineStyle: { color: '#96cc34' },
                  },
                ],
              },
            ],
          }
          this.setChart(this.opt)
          return
        }
        if (val == '船') {
          this.opt = {
            title: {
              text: '孤帆远影碧空尽,唯见长江天际流',
              textStyle: {
                color: '#555',
              },
            },
            grid: {
              left: '0',
              right: '0',
              bottom: '1%',
            },
            backgroundColor: this.$echarts.graphic.RadialGradient(
              0.62,
              0.45,
              1,
              [
                {
                  offset: 0,
                  color: '#fe9e80',
                },
                {
                  offset: 1,
                  color: '#9bc9f1',
                },
              ],
              false
            ),
            xAxis: [
              {
                boundaryGap: false,
                data: new Array(15),
                splitLine: {
                  show: false,
                },
              },
            ],
            yAxis: [
              {
                min: 0,
                max: 10,
                type: 'value',
                splitLine: {
                  show: false,
                },
              },
            ],
            series: [
              {
                //mountain background
                type: 'line',
                areaStyle: {
                  normal: {
                    color: '#2a9c91',
                    opacity: 0.4,
                  },
                },
                data: [
                  5, 5, 5, 6.1, 6.2, 6.3, 6.4, 6, 4, 4, 4, 4, 4, 4, 4,
                ],
                symbolSize: 0,
                lineStyle: {
                  normal: {
                    width: 0,
                  },
                },
              },
              {
                //mountain behind
                type: 'line',
                areaStyle: {
                  normal: {
                    color: '#2a9c91',
                    opacity: 0.8,
                  },
                },
                data: [
                  4, 4, 4, 4, 4, 4, 4, 4, 3, 4.5, 5, 6, 6.5, 7, 7.2,
                ],
                symbolSize: 0,
                lineStyle: {
                  normal: {
                    width: 0,
                  },
                },
              },
              {
                //river behind
                type: 'line',
                areaStyle: {
                  normal: {
                    color: '#2dc3b5',
                    opacity: 1,
                  },
                },
                data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                symbolSize: 0,
                lineStyle: {
                  normal: {
                    width: 0,
                  },
                },
              },
              {
                //mountain left
                type: 'line',
                areaStyle: {
                  normal: {
                    color: '#0f6960',
                    opacity: 1,
                  },
                },
                data: [
                  6.5, 6, 6, 6, 5.8, 5.2, 4.8, 4.2, 2, 0, 0, 0, 0, 0,
                  0,
                ],
                symbolSize: 0,
                lineStyle: {
                  normal: {
                    width: 0,
                  },
                },
              },
              {
                //river middle
                type: 'line',
                areaStyle: {
                  normal: {
                    color: '#2dc3b5',
                    opacity: 1,
                  },
                },
                data: [
                  2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8,
                  2.8, 2.8, 2.8, 2.8, 2.8,
                ],
                symbolSize: 0,
                lineStyle: {
                  normal: {
                    width: 0,
                  },
                },
              },
              {
                //mountain right
                type: 'line',
                areaStyle: {
                  normal: {
                    color: '#0f6960',
                    opacity: 1,
                  },
                },
                data: [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4.8, 5, 5.5,
                ],
                symbolSize: 0,
                lineStyle: {
                  normal: {
                    width: 0,
                  },
                },
              },
              {
                //river front
                type: 'line',
                areaStyle: {
                  normal: {
                    color: '#2dc3b5',
                    opacity: 0.8,
                  },
                },
                data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                smooth: true,
                smoothMonotone: 'x',
                symbolSize: 0,
                lineStyle: {
                  normal: {
                    width: 0,
                  },
                },
                animationDelayUpdate: function (idx) {
                  return idx * 5
                },
              },
              {
                type: 'graph',
                data: [
                  {
                    symbolSize: 0,
                    x: 0,
                    y: 0,
                  },
                  {
                    symbolSize: 0,
                    x: 200,
                    y: 100,
                  },
                  //sun
                  {
                    symbolSize: 100,
                    x: 130,
                    y: 45,
                  },
                  //sun shadow
                  {
                    symbolSize: [40, 10],
                    symbolOffset: [0, 180],
                    x: 130,
                    y: 45,
                    itemStyle: {
                      normal: {
                        opacity: 0.2,
                      },
                    },
                  },
                  {
                    symbolSize: [100, 30],
                    symbolOffset: [0, 200],
                    x: 130,
                    y: 45,
                    itemStyle: {
                      normal: {
                        opacity: 0.25,
                      },
                    },
                  },
                  {
                    symbolSize: [60, 20],
                    symbolOffset: [0, 225],
                    x: 130,
                    y: 45,
                    itemStyle: {
                      normal: {
                        opacity: 0.2,
                      },
                    },
                  },
                  {
                    symbolSize: [20, 10],
                    symbolOffset: [0, 245],
                    x: 130,
                    y: 45,
                    itemStyle: {
                      normal: {
                        opacity: 0.2,
                      },
                    },
                  },
                ],
                itemStyle: {
                  normal: {
                    color: '#ff5722',
                    shadowColor: '#ff5722',
                    shadowBlur: 100,
                  },
                },
                silent: true,
                z: 3,
              },
              {
                //boat
                type: 'graph',
                data: [
                  {
                    symbolSize: 0,
                    x: 0,
                    y: 0,
                  },
                  {
                    symbolSize: 0,
                    x: 200,
                    y: 100,
                  },
                  {
                    symbolSize: [35, 40],
                    symbolOffset: [20, 120],
                    x: 130,
                    y: 45,
                    itemStyle: {
                      normal: {
                        color: '#333',
                      },
                    },
                    symbol:
                      'path://M27.310007,2.749997l22.5,0c-2.485281,0 -4.5,14.326891 -4.5,32.000002c0,17.673113 2.014718,32 4.5,32l-22.5,0l0,0c-2.485281,0 -4.5,-14.326889 -4.5,-32c0,-17.673111 2.014718,-32.000002 4.5,-32.000002z M12.75,70.184998l47,0l-11,10l-30,-1l-6,-9z',
                  },
                  {
                    //boat shadow
                    symbolSize: [30, 5],
                    symbolOffset: [19, 142],
                    x: 130,
                    y: 45,
                    itemStyle: {
                      normal: {
                        color: '#333',
                        opacity: 0.1,
                      },
                    },
                    symbol: 'roundRect',
                  },
                  {
                    symbolSize: [18, 15],
                    x: 130,
                    y: 45,
                    itemStyle: {
                      normal: {
                        color: '#333',
                        opacity: 0.1,
                      },
                    },
                    symbolRotate: 2,
                    symbolOffset: [20, 151],
                    symbol: 'roundRect',
                  },
                  //wave
                  {
                    name: 'wave1',
                    symbolSize: 0,
                    x: 126,
                    y: 86,
                  },
                  {
                    name: 'wave2',
                    symbolSize: 0,
                    x: 130,
                    y: 86,
                  },
                  {
                    name: 'wave3',
                    symbolSize: 0,
                    x: 130,
                    y: 93,
                  },
                  {
                    name: 'wave4',
                    symbolSize: 0,
                    x: 134,
                    y: 93,
                  },
                  {
                    name: 'wave5',
                    symbolSize: 0,
                    x: 144,
                    y: 90,
                  },
                  {
                    name: 'wave6',
                    symbolSize: 0,
                    x: 148,
                    y: 90,
                  },
                ],
                links: [
                  {
                    source: 'wave1',
                    target: 'wave2',
                  },
                  {
                    source: 'wave3',
                    target: 'wave4',
                  },
                  {
                    source: 'wave5',
                    target: 'wave6',
                  },
                ],
                lineStyle: {
                  normal: {
                    width: 1,
                    curveness: 0.45,
                    color: '#0f6960',
                  },
                },
                silent: true,
                symbolRotate: -2,
                z: 3,
              },
              {
                //birds
                type: 'graph',
                data: [
                  //bg
                  {
                    symbolSize: 0,
                    x: 0,
                    y: 0,
                  },
                  {
                    symbolSize: 0,
                    x: 200,
                    y: 100,
                  },
                  //bird1
                  {
                    symbolSize: 0,
                    x: 120,
                    y: 50,
                    name: 'first-bird-left',
                  },
                  {
                    symbolSize: 3,
                    x: 125,
                    y: 52,
                    name: 'first-bird',
                  },
                  {
                    symbolSize: 0,
                    x: 130,
                    y: 50,
                    name: 'first-bird-right',
                  },
                  //bird2
                  {
                    symbolSize: 0,
                    x: 110,
                    y: 43,
                    name: 'second-bird-left',
                  },
                  {
                    symbolSize: 2,
                    x: 115,
                    y: 45,
                    name: 'second-bird',
                  },
                  {
                    symbolSize: 0,
                    x: 120,
                    y: 43,
                    name: 'second-bird-right',
                  },
                  //bird3
                  {
                    symbolSize: 0,
                    x: 112,
                    y: 52,
                    name: 'third-bird-left',
                  },
                  {
                    symbolSize: 2,
                    x: 115,
                    y: 53,
                    name: 'third-bird',
                  },
                  {
                    symbolSize: 0,
                    x: 118,
                    y: 52,
                    name: 'third-bird-right',
                  },
                ],
                links: [
                  {
                    source: 'first-bird-left',
                    target: 'first-bird',
                  },
                  {
                    source: 'first-bird',
                    target: 'first-bird-right',
                  },
                  {
                    source: 'second-bird-left',
                    target: 'second-bird',
                  },
                  {
                    source: 'second-bird',
                    target: 'second-bird-right',
                  },
                  {
                    source: 'third-bird-left',
                    target: 'third-bird',
                  },
                  {
                    source: 'third-bird',
                    target: 'third-bird-right',
                  },
                ],
                lineStyle: {
                  normal: {
                    width: 1,
                    curveness: 0.3,
                    color: '#333',
                  },
                },
                itemStyle: {
                  normal: {
                    color: '#555',
                  },
                },
                silent: true,
                z: 4,
              },
            ],
          }
          this.setChart(this.opt)
          return
        }
      }, 500)
    },
    setChart(opt) {
      this.myChart.hideLoading()
      this.myChart.setOption(opt, true) // 第二个参数表示多个charts切换的参数不合并、默认为false
    },
    SizeAutoChange() {
      this.myChart.resize()
    },
    mousedown(e) {
      console.log('点击了')
      let chartBox = this.chartBox
      let Chart = this.Chart
      let parentBorder = this.parentBorder
      let childBorder = this.childBorder
      let left = e.clientX
      let top = e.clientY
      const width = Chart.offsetWidth
      const height = Chart.offsetHeight
      // console.log('开始缩放：', e)
      document.onmousemove = (e) => {
        // console.log('开始移动：', e)
        e.preventDefault()
        if (e.stopPropagation) {
          e.stopPropagation()
        } else {
          e.cancelable = true
        }
        const finallyPoint = {
          left: 0,
          top: 0,
          width: 0,
          height: 0,
        }
        console.log('缩放')
        // XXX缩放
        finallyPoint.width =
          e.clientX - left + width >
          chartBox.offsetWidth -
            Chart.offsetLeft -
            (parentBorder * 2 + childBorder * 2)
            ? chartBox.offsetWidth -
              Chart.offsetLeft -
              (parentBorder * 2 + childBorder * 2)
            : e.clientX - left + width
        finallyPoint.height =
          e.clientY - top + height >
          chartBox.offsetHeight -
            Chart.offsetTop -
            (parentBorder * 2 + childBorder * 2)
            ? chartBox.offsetHeight -
              Chart.offsetTop -
              (parentBorder * 2 + childBorder * 2)
            : e.clientY - top + height
        Chart.style.width = finallyPoint.width + 'px'
        Chart.style.height = finallyPoint.height + 'px'
        chartBox.style.width = finallyPoint.width + 20 + 'px'
        chartBox.style.height = finallyPoint.height + 20 + 'px'
        this.SizeAutoChange()

        document.onmouseup = (e) => {
          document.onmousemove = null
          document.onmouseup = null
          Chart.style.cursor = 'move'
        }
      }
    },
  },
  mounted() {
    this.myChart = this.$echarts.init(this.$refs['ChartRef'], 'dark')
    this.chartBox = document.getElementById('chartBox')
    this.Chart = document.getElementById('Chart')
    this.parentBorder = 3
    this.childBorder = 3
  },
}
</script>
 
<style scoped lang="less">
.vue-grid-layout {
  background: #eee;
}
.vue-grid-item:not(.vue-grid-placeholder) {
  background: rgb(255, 255, 255);
  border: 1px solid black;
}
.vue-grid-item .static {
  background: #cce;
}
.select {
  margin: 10px 0;
}
#chartBox {
  position: relative;
  width: 400px;
  height: 400px;
  border: 3px solid aqua;
  border-radius: 20px;
  #Chart {
    position: absolute;
    z-index: 8;
    inset: 0;
    margin: auto;
    width: 380px;
    height: 380px;
    border: 3px solid red;
  }
  .dot {
    width: 20px;
    height: 20px;
    background: orange;
    border-radius: 50%;
    cursor: nw-resize;
    position: absolute;
    z-index: 10;
    right: 0;
    bottom: 0;
  }
}
</style>