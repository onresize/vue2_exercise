<template>
  <section
    :style="{ ...styles.box, ...boxStyle }"
    class="v-screen-box"
  >
    <div
      :style="{ ...styles.wrapper, ...wrapperStyle }"
      class="screen-wrapper"
      ref="screenWrapperRef"
    >
      <slot></slot>
    </div>
  </section>
</template>
 
<script>
export default {
  name: 'VScaleScreen',
  props: {
    width: {
      type: [String, Number],
      default: 1920,
    },
    height: {
      type: [String, Number],
      default: 950,
    },
    fullScreen: {
      type: Boolean,
      default: false,
    },
    autoScale: {
      type: [Object, Boolean],
      default: true,
    },
    delay: {
      type: Number,
      default: 500,
    },
    boxStyle: {
      type: Object,
      default: () => ({}),
    },
    wrapperStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      state: {
        width: 0,
        height: 0,
        originalWidth: 0,
        originalHeight: 0,
        observer: null,
      },
      styles: {
        box: {
          overflow: 'hidden',
          backgroundSize: `100% 100%`,
          background: `#fff`,
          width: `100vw`,
          height: `100vh`,
        },
        wrapper: {
          transitionProperty: `all`,
          transitionTimingFunction: `cubic-bezier(0.4, 0, 0.2, 1)`,
          transitionDuration: `500ms`,
          position: `relative`,
          overflow: `hidden`,
          zIndex: 100,
          transformOrigin: `left top`,
        },
      },
      screenWrapper: null,
    }
  },
  methods: {
    debounce(fn, delay) {
      let timer
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(
          () => {
            typeof fn === 'function' && fn.apply(null, args)
            clearTimeout(timer)
          },
          delay > 0 ? delay : 100
        )
      }
    },
    initSize() {
      return new Promise((resolve) => {
        this.$nextTick(() => {
          // region 获取大屏真实尺寸
          if (this.width && this.height) {
            this.state.width = this.width
            this.state.height = this.height
          } else {
            this.state.width = this.screenWrapper?.clientWidth
            this.state.height = this.screenWrapper?.clientHeight
          }
          // region 获取画布尺寸
          if (
            !this.state.originalHeight ||
            !this.state.originalWidth
          ) {
            this.state.originalWidth = window.screen.width
            this.state.originalHeight = window.screen.height
          }
          // endregion
          resolve()
        })
      })
    },
    updateSize() {
      if (this.state.width && this.state.height) {
        this.screenWrapper.style.width = `${this.state.width}px`
        this.screenWrapper.style.height = `${this.state.height}px`
      } else {
        this.screenWrapper.style.width = `${this.state.originalWidth}px`
        this.screenWrapper.style.height = `${this.state.originalHeight}px`
      }
    },
    autoScalePage(scale) {
      if (!this.autoScale) return
      const domWidth = this.screenWrapper.clientWidth
      const domHeight = this.screenWrapper.clientHeight
      const currentWidth = document.body.clientWidth
      const currentHeight = document.body.clientHeight
      this.screenWrapper.style.transform = `scale(${scale},${scale})`
      let mx = Math.max((currentWidth - domWidth * scale) / 2, 0)
      let my = Math.max((currentHeight - domHeight * scale) / 2, 0)
      if (typeof this.autoScale === 'object') {
        !this.autoScale.x && (mx = 0)
        !this.autoScale.y && (my = 0)
      }
      this.screenWrapper.style.margin = `${my}px ${mx}px`
    },
    updateScale() {
      // 获取真实视口尺寸
      const currentWidth = document.body.clientWidth
      const currentHeight = document.body.clientHeight
      // 获取大屏最终的宽高
      const realWidth = this.state.width || this.state.originalWidth
      const realHeight =
        this.state.height || this.state.originalHeight
      // 计算缩放比例
      const widthScale = currentWidth / +realWidth
      const heightScale = currentHeight / +realHeight
      // 若要铺满全屏，则按照各自比例缩放
      if (this.fullScreen) {
        this.screenWrapper.style.transform = `scale(${widthScale},${heightScale})`
        return false
      }
      // 按照宽高最小比例进行缩放
      const scale = Math.min(widthScale, heightScale)
      this.autoScalePage(scale)
    },
    async onResize() {
      await this.initSize()
      this.updateSize()
      this.updateScale()
    },
    initMutationObserver() {
      const observer = (this.state.observer = new MutationObserver(
        () => {
          this.onResize()
        }
      ))
      observer.observe(this.screenWrapper, {
        attributes: true,
        attributeFilter: ['style'],
        attributeOldValue: true,
      })
    },
  },
  watch: {},
  created() {},
  mounted() {
    this.screenWrapper = this.$refs.screenWrapperRef
    this.$nextTick(async () => {
      await this.initSize()
      this.updateSize()
      this.updateScale()
      window.addEventListener('resize', this.onResize)
      this.initMutationObserver()
    })
  },
}
</script>
 
<style scoped >
</style>