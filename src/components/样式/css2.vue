<template>
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
    </pre>
    <p class="green">less自定义变量</p>
    <pre>
      @colGreen: green;
      .green {
       color: @colGreen;
      }
    </pre>
    <p class="blue">scss/sass自定义变量</p>
    <pre>
      $colBlue: blue;
      .blue {
        color: $colBlue;
      }
    </pre>
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
 
 <style>
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