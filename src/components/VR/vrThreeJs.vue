<template>
  <div>
    <div class="Create"></div>
  </div>
</template>
<script>
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export default {
  data() {
    return {}
  },
  mounted() {
    // 1、创建场景和摄像机
    const scene = new Three.Scene()
    // 2、创建摄像机 PerspectiveCamera('视角', '指定投影窗口长宽比', '从距离摄像机多远开始渲染', '截止多远停止渲染100')
    const camera = new Three.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      2,
      1000
    )
    // 3、创建ThreeJs 渲染器
    const renderer = new Three.WebGLRenderer({ antialias: true })
    // 设置渲染器场景大小
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    // 创建几何模型 BoxGeometry('x轴', '轴', 'z轴')
    const geometry = new Three.BoxGeometry(10, 10, 10)

    // 创建纹理贴图  前后  上下  左右
    const texture0 = new Three.TextureLoader().load(
      require('@/assets/img/2.jpg')
    )
    const texture1 = new Three.TextureLoader().load(
      require('@/assets/img/2.jpg')
    )
    const texture2 = new Three.TextureLoader().load(
      require('@/assets/img/2.jpg')
    )
    const texture3 = new Three.TextureLoader().load(
      require('@/assets/img/2.jpg')
    )
    const texture4 = new Three.TextureLoader().load(
      require('@/assets/img/2.jpg')
    )
    const texture5 = new Three.TextureLoader().load(
      require('@/assets/img/2.jpg')
    )

    // 添加材质
    const material = [
      new Three.MeshBasicMaterial({
        map: texture0,
        side: Three.DoubleSide,
      }),
      new Three.MeshBasicMaterial({
        map: texture1,
        side: Three.DoubleSide,
      }),
      new Three.MeshBasicMaterial({
        map: texture2,
        side: Three.DoubleSide,
      }),
      new Three.MeshBasicMaterial({
        map: texture3,
        side: Three.DoubleSide,
      }),
      new Three.MeshBasicMaterial({
        map: texture4,
        side: Three.DoubleSide,
      }),
      new Three.MeshBasicMaterial({
        map: texture5,
        side: Three.DoubleSide,
      }),
    ]

    // 创建网格对象
    const cube = new Three.Mesh(geometry, material)
    // 添加到场景中去
    scene.add(cube)

    // 摄影机空间Z轴
    camera.position.set(0, 0, 1)
    camera.lookAt(scene.position)
    // camera.position.z = 4

    // 鼠标操作缩放
    // eslint-disable-next-line no-new
    new OrbitControls(camera, renderer.domElement)

    // 添加帧渲染
    const animate = () => {
      requestAnimationFrame(animate)
      // 渲染场景
      renderer.render(scene, camera)
    }

    animate()

    // 自适应
    window.addEventListener('resize', () => {
      // 初始化摄像机
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      // 初始化渲染器尺寸
      renderer.setSize(window.innerWidth, window.innerHeight)
    })
  },
}
</script>

<style>
body {
  margin-top: -100vh;
  overflow: hidden;
}
</style>
