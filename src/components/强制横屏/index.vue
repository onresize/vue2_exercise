<template>
  <div>
    <h2>强制横屏解决方案: npm i phaser -S</h2>
    <div ref="gameRef" class="game"></div>
  </div>
</template>
 
<script>
import launchGame from '@/myCom/game/index'
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {},
  watch: {},
  created() {},
  mounted() {
    let game = launchGame(this.$refs.gameRef)
    console.log(game)
    game.events.on('loadAssets', (n) => {
      console.log(n)
    })
  },
}
</script>
 
<style scoped >
.game {
  width: 100%;
  height: 90vh;
  overflow: hidden;
  background-color: #000;
}
</style>