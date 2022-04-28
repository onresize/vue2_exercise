<template>
  <div class="clearfix">
    <a-upload
      :action="uploadFiles"
      list-type="picture-card"
      :file-list="fileList"
      @change="handleChange"
      @preview="handlePreview"
    >
      <div v-if="fileList.length < 3">
        <a-icon type="plus" />
        <div class="ant-upload-text">上传</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script>
import axios from 'axios'

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
export default {
  data() {
    return {
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '5',
          name: 'image.png',
          status: 'error',
        },
      ],
    }
  },
  methods: {
    handleCancel() {
      this.previewVisible = false
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
      console.log('file', file)
    },
    handleChange({ fileList }) {
      this.fileList = fileList
      console.log('fileList',fileList)
    },
    async uploadFiles(file) {
       let formData = new FormData()
       formData.append('file', file)
      const res =  await axios.post('https://www.mocky.io/v2/5cc8019d300000980a055e76', formData)
       console.log(res)
    },
  },
}
</script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>