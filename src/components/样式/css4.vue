<template>
  <div class="container">
    <div class="diagram">
      <div class="diagram-margin-top"></div>
      <img class="diagram-base" src="@/assets/svg/base.svg" />
      <div class="diagram-margin-bottom"></div>
      <img
        class="diagram-focus client-on"
        src="@/assets/svg/clients.svg"
        :style="{
          opacity: activeNum == 0 ? 1 : 0,
          top: activeNum == 0 ? '-73px' : '',
        }"
      />
      <div
        class="diagram-hover client-hover"
        @mouseenter="enter(0)"
        @mouseleave="leave(0)"
      ></div>
      <img
        class="diagram-focus auth-on"
        src="@/assets/svg/auth.svg"
        :style="{
          opacity: activeNum == 1 ? 1 : 0,
          top: activeNum == 1 ? '-73px' : '',
        }"
      />
      <div
        class="diagram-hover auth-hover"
        @mouseenter="enter(1)"
        @mouseleave="leave(1)"
      ></div>
      <img
        class="diagram-focus obs-on"
        src="@/assets/svg/obs.svg"
        :style="{
          opacity: activeNum == 2 ? 1 : 0,
          top: activeNum == 2 ? '-59px' : '',
        }"
      />
      <div
        class="diagram-hover obs-hover"
        @mouseenter="enter(2)"
        @mouseleave="leave(2)"
      ></div>
      <img
        class="diagram-focus loadbalance-on"
        src="@/assets/svg/loadbalance.svg"
        :style="{
          opacity: activeNum == 3 ? 1 : 0,
          top: activeNum == 3 ? '-55px' : '',
        }"
      />
      <div
        class="diagram-hover loadbalance-hover"
        @mouseenter="enter(3)"
        @mouseleave="leave(3)"
      ></div>
      <img
        class="diagram-focus tunnel-on"
        src="@/assets/svg/tunnel.svg"
        :style="{
          opacity: activeNum == 4 ? 1 : 0,
          top: activeNum == 4 ? '121px' : '',
        }"
      />
      <div
        class="diagram-hover tunnel-hover"
        @mouseenter="enter(4)"
        @mouseleave="leave(4)"
      ></div>
      <img
        class="diagram-focus agent-on"
        src="@/assets/svg/agent.svg"
        :style="{
          opacity: activeNum == 5 ? 1 : 0,
          top: activeNum == 5 ? '21px' : '',
        }"
      />
      <div
        class="diagram-hover agent-hover"
        @mouseenter="enter(5)"
        @mouseleave="leave(5)"
      ></div>
      <img
        class="diagram-focus local-on"
        src="@/assets/svg/local.svg"
        :style="{
          opacity: activeNum == 6 ? 1 : 0,
          top: activeNum == 6 ? '168px' : '',
        }"
      />
      <div
        class="diagram-hover local-hover"
        @mouseenter="enter(6)"
        @mouseleave="leave(6)"
      ></div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      activeNum: null,
    }
  },
  computed: {},
  methods: {
    enter(n) {
      console.log('鼠标移入', n)
      this.activeNum = n
    },
    leave(n) {
      console.log('鼠标移出', n)
      // this.activeNum = null
    },
  },
  watch: {},
  created() {},
  mounted() {},
}
</script>
 
<style scoped lang="less">
.container {
  width: 100%;
  height: 90vh;
  overflow: auto;
  background: #000;
}
.diagram {
  position: relative;
  width: 904px;
  margin: 10px;
}

.diagram-margin-top {
  margin-top: 100px;
}

.diagram-margin-bottom {
  margin-top: 220px;
}

.diagram-focus {
  opacity: 0;
  position: absolute;
  z-index: 1;
  // transition: all .5s linear;
}

.diagram-hover {
  opacity: 0;
  position: absolute;
  z-index: 10;
}

.client-on {
  left: 0;
  top: 28px;
}

.client-hover {
  border: 1px solid red;
  height: 80px;
  width: 80px;
  left: 5px;
  top: 173px;
}

.auth-on {
  left: 0;
  top: 28px;
}

.auth-hover {
  border: 1px solid red;
  height: 80px;
  width: 80px;
  left: 230px;
  top: 78px;
}

.obs-on {
  left: 330px;
  top: 42px;
}

.obs-hover {
  border: 1px solid red;
  height: 80px;
  width: 80px;
  left: 334px;
  top: 78px;
}

.loadbalance-on {
  left: 434px;
  top: 46px;
}

.loadbalance-hover {
  border: 1px solid red;
  height: 80px;
  width: 80px;
  left: 439px;
  top: 78px;
}

.tunnel-on {
  left: 534px;
  top: 222px;
}

.tunnel-hover {
  border: 1px solid red;
  height: 97px;
  width: 122px;
  left: 534px;
  top: 123px;
}

.agent-on {
  left: 656px;
  top: 120px;
}

.agent-hover {
  border: 1px solid red;
  height: 80px;
  width: 80px;
  left: 680px;
  top: 177px;
}

.local-on {
  left: 676px;
  top: 268px;
}

.local-hover {
  border: 1px solid red;
  height: 80px;
  width: 80px;
  left: 800px;
  top: 177px;
}
</style>