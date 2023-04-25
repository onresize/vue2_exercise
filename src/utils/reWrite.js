
// 由于vue网页中无法使用nodeJs模块、这里writeJsonFile方法无效
let fs = require('fs');

console.log('fs模块：', fs)
// 重写json保存到本地
const writeJsonFile = (JsonData) => {
  //将javascript对象转换为json字符串
  let data = JSON.stringify(JsonData, null, 4)
  // console.log(data)
  fs.writeFile('../data/reWriteJson.json', data, (err) => {
    if (err) {
      window.alert('写入出错了')
    } else {
      window.alert('文件写入成功')
    }
  })

}

const handleDownload = (content, name) => {
  // 下载保存json文件
  var eleLink = document.createElement("a");
  eleLink.download = name + '.json';
  eleLink.style.display = "none";
  // 字符内容转变成blob地址
  var data = JSON.stringify(content, undefined, 4);
  var blob = new Blob([data], { type: "text/json" });
  eleLink.href = URL.createObjectURL(blob);
  // 触发点击
  document.body.appendChild(eleLink);
  eleLink.click();
  // 然后移除
  document.body.removeChild(eleLink);
}


export {
  writeJsonFile,
  handleDownload,
}