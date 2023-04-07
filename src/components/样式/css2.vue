<template>
  <div class="flex">
    <div>
      <h2>鼠标框选文字改变背景色</h2>
      <pre>
      ::selection {
        background: rgb(255, 145, 0);
        color: #fff;
      }
    </pre
      >
    </div>
    <div>
      <h2
        data-text="伪元素"
        data-endText="的多种写法"
        class="dataText"
      >
        content
      </h2>
      <pre>
      a::after {
        content: '';  // 为空
        content: url('');  // 为图片
        content: attr(data-text);  // 为自定义标签属性值
      }

      [data-text]::before {
        content: attr(data-text)'-';
        color: red;
      }
      
      .dataText {
        &::after {
          content: '-'attr(data-endText);
          color: pink;
        }
      }
    </pre
      >
    </div>
    <div>
      <h2 class="letter">首字母样式</h2>
      <pre>
     .letter::first-letter {
       font-size: 30px;
       font-weight: bold;
       color: red;
       font-family: '楷体';
      }
    </pre
      >
    </div>
    <div>
      <h2>css、less、sass/scss自定义属性和用法</h2>
      <p class="red">css自定义变量</p>
      <pre>
     * {
       --colRed: red;
     }
     .red {
       color: var(--colRed);
     }
     p {
       width: fit-content;
       font-size: 20px;
       padding: 4px;
       border: 2px solid black;
       border-radius: 10px;
     }
    </pre
      >
    </div>
    <div>
      <p class="green">less自定义变量</p>
      <pre>
      @colGreen: green;
      .green {
       color: @colGreen;
      }
    </pre
      >
    </div>
    <div>
      <p class="blue">scss/sass自定义变量</p>
      <pre>
      $colBlue: blue;
      .blue {
        color: $colBlue;
      }
    </pre
      >
    </div>
    <div>
      <span class="sp">鼠标悬浮展示效果</span>
    </div>
    <div class="ruby">
      <ruby>写<rp>(</rp><rt>xiě</rt><rp>)</rp></ruby>
      <ruby>代<rp>(</rp><rt>dài</rt><rp>)</rp></ruby>
      <ruby>码<rp>(</rp><rt>mǎ</rt><rp>)</rp></ruby>
    </div>
    <div class="pDiv">
      <h2>段落首行样式</h2>
      <p>
        11111111111111111111111
        <br />
        222222222222222222222222
        <br />
        333333333333333333333333
      </p>
    </div>
    <div>
      <h2>一些特别的css写法</h2>
      <a href="##" class="columnNews">我的背景想变成红色</a>
      <a href="##" class="columnVideo">我的背景想变成红色</a>
      <a href="##" class="columnAboutUs">我的背景想变成红色</a><br />
      <a href="1.doc">我的背景想变成绿色</a>
      <a href="2.doc">我的背景想变成绿色</a><br />
      <a href="##" title="this is a box">我的背景想变成蓝色</a>
      <a href="##" title="box1">我的背景想变成蓝色</a>
      <a href="##" title="there is two boxs">我的背景想变成蓝色</a>
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
 
 <style lang="less" scoped>
/*或者a[class*=column]{color: red}*/
a[class^='column'] {
  color: red;
}

/*或者a[href*=doc]{color: green}*/
a[href$='doc'] {
  color: green;
}

a[title*='box'] {
  color: blue;
}

xie [data-text]::before {
  content: attr(data-text) '-';
  color: red;
}
.dataText {
  &::after {
    content: '-' attr(data-endText);
    color: pink;
  }
}
.flex {
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 82vw;
  height: 90vh;
  overflow: auto;
}
div {
  height: fit-content;
  margin: 10px;
}
pre {
  width: fit-content;
  border-radius: 20px;
  border: 3px solid pink;
  padding: 20px 20px 0 0;
}
/* 鼠标框选文字改变背景色 */
::selection {
  background: rgb(255, 145, 0);
  color: #fff;
}
::-moz-selection {
  background: rgb(255, 145, 0);
  color: #fff;
}

.letter:first-letter {
  font-size: 30px;
  font-weight: bold;
  color: red;
  font-family: '楷体';
}
* {
  --colRed: red;
}
.red {
  color: var(--colRed);
}
p {
  width: fit-content;
  font-size: 20px;
  padding: 4px;
  border: 2px solid black;
  border-radius: 10px;
}
</style>

<style scoped lang="less">
@colGreen: green;
.green {
  color: @colGreen;
}
</style>


<style scoped lang="scss">
$colBlue: blue;
.blue {
  color: $colBlue;
}

.sp {
  font-size: 20px;
  background: linear-gradient(90deg, red, blue) no-repeat right bottom;
  background-size: 0 3px;
  transition: background-size 1s;
  &:hover {
    background-size: 100% 3px;
    background-position-x: left;
  }
}

.ruby {
  font-size: 24px;
  font-weight: bold;
  rt {
    letter-spacing: 1px;
    font-size: 20px;
    margin-left: 5px;
    font-weight: 600 !important;
    &:first-letter {
      margin-left: 6px;
      color: red;
    }
  }
}

.pDiv {
  p {
    border: none !important;
    text-indent: 10px;
    &:first-line {
      color: red;
    }
  }
}
</style>