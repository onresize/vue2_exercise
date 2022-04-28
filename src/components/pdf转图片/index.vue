<template>
  <div class="container">
    <h2>pdf转图片</h2>
    <el-button @click="pdftoimg">将pdf流文件转成图片</el-button>
    <div v-if="show">
      <el-image
        style="width: 50%; border: 2px solid pink"
        :src="base64Url"
        fit="fit"
      ></el-image>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      base64Url: '',
      show: false,
    }
  },
  methods: {
    pdftoimg() {
      // base64和url皆可
      // let base64Str = "https://zh-pre.oss-cn-hangzhou.aliyuncs.com/******.pdf"
      let base64Str =
        'data:application/pdf;base64,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TDxkJcA1n+p9BeEdV7K2hj9kNXczO+frgJdcBiwesqL7wQOzNp/4c876nskdsqo76p7xfy+cPyZclrT9HLwhK3smCR0fK5Q3fBheK1xkGbBoyCqf6taZJ88c6nZaEU/ZiwcLlBKABIE9A5evN3wvZ+hEvLnnd9nA1Vc/MkG5exv0Aw9mmUM/LugGXiww5x6GtQIHmWu3dQK3/HQHssPWHa0xe61qgc89+Nj7FssOs2i7VjSVAj1+teaodc+I7dKI2hEPeQM+te6JWv9MNxVVC3zpDfjFtsnygMUbsFTgW2/AYsS2K127kDYUA/NeeEt12HbVhswdsFTgN4/ATvu26pBNgyiwMuS0QRZYHrJgwCSA5SGbolMpAJeGnBaeSgIYHYsKTyUBNFqEhxIBOgQgIeC77N8WBbBc5XqHF5cKYLWvAuBGXzAAAQQQQAABBBBAAJcPcFe/tVkB8HS/1zbLBrr+s7PPUgACuNKAO/rktkk2UGUAAggggAACCCCAANICTtwJtgW/QF0BCCCAAGoGhmOaa3MBUglAAHUHIIC6AxBA3S0j4B9WNV99CmVuZHN0cmVhbQplbmRvYmoKMTYgMCBvYmoKODEzCmVuZG9iagoxNyAwIG9iago8PAovVGl0bGUgPEZFRkYwMDYxMDA2OTAwN0EwMDY4MDA3OTAwMkQwMDY4MDA3NDAwNjkwMDM3MDA2NzAwMDA+Ci9DcmVhdGlvbkRhdGUgKEQ6MjAyMTA5MjQxMTA3MzgpCi9Nb2REYXRlIChEOjIwMjEwOTI0MTEwNzM4KQovUHJvZHVjZXIgKGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3JnKQo+PgplbmRvYmoKeHJlZgowIDE4CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAxMCAwMDAwMCBuIAowMDAwMDAwMDU5IDAwMDAwIG4gCjAwMDAwMDAxMTggMDAwMDAgbiAKMDAwMDAwMDMwMCAwMDAwMCBuIAowMDAwMDAwMzg0IDAwMDAwIG4gCjAwMDAwMDA0MDIgMDAwMDAgbiAKMDAwMDAwMDQ0MCAwMDAwMCBuIAowMDAwMDAwNDYxIDAwMDAwIG4gCjAwMDAwMDE4NjQgMDAwMDAgbiAKMDAwMDAwMTg4NCAwMDAwMCBuIAowMDAwMDAxOTExIDAwMDAwIG4gCjAwMDAwMDI5ODAgMDAwMDAgbiAKMDAwMDAwMzAwMCAwMDAwMCBuIAowMDAwMDAzMDIyIDAwMDAwIG4gCjAwMDAwMDMwNDIgMDAwMDAgbiAKMDAwMDAwNDA0NCAwMDAwMCBuIAowMDAwMDA0MDY0IDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgMTgKL0luZm8gMTcgMCBSCi9Sb290IDEgMCBSCi9JRCBbPGEzNDU0ZmUxYTJlNjc5N2YxNDEyYTAyYTJiODY2MWE2NjZiMWQ5YThhOWU2MzM3ZmM1YWIyYzBhZjJiMDI0N2Q+IDxhMzQ1NGZlMWEyZTY3OTdmMTQxMmEwMmEyYjg2NjFhNjY2YjFkOWE4YTllNjMzN2ZjNWFiMmMwYWYyYjAyNDdkPl0KPj4Kc3RhcnR4cmVmCjQyNDgKJSVFT0YK'
      let that = this
      pdfjsLib.workerSrc = 'pdf.worker.js'
      let loadingTask = pdfjsLib.getDocument({
        url: base64Str,
        cMapUrl: '../../../cmaps/', // 解决图片没有汉字的问题
        cMapPacked: true, // 解决图片没有汉字的问题
      })
      loadingTask.promise.then(function (pdf) {
        pdf.getPage(1).then((res) => {
          let viewport = res.getViewport({
            scale: 1,
            rotation: 0,
            offsetX: 0,
            offsetY: 0,
            dontFlip: false,
          }) // 默认会旋转180度需要设置回来rotation：0
          let canvas = document.createElement('canvas')
          let context = canvas.getContext('2d')
          canvas.height = viewport.height
          canvas.width = viewport.width
          let renderTask = res.render({
            canvasContext: context,
            viewport: viewport,
          })
          renderTask.promise.then(() => {
            console.log(canvas.toDataURL('image/jpeg', 1))
            that.base64Url = canvas.toDataURL('image/jpeg', 1)
            that.show = true
          })
        })
      })
    },
    // downland(base64Str, name) {
    //   let dom = document.createElement('a')
    //   dom.download = name
    //   dom.href = base64Str
    //   document.body.appendChild(dom)
    //   dom.click()
    //   document.body.removeChild(dom)
    // },
  },
}
</script>

<style scoped>
.container {
  scrollbar-width: none !important;
}
.container::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #ffffff;
}
.container::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #ffffff;
}
.container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #ffffff;
}
.container {
  overflow: scroll;
  height: 100vh;
  padding-bottom: 30px;
}
</style>
