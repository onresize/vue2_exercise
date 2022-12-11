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
    this.drawLine()
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
      let names = ['摄像机', '门禁', '道闸', '其他']
      let values = [12, 23, 43, 5]

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
      let leftCenter = ['40%', 'center']
      let radius1 = [60, 45] // 饼图
      // 公用调整-end
      let opt = {
        backgroundColor: 'rgba(0,0,0,0)',
        tooltip: {
          trigger: 'item',
        },
        legend: [
          {
            itemHeight: 14,
            itemWidth: 14,
            x: 'right',
            left: '55%',
            top: '20%',
            type: 'plain',
            icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAeCAYAAADdGWXmAAAAAXNSR0IArs4c6QAAA3VJREFUSEu9l01sVGUUhp9z73SmtLT4EyWi9S+WRbHGZJCf1hpYaGPdmEAgMSAGWLsxLlm5ZeXSIGocF1K3EiKa+gdTmo7RVlgNVOUngSiGlrbMdO73mns7LXY6c2dKtF9yFzc553vvOff93vN+RoPrySE1r1/DRt84gNEv46QnPrl+P/l8pxUa2cbqBkl+7xnWB00MeHAIowtol5jEGJf42J/j5JlrXGePBXH71QaTLJ3jwWRAn8EhGduABwwWcwRC3MQ4i/igOMNwbgd/YaZqoFXB0qNa1wzdznHY4BXEwxh+zFeXgBuC057HsVKJsXPbbLIyfglYelQtfkCn73EA8TrwqEGybqvLAYKiwRXEF/LJFOFibrPNLORHYF3nlbxvlg4CdmPsEzxt0NIoSGWcYNpgAuPTkmPw9lquXthkRXthRB1Jj345Dgo2GbTfK0gV0FsmxuXxUUmctp4RfS14vvLnVySGRJjGmBJENDdIIdowWudfqy8ZDvG3wc8hWNjTNTWrEXeAX4Evge/x+T2KDXgCeAl4DXgWo7lOR2ZDsFmoESimMD6Xx/upKSa+3ck0LNBatmOI1kIbT5njbcRejLYYwDu1KwsrMjKFAu/l+uyPuK9O/6DHUymOIPbFVBhVtqyNYZ/N8ZMCDmZ7bLwRwmw/q25L8KGMtAmvSk51MIiIcLTocfTf5yS2ulG1JB3vGLwLVdtZA8y4JvFGdot910hVCzFbh7XT98kgNjRcmeA3Sryc7bH8SsBePKeNDr7CIqZWrhr/bDXBWM02ripBVpv64VgMZSpTKDZ4qJMcgfqHuqZcCSYNToRydWuKiQsVctU1ROu6slwJ9tSZGDFydZe4s4jzoRA7x49+gstzDvlGh4k+jIFIiOPEfH6viPqNjRi4TfiIYpRq0QRfW35iR4yFPgV+mR+eot8ZbwHd/8PwHJPHMZr4ZtEWtM7wWBPsRuz/L2yBZ1wMHJ85GAx8ruQ229wyw5Mo8YznsR+xC1uZ4cEoIK5iDFIkU0hxaZnhqRSxrcNqTyR4btHKwUNAIkYnIyuHOOU8jitgvK6VW7JZ2aSmRK8chzG2LzOp4dwTNwXZ0KQGkB3ZEprWFZjUJaAn5PduKNtvu+vAQvttMIZxvOBxKneJG/duvyt6Fl4sHmmjE8ebBq8uXiz+JJ8faOxi8Q894b2KViOa/wAAAABJRU5ErkJggg==',
            borderWidth: '10px',
            orient: 'vertical',
            data: ['摄像机'],
            formatter: (name) => {
              for (let i = 0; i < values.length; i++) {
                return (
                  `{d|}` + `{b|${name}：}` + `{a| ${values[0]}个}`
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
                  color: '#6ab4ff',
                  fontSize: 18,
                  fontFamily: 'LcdD',
                  padding: [0, 0, 0, -5],
                },
                b: {
                  color: '#fff',
                  fontSize: 14,
                  fontFamily: 'PingFang SC',
                  padding: [0, 0, 0, 5],
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
            itemHeight: 14,
            itemWidth: 14,
            x: 'right',
            left: '55%',
            top: '30%',
            type: 'plain',
            icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAeCAYAAADdGWXmAAAAAXNSR0IArs4c6QAAA19JREFUSEvNl09sVFUUxn/nvpkpAqWCURO1EoiwEEtI3GgMJi6kscbERDImTbGmNMyCZDbGJSu2rEhYDClU4mB1cGckRHGhMeLKaKu7Iv4BE4m2Sv/PzLufeTMUptOZN9NAGu/2nXe/+537nXO+a7S5Rke1odzBboNBQa+DiyGcW3yQyWyfLbWzjbUKKhQUzIQ8KtGHcdjgacEW4BYwgXjPjIudAX+m0xbG7RcDJst9wENm7HfiMPAcxjag9h8hpnB84+G0PN9m+vkbTI1AG4LlCupKlOmRMQwcAB4BgphTl4GbwOcmRuY849kBi5ivWCvAcp9oY+IfdilRuZfXDR4HUq1SXfO9CFz3xscqk6eLq5nXbH75ewWsUFBq2tNt4qCDAYydiI1rAKkPnQOuId5XggtdcCOdtqKdGlN3h9GLGELswSqXf7/Wv4gJjNGlKMUjY7pssE+suvxaQAnmEDNmVGQu0YHRabCpTjT1B/XANPC9nRnTvOCBplTEIvCjjE8RXyUdv0axJc92jBdNvAo8g7GhhewXImYL0CRQzOD4KHScLMO1o2nm7spadqrApgTsCDxZPG9GTGMAF5szqzLKhyWOZwbtt7hT587pySDJMariasjQYKEZWJTn78KQocyATbSjllxePS7gjMGzgGtQY03AovTBibCTE7V1EssuqtFZ3pF4t1E645j94UX/kX77sh1WyzG583opcOSBx9pnBr9Q5uXhQza5FrDTH2q3E58B2/+3YOuYxnUWyDpKv9L8WBTkfZtF7ZIcs1ZFHdeuDG5JFELPyXKqSbsqsiNwZM1I37YLzQQc065u/6KozYifokYsz9eB5/fQI5eiW7Af6IsascU18+pYqDTiy8A+WowYjFmJWYMiAhkpMzYjNrcxYqaAH6rDU/RivI3oue/DE8bNGEk4vrhjC2ZLPOGNgxiHBDuNe7YFVxHnI1vgp7meyVhpleFxMzxlVcA31mx4oikubgAXKJEPt/LzKsNTL598XluWHHsrVk4cwHgYSMT0yWUrdwnH2fkSEy2t3MrNqibVOV5ADJt4voFJjYp/CuNKZFI7lrgyOMjUmkxqLWid/R4C9rBsv8W4HGd9kktbQ27eg/1eyTN6WBST7AoC3pJ45c7D4i8ms9n2Hhb/AS2UvQU/eHfNAAAAAElFTkSuQmCC',
            borderWidth: '9px',
            orient: 'vertical',
            data: ['门禁'],
            formatter: (name) => {
              for (let i = 0; i < values.length; i++) {
                return (
                  `{d|}` + `{b|${name}：}` + `{a| ${values[1]}个}`
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
                  color: '#ff2e90',
                  fontSize: 18,
                  padding: [0, 0, 0, -5],
                },
                b: {
                  color: '#fff',
                  fontSize: 14,
                  fontFamily: 'PingFang SC',
                  padding: [0, 0, 0, 5],
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
            itemHeight: 14,
            itemWidth: 14,
            x: 'right',
            left: '55%',
            top: '40%',
            type: 'plain',
            icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAeCAYAAADdGWXmAAAAAXNSR0IArs4c6QAAAv1JREFUSEvN10toXHUUx/HPmdF0mmgEiwpqLBbtQlsR3ChSwYUt1o1gUZDWigruuhGhFoQBRVLIyqXUqhgXNm4txepCEetCpCa6a42PVrBgxaZJxryO3JmEJNPM5FEtXrire/7/3/+c/3l8b1jhk9Ws6LLZtL3YIRyV3tPpVOyLv1eyTSxnlEeybNhNZuxU8rxwl9QtXRCGzHhXyVHf+D0GYrrdfi3FUoY+G0zaJuoi9+N6LFyT0nl8peQtY75W9UeIXEp0SbHszeuwVXgB23Ejym1OPYVzOC4dUjMY1bjQbL9ILKvZqeJO7BUexy3oWC7UC75P4Iz0EfrVnI5qjM19r4tlNTt06jFtl5Ld2ITOVYg0m45iWHpf2YBRZ6MaE5GvZ48OO6TnpLuF7ssQaV76lzSk5B0TjkcezE9x7xKXv3BhkQjFaUeERpqndbhW6GpKmmbBGfyJk4VYEdP1Lb1JNeF7fGzGF8p+rttO26jkITwmbREqy0RkPLI3x9sYjuBD6U01w6pG59K6XhpVXSpuF/bhqbqnrZ5Ua+1Zw6N+6bXYH7+0O3X25m3Cq9LuNgcfbyVWxPnbImlifwytJGGyN7cqeVu6D6Ul1rQUG5H61PQtrJO23hU1ut5LeLlFOFuK/Wba03EgPl+JV3M2eTAfrhczN6/Gs5/MeCReiVOrEnsjNyv7BBv/t2JXNIxXNEGuaOoXve8/KOp27aox+o+sqF2lJ9tOjLbtaj53x/HDbCP+UsmvpqWyHmyTdgpb2jbzxl71ol7ZiOGidFEopnER5g7hGupvO3Aq7r/glO8WDs9nZZ07/t3hyaBwyITP5rFgnVuFXcIeaZO4bCw4LX1Qx4JuZ+LFmLwUeK52h7I9whNrAJ5iip/FgCn9Jv14CfA097GsZreKe+ool7YLN+CqNn2ygXLpmJLDxgwti3JN0FFM4g0qHpzlxweW4JTG5acTdUidcsIB51cFqYtEF+P3PIE1anAQh0055qRza8bvJUJbmQXYZ/DoWn4s/gFwEXfGUtgpVgAAAABJRU5ErkJggg==',
            borderWidth: '9px',
            orient: 'vertical',
            data: ['道闸'],
            formatter: (name) => {
              for (let i = 0; i < values.length; i++) {
                return (
                  `{d|}` + `{b|${name}：}` + `{a| ${values[2]}个}`
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
                  color: '#fde748',
                  fontSize: 18,
                  padding: [0, 0, 0, -5],
                },
                b: {
                  color: '#fff',
                  fontSize: 14,
                  fontFamily: 'PingFang SC',
                  padding: [0, 0, 0, 5],
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
            itemHeight: 14,
            itemWidth: 14,
            x: 'right',
            left: '55%',
            top: '50%',
            type: 'plain',
            icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAeCAYAAADdGWXmAAAAAXNSR0IArs4c6QAAA2JJREFUSEvNl09onFUUxX/nzeSPiWlRUUGNxWJdaCOCG0UquLDFuhFsI0hq2jSZgGI24rIrt10pFjI2SauThYlbS7G6UMS6Ek101xqtrWDAlCaZ/J935EuTkEwyk0mU4INv87373rn3vvvOPU9UOI67rzZNeMzE1gCHDBeEztcyfuUDdc1Wso02MzrqgVQDE/cLHRY6KXgc2AWMG4aNzxlfmKDhr0E1F8rtVxrMKEP3PSZ9AMJJwzPA3YKVNQYDYwG+M86K+e+zdP6NFv+vGxuCZdy9G9JNkdAuOGi4T5Aq7bUWwKPGlwI+myc/1K+u8WL7NWAZd9ctkN6XItUKfsXwoKB6s1QvzxvmAlw3/kwoB3NXs+qcWp5fBDvqgeq7mGo0PmLUIrwXqKsUpNjOkAePmPCJmB+8xe4bg2qe0wn3NlbBoUhoE35i6fC3i1O87hZ4GNS3gC+p3X1fAk8VH37RqqQW8qAJYLnMa8ANoHpWFc0GXkbDTeBHdfjcFPiOUqEYZsA/B/R5xN8Ewu+JbSTuCej5iF8G7RfUlk+HppPIpssYThh9GvD7aepHztCcXylrozcZqF8g/0hEXcKvAQ3lnFaH+5Jq2SiyGaNcYPa9rDqvlfM64+6HIzWnhFsoHeF0KbBo/ENAbVmdGK6kWjLuazL0AE8DYYM1JcEmwKfF/OnV92ST6Ooi1e8I3i2RzpJgf4Jf/0htX1cS1bJNxj0vmJADHthKZL9FCi/2qP3KVsA6fD7pCl8I9vxvwXY0jTtaIDta+sn5zhjnAvMVXuqqU0LlL/UmdDVuNHCbrqZGzvBWEV19WL9A3TJdNZfrGAnHbkrEwLTxLwkRG39bwH+kKDgSGlOkDhgOA/tLUN6qG3CbiCtsMUwCk0k3TqSHUNLB71z6ygmnCBoz/mmxeSbSTOi4oOm/b54MGZ1No69WZEEDkw+JcERwTMS9oH8lCwRXI+4XhcFAvJ5V5/w6wRMJj4rUMdCrWxU8SRcX3DAMRgq5FIVf1wmeYh5727lds8w+GVG70EHQveB0OSlnPCq4GFHvDOnhfrWUl3JrNlsSqZGq50RoN352A50SwWNClxOROkvq8se0jm1JpK4GXSu/1yiwcfCQoTdQdfEmNaPbl99FOUseFtWwz/gN0EvbeVj8A4o7vYjXjS0rAAAAAElFTkSuQmCC',
            borderWidth: '9px',
            orient: 'vertical',
            data: ['其他'],
            formatter: (name) => {
              for (let i = 0; i < values.length; i++) {
                return (
                  `{d|}` + `{b|${name}：}` + `{a| ${values[3]}个}`
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
                  color: '#03c781',
                  fontSize: 18,
                  padding: [0, 0, 0, -5],
                },
                b: {
                  color: '#fff',
                  fontSize: 14,
                  fontFamily: 'PingFang SC',
                  padding: [0, 0, 0, 5],
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
            left: '24%',
            top: 'center',
            bounding: 'raw',
            origin: [0, 0], //中心点
            scale: [1.0, 1.0], //缩放
            style: {
              image: require('./yuanxin_icon.png'),
              opacity: 1,
              width: 108,
              height: 108,
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
