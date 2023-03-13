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
[data-text]::before {
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
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80vw;
  height: 90vh;
  overflow: auto;
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

.letter::first-letter {
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
</style>