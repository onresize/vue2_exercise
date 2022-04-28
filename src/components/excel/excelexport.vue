<template>
  <div>
    <h2>测试excel导入(待完善)</h2>
    <a href="https://xrkffgg.js.cool/Knotes/blog/3.html#_1-%E5%89%8D%E8%A8%80"
      >参考链接：</a
    >
    <el-upload
      class="upload-demo"
      action=""
      :on-change="handleChange"
      :on-remove="handleRemove"
      :before-remove="beforeUpload"
      :limit="1"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
      :auto-upload="false"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只 能 上 传 xlsx / xls 文 件</div>
    </el-upload>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      fileTemp: null,
    }
  },
  created() {},
  methods: {
    handleChange(file, fileList) {
      this.fileTemp = file.raw
    },

    handleRemove(file, fileList) {
      this.fileTemp = null
    },
    // 上传前做判断
    beforeUpload() {
      if (this.fileTemp) {
        if (this.fileTemp.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
          this.fileTemp.type == 'application/vnd.ms-excel') {
          this.importfxx(this.fileTemp)
        } else {
          this.$message({
            type: 'warning',
            message: '附件格式错误，请删除后重新上传！',
          })
        }
      } else {
        this.$message({
          type: 'warning',
          message: '请上传附件！',
        })
      }
    },
    //导入方法
    importfxx(obj) {
      let _this = this
      // 通过DOM取文件数据
      this.file = obj
      var rABS = false //是否将文件读取为二进制字符串
      var f = this.file
      var reader = new FileReader()
      //if (!FileReader.prototype.readAsBinaryString) {
      FileReader.prototype.readAsBinaryString = function (f) {
        var binary = ''
        var rABS = false //是否将文件读取为二进制字符串
        var pt = this
        var wb //读取完成的数据
        var outdata
        var reader = new FileReader()
        reader.onload = function (e) {
          var bytes = new Uint8Array(reader.result)
          var length = bytes.byteLength
          for (var i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i])
          }
          var XLSX = require('xlsx')
          if (rABS) {
            wb = XLSX.read(btoa(fixdata(binary)), {
              //手动转化
              type: 'base64',
            })
          } else {
            wb = XLSX.read(binary, {
              type: 'binary',
            })
          }
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]) //outdata就是你想要的东西
          this.da = [...outdata]
          let arr = []
          this.da.map((v) => {
            let obj = {}
            obj.code = v['设备ID']
            obj.type = v['设备型号']
            arr.push(obj)
          })
          return arr
        }
        reader.readAsArrayBuffer(f)
      }

      if (rABS) {
        reader.readAsArrayBuffer(f)
      } else {
        reader.readAsBinaryString(f)
      }
    },
  },
}
</script>