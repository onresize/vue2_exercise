<template>
  <div>
    <div
      ref="myChart1"
      class="echart"
      style="width: 330px; height: 300px"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    personHouse: {
      type: Object,
      defalut: () => {},
    },
  },
  mounted() {
    this.drawLine1()
  },
  methods: {
    drawLine1() {
      console.log('drawLine')
      var data = [
        {
          name: '',
          itemStyle: {
            color: '#187a2f',
            borderWidth: 10,
          },
          value: 32.92,
          label: {
            fontSize: 8,
            fontWeight: 'bold',
          },
          children: [
            {
              name: '商用',
              itemStyle: {
                color: '#3aa255',
              },
              label: {
                color: '#fff',
                padding: [0, -60, 0, 0], //调整左右位置
                fontSize: 12,
                fontWeight: 'bold',
                fontFamily: 'PingFang SC',
                rotate: 0, // 倾斜30度
                formatter: (param) => {
                  var str = ''
                  switch (param.data.name) {
                    case '商用':
                      str = '{numbers|' + 10 + ' } ' + param.data.name
                      break
                  }
                  return str
                },
                rich: {
                  numbers: {
                    padding: [-10, -5, 0, 0], //调整左右位置
                    fontSize: 23,
                    color: '#03cb83',
                    align: 'left',
                    fontFamily: 'LT',
                  },
                },
              },
              value: 33.33,
              children: [],
            },
            {
              name: '公寓',
              itemStyle: {
                color: '#0bb3c7',
              },
              label: {
                color: '#fff',
                fontSize: 12,
                fontWeight: 'bold',
                fontFamily: 'PingFang SC',
                rotate: 0, // 倾斜30度
                padding: [0, 0, -30, 0], //调整左右位置
                formatter: (param) => {
                  var str = ''
                  switch (param.data.name) {
                    case '公寓':
                      str = '{numbers|' + 16 + ' }' + param.data.name
                      break
                  }
                  return str
                },
                rich: {
                  numbers: {
                    padding: [-10, -5, 0, 0], //调整左右位置
                    fontSize: 23,
                    color: '#0bb3c7',
                    align: 'left',
                    fontFamily: 'LT',
                  },
                },
              },
              value: 33.33,
              children: [],
            },
            {
              name: '住宅',
              itemStyle: {
                color: '#fde348',
              },
              label: {
                color: '#fff',
                fontSize: 12,
                fontWeight: 'bold',
                fontFamily: 'PingFang SC',
                rotate: 0, // 倾斜30度
                verticalAlign: 'top',
                padding: [-30, 0, 0, 0], //调整左右位置
                formatter: (param) => {
                  var str = ''
                  switch (param.data.name) {
                    case '住宅':
                      str = param.data.name + '{numbers|' + 12 + ' }'
                      break
                  }
                  return str
                },
                rich: {
                  numbers: {
                    padding: [-10, -10, 0, 0], //调整左右位置
                    fontSize: 23,
                    color: '#fde348',
                    align: 'left',
                    fontFamily: 'LT',
                  },
                },
              },
              value: 33.33,
              children: [
                {
                  name: `${`空置`}`,
                  itemStyle: {
                    color: '#1cede1',
                  },
                  label: {
                    color: '#fff',
                    padding: [0, 60, 0, 0], //调整左右位置
                    fontSize: 12,
                    fontWeight: 'bold',
                    fontFamily: 'PingFang SC',
                    rotate: 0, // 倾斜30度
                    formatter: (param) => {
                      var str = ''
                      switch (param.data.name) {
                        case '空置':
                          str =
                            param.data.name + ' {numbers|' + 2 + '}'
                          break
                      }
                      return str
                    },
                    rich: {
                      numbers: {
                        padding: [-10, 0, 0, 0], //调整左右位置
                        fontSize: 23,
                        color: '#1cede1',
                        align: 'left',
                        fontFamily: 'LT',
                      },
                    },
                  },
                  value: 11,
                },
                {
                  name: '自住',
                  itemStyle: {
                    color: '#007aff',
                  },
                  label: {
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 'bold',
                    fontFamily: 'PingFang SC',
                    rotate: 0, // 倾斜30度
                    verticalAlign: 'top',
                    padding: [0, 70, 0, 0], //调整左右位置
                    formatter: (param) => {
                      var str = ''
                      switch (param.data.name) {
                        case '自住':
                          str =
                            param.data.name + ' {numbers|' + 7 + '}'
                          break
                      }
                      return str
                    },
                    rich: {
                      numbers: {
                        padding: [-10, 0, 0, 0], //调整左右位置
                        fontSize: 23,
                        color: '#0271fb',
                        align: 'left',
                        fontWeight: 'bold',
                        fontFamily: 'LT',
                      },
                    },
                  },
                  value: 11,
                },
                {
                  name: '出租',
                  itemStyle: {
                    color: '#00ecff',
                  },
                  label: {
                    padding: [-30, 0, 0, 0], //调整左右位置
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 'bold',
                    fontFamily: 'PingFang SC',
                    rotate: 0, // 倾斜30度
                    formatter: (param) => {
                      var str = ''
                      switch (param.data.name) {
                        case '出租':
                          str =
                            param.data.name + ' {numbers|' + 3 + '}'
                          break
                      }
                      return str
                    },
                    rich: {
                      numbers: {
                        padding: [-10, 0, 0, 0], //调整左右位置
                        fontSize: 23,
                        color: '#4bc6fd',
                        align: 'left',
                        fontFamily: 'LT',
                      },
                    },
                  },
                  value: 11,
                },
              ],
            },
          ],
        },
        {
          name: '',
          itemStyle: {
            color: '#0aa3b5',
            borderWidth: 10,
          },
          value: 31.8,
          label: {
            fontSize: 8,
            fontWeight: 'bold',
          },
          children: [],
        },
        {
          name: '',
          itemStyle: {
            color: '#fde348',
          },
          label: {
            fontSize: 8,
            fontWeight: 'bold',
          },
          value: 31.28,
          children: [],
        },
      ]
      let myChart1 = this.$echarts.init(
        this.$refs['myChart1'],
        'dark'
      )
      myChart1.setOption({
        graphic: [
          {
            type: 'text', // 类型
            left: '41%',
            top: '38%', // 距离顶部位置
            style: {
              text: this.personHouse.sum, // 中间文字
              fill: '#fff', // 文字颜色
              fontSize: 38, // 文字大小
              fontFamily: 'LT',
            },
          },
          {
            type: 'text', // 类型
            left: '53%',
            top: 'center', // 距离顶部位置
            style: {
              text: ' 栋', // 中间文字
              fill: '#4CC6FF', // 文字颜色
              fontSize: 14, // 文字大小
              fontFamily: 'PingFang SC',
              fontWeight: 'bold',
            },
          },
        ],
        series: {
          type: 'sunburst',
          highlightPolicy: 'ancestor',
          data: data,
          avoidLabelOverlap: true,
          label: {
            normal: {
              show: true,
              position: 'left',
            },
          },
          textStyle: {
            color: 'pink',
          },
          radius: ['85%', '75%'], // 最外层
          sort: null,
          itemStyle: {
            borderWidth: 1,
            borderColor: null,
          },
          levels: [
            {},
            {
              radius: ['40%', '30%'], // 最里层
              itemStyle: {
                borderWidth: 1,
              },
              label: {
                rotate: 'tangential',
              },
            },
            {
              radius: ['48%', '45%'], // 中间层
              label: {
                padding: [5, 0, 0, 0], //调整左右位置
              },
            },
          ],
        },
      })
    },
    drawLine() {
      let _this = this
      let names = ['摄像机', '门禁', '道闸', '其他']
      let values = [
        12,
        23,
        43,
        0,
      ]

      let colorList = [
        '#6AB4FF',
        '#FF2E90',
        '#FDE748',
        '#03C781',
        '#27FFEB',
      ]
      let colorFont = [
        '#6AB4FF',
        '#FF2E90',
        '#FDE748',
        '#03C781',
        '#27FFEB',
      ]
      let data = []
      for (let i = 0; i < names.length; i++) {
        data.push({
          name: names[i],
          value: values[i],
          itemStyle: {
            color: colorList[i],
          },
          label: {
            color: colorFont[i],
          },
        })
      }
      // 公用调整
      let itemStyle = {
        normal: {
          borderColor: 'rgba(0,0,0,0)',
          borderWidth: 5,
          color: function (params) {
            return colorFont[params.dataIndex]
          },
        },
      }
      // 距离 x，y
      let leftCenter = ['center', 'center']
      let radius1 = [60, 45] // 饼图
      // 公用调整-end
      let opt = {
        backgroundColor: 'rgba(0,0,0,0)',
        tooltip: {
          trigger: 'item',
        },
        legend: [
          {
            x: 'left',
            left: '-10px',
            top: '50px',
            type: 'plain',
            icon: 'none',
            borderWidth: '9px',
            orient: 'vertical',
            data: ['摄像机'],
            // itemStyle: {
            //   color:
            //     new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //         offset: 0,
            //         color: 'rgba(87, 214, 255, 1)'
            //     }, {
            //         offset: 1,
            //         color: 'rgba(3, 128, 255, 1)'
            //     }]),
            // },
            formatter: (name) => {
              for (let i = 0; i < values.length; i++) {
                return (
                  `{d|●}` +
                  `{a| ${values[0]}}` +
                  `\n` +
                  `{b|${name}}` +
                  `{c|/个}`
                )
              }
            },
            textStyle: {
              rich: {
                d: {
                  color: 'linear-gradient(99deg, #57D6FF, #0380FF)',
                  fontSize: 9,
                },
                a: {
                  color: 'linear-gradient(99deg, #57D6FF, #0380FF)',
                  fontSize: 24,
                  fontFamily: 'LcdD',
                  padding: [0, 0, 10, 0],
                },
                b: {
                  color: '#fff',
                  fontSize: 14,
                  fontFamily: 'PingFang SC',
                },
                c: {
                  color: '#fff',
                  fontSize: 12,
                  fontFamily: 'PingFang SC',
                },
              },
            },
          },
          {
            x: 'left',
            left: '-10px',
            top: '115px',
            type: 'plain',
            icon: 'none',
            borderWidth: '9px',
            orient: 'vertical',
            data: ['门禁'],
            // itemStyle: {
            //   color:
            //     new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //         offset: 0,
            //         color: 'rgba(76, 251, 192, 1)'
            //     }, {
            //         offset: 1,
            //         color: 'rgba(0, 220, 129, 1)'
            //     }]),
            // },
            formatter: (name) => {
              for (let i = 0; i < values.length; i++) {
                return (
                  `{d|●}` +
                  `{a| ${values[1]}}` +
                  `\n` +
                  `{b|${name}}` +
                  `{c|/个}`
                )
              }
            },
            textStyle: {
              rich: {
                d: {
                  color: 'linear-gradient(68deg, #4CFBC0, #00DC81)',
                  fontSize: 9,
                },
                a: {
                  color: 'linear-gradient(68deg, #4CFBC0, #00DC81)',
                  fontSize: 24,
                  fontFamily: 'LcdD',
                  padding: [0, 0, 10, 0],
                },
                b: {
                  color: '#fff',
                  fontSize: 14,
                  fontFamily: 'PingFang SC',
                },
                c: {
                  color: '#fff',
                  fontSize: 12,
                  fontFamily: 'PingFang SC',
                },
              },
            },
          },
          {
            x: 'right',
            left: '220px',
            top: '50px',
            type: 'plain',
            icon: 'none',
            borderWidth: '9px',
            orient: 'vertical',
            data: ['道闸'],
            // itemStyle: {
            //   color:
            //     new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //         offset: 0,
            //         color: 'rgba(246, 205, 124, 1)'
            //     }, {
            //         offset: 1,
            //         color: 'rgba(239, 246, 163, 1)'
            //     }]),
            // },
            formatter: (name) => {
              for (let i = 0; i < values.length; i++) {
                return (
                  `{d|●}` +
                  `{a| ${values[2]}}` +
                  `\n` +
                  `{b|${name}}` +
                  `{c|/个}`
                )
              }
            },
            textStyle: {
              rich: {
                d: {
                  color: 'linear-gradient(99deg, #F6CD7C, #EFF6A3)',
                  fontSize: 9,
                },
                a: {
                  color: 'linear-gradient(99deg, #F6CD7C, #EFF6A3)',
                  fontSize: 24,
                  fontFamily: 'LcdD',
                  padding: [0, 0, 10, 0],
                },
                b: {
                  color: '#fff',
                  fontSize: 14,
                  fontFamily: 'PingFang SC',
                },
                c: {
                  color: '#fff',
                  fontSize: 12,
                  fontFamily: 'PingFang SC',
                },
              },
            },
          },
          {
            x: 'right',
            left: '220px',
            top: '115px',
            type: 'plain',
            icon: 'none',
            borderWidth: '9px',
            orient: 'vertical',
            data: ['其他'],
            // itemStyle: {
            //   color:
            //     new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //         offset: 0,
            //         color: 'rgba(220, 164, 255, 1)'
            //     }, {
            //         offset: 1,
            //         color: 'rgba(250, 144, 250, 1)'
            //     }]),
            // },
            formatter: (name) => {
              for (let i = 0; i < values.length; i++) {
                return (
                  `{d|●}` +
                  `{a| ${values[3]}}` +
                  `\n` +
                  `{b|${name}}` +
                  `{c|/个}`
                )
              }
            },
            textStyle: {
              rich: {
                d: {
                  color: 'linear-gradient(68deg, #DCA4FF, #FA90FA)',
                  fontSize: 9,
                },
                a: {
                  color: 'linear-gradient(68deg, #DCA4FF, #FA90FA)',
                  fontSize: 24,
                  fontFamily: 'LcdD',
                  padding: [0, 0, 10, 0],
                },
                b: {
                  color: '#fff',
                  fontSize: 14,
                  fontFamily: 'PingFang SC',
                },
                c: {
                  color: '#fff',
                  fontSize: 12,
                  fontFamily: 'PingFang SC',
                },
              },
            },
          },
        ],
        graphic: [
          {
            z: 4,
            type: 'image',
            id: 'logo',
            left: 'center',
            top: 'center',
            bounding: 'raw',
            origin: [0, 0], //中心点
            scale: [1.0, 1.0], //缩放
            style: {
              // image: require('@/assets/imgs/vr-safety-community/shebeiguanliyuan_zhongxin@2x.png'),
              opacity: 1,
              width: 148,
              height: 148,
            },
          },
        ],
        series: [
          // 左饼图
          {
            // 饼图圈
            type: 'pie',
            zlevel: 3,
            radius: radius1,
            center: leftCenter,
            itemStyle: itemStyle,
            roseType: 'radius',
            labelLine: {
              show: false,
              normal: {
                length: 3,
                length2: 0,
                lineStyle: {
                  color: 'transparent',
                },
              },
            },
            label: {
              show: false,
              position: 'right',
            },
            data: data,
          },
        ],
      }
      let myChart1 = this.$echarts.init(this.$refs['myChart1'])
      myChart1.setOption(opt)
    },
  },
}
</script>
