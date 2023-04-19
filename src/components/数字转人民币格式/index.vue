<template>
  <div>
    <h2>
      js <mark>toLocaleString()</mark> Api：
      <el-tag type="warning" class="ft-20">
        {{ Number(1000000).toLocaleString() }}
      </el-tag>
    </h2>
    <h2>
      封装方法带小数点后两位：
      <el-tag type="warning" class="ft-20">
        {{ rmb(1000000) }}
      </el-tag>
    </h2>
    <h2>
      中文大写格式：
      <el-tag type="warning" class="ft-20">
        {{ bigRmb(1000000) }}
      </el-tag>
    </h2>

    <!-- 
      :symbolCanSelect="false" 货币符号可否被选中
      :show-symbol="true" 是否显示货币符号
      :precision="2" 精度
      :disable-toggle-separator="false" 是否禁用分隔符切换
      color="red"
      separator="," 分隔符
      money-symbol="￥" 货币符号
      empty-string="-" 空值显示
      empty-string-color="blue"
     -->
    <div class="test">
      价格(组件)：
      <money :value="price" />
    </div>

    <el-input
      v-model="price"
      placeholder=""
      style="width: 200px; margin-top: 20px"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: '12345.2312',
    }
  },
  methods: {
    rmb(str) {
      return String(parseFloat(str).toFixed(2))
        .split('')
        .reverse()
        .map((item, index) => {
          return index > 3 && !(index % 3) ? item + ',' : item
        })
        .reverse()
        .join('')
    },
    bigRmb(money) {
      //汉字的数字
      var cnNums = new Array(
        '零',
        '壹',
        '贰',
        '叁',
        '肆',
        '伍',
        '陆',
        '柒',
        '捌',
        '玖'
      )
      //基本单位
      var cnIntRadice = new Array('', '拾', '佰', '仟')
      //对应整数部分扩展单位
      var cnIntUnits = new Array('', '万', '亿', '兆')
      //对应小数部分单位
      var cnDecUnits = new Array('角', '分', '毫', '厘')
      //整数金额时后面跟的字符
      var cnInteger = '整'
      //整型完以后的单位
      var cnIntLast = '元'
      //最大处理的数字
      var maxNum = 999999999999999.9999
      //金额整数部分
      var integerNum
      //金额小数部分
      var decimalNum
      //输出的中文金额字符串
      var chineseStr = ''
      //分离金额后用的数组，预定义
      var parts
      // 传入的参数为空情况
      if (money == '') {
        return ''
      }
      money = parseFloat(money)
      if (money >= maxNum) {
        return ''
      }
      // 传入的参数为0情况
      if (money == 0) {
        chineseStr = cnNums[0] + cnIntLast + cnInteger
        return chineseStr
      }
      // 转为字符串
      money = money.toString()
      // indexOf 检测某字符在字符串中首次出现的位置 返回索引值（从0 开始） -1 代表无
      if (money.indexOf('.') == -1) {
        integerNum = money
        decimalNum = ''
      } else {
        parts = money.split('.')
        integerNum = parts[0]
        decimalNum = parts[1].substr(0, 4)
      }
      //转换整数部分
      if (parseInt(integerNum, 10) > 0) {
        let zeroCount = 0
        let IntLen = integerNum.length
        for (let i = 0; i < IntLen; i++) {
          let n = integerNum.substr(i, 1)
          let p = IntLen - i - 1
          let q = p / 4
          let m = p % 4
          if (n == '0') {
            zeroCount++
          } else {
            if (zeroCount > 0) {
              chineseStr += cnNums[0]
            }
            zeroCount = 0
            chineseStr += cnNums[parseInt(n)] + cnIntRadice[m]
          }
          if (m == 0 && zeroCount < 4) {
            chineseStr += cnIntUnits[q]
          }
        }
        // 最后+ 元
        chineseStr += cnIntLast
      }
      // 转换小数部分
      if (decimalNum != '') {
        let decLen = decimalNum.length
        for (let i = 0; i < decLen; i++) {
          let n = decimalNum.substr(i, 1)
          if (n != '0') {
            chineseStr += cnNums[Number(n)] + cnDecUnits[i]
          }
        }
      }
      if (chineseStr == '') {
        chineseStr += cnNums[0] + cnIntLast + cnInteger
      } else if (decimalNum == '') {
        chineseStr += cnInteger
      }

      return chineseStr
    },
  },
}
</script>

<style scoped>
.ft-20 {
  font-size: 20px;
}
.test {
  font-size: 24px;
  user-select: none;
}
</style>
