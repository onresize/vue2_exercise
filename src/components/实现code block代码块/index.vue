<script>
const code_example_1 = `<template>
  <div id="app">
    <img alt="Vue logo" class="logo" src="https://cn.vuejs.org/images/logo.svg" />
    <h1>Welcome to Vue.js {{version}} !</h1>
    <div class="test" >scss test</div>
    <el-button>按钮</el-button>
  </div>
</template>
<script>
export default {
    data() {
      return {
        version: '2.x'
      };
    },
  };
<\/script>

<style>
#page-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  width:66px;
}
h1 { 
  color: #fff;
}
</style>

<style lang='scss' >
$font-stack:    Helvetica, sans-serif;
$primary-color: red;

.test{
  font-size:66px;
  font: 600 $font-stack;
  color: $primary-color;
}
</style> `

export default {
  name: 'demo',
  data() {
    return {
      className: ['page-container'], // page className
      themeMode: 'light', // light or dark
    }
  },
  mounted() {},
  methods: {
    changeLight() {
      this.themeMode = 'light'
      console.log(this.themeMode)
    },
    changeDark() {
      this.themeMode = 'dark'
      console.log(this.themeMode)
    },
  },

  render() {
    const { className, style } = this

    return (
      <div class={className} style={style}>
        <div style="display: flex; width: 800px;justify-content: space-between">
          <a-button
            type="primary"
            on-click={this.changeLight}
          >
            light
          </a-button>
          <a-button type="primary" on-click={this.changeDark}>
            dark
          </a-button>
          <h2>安装：npm i vue-code-view 一个在线编辑、实时预览的代码交互组件</h2>
        </div>
        <code-viewer
          class="test"
          source={code_example_1}
          showCode={true}
          layout={'right'}
          themeMode={this.themeMode}
          errorHandler={(errorMsg) => {
            this.$notify.error({
              title: 'Info',
              message: errorMsg,
            })
          }}
          renderToolbar={(CodeButton, transparentButton) => {
            return (
              <div>
                {CodeButton}
                <a-tooltip>
                  <template slot="title">jsx renderToolbar</template>
                  <a-button
                    type="primary"
                    shape="circle"
                    icon="search"
                  />
                </a-tooltip>
                <a-button type="primary" icon="download" />
                <a-button
                  type="primary"
                  shape="circle"
                  icon="download"
                />
                {transparentButton}
              </div>
            )
          }}
        ></code-viewer>
      </div>
    )
  },
}
</script>

<style lang="less" scoped>
.page-container {
  padding: 16px;
}
.test {
  height: calc(100vh - 125px);
  width: calc(100vw - 310px);
  font-size: 18px;
}
</style>
