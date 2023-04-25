<template>
  <div>
    <h3>测试json文件下载到本地</h3>
    <el-button @click="writeJson">下载json</el-button>
  </div>
</template>
 
<script>
import { writeJsonFile, handleDownload } from '@/utils/reWrite.js'

export default {
  data() {
    return {
      pData: {},
    }
  },
  methods: {
    writeJson() {
      // writeJsonFile(this.pData.data)
      handleDownload(this.pData.data, 'test')
    },
  },
  created() {
    let rData = {
      code: '200',
      message: null,
      throwable: null,
      data: {
        customproperties: {
          elevation: '80',
          mat: 'volume',
          minValue: '0',
          shape: 'cylinder',
          maxValue: '15',
          style: '0',
          maxRange: '1500',
          id: 'heatMapTest',
          volumeScale: '1',
          type: 'heatMap',
          pixelSize: '50',
          colors: [
            ['0', '0', '0', '1'],
            ['128', '128', '128', '1'],
            ['255', '255', '255', '1'],
          ],
        },
        features: [
          {
            geometry: {
              coordinates: [
                '115.8326303663914',
                '28.940113333894935',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '3.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.83102818923238',
                '28.916329191415336',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '25.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.93014753655328',
                '28.685242817615546',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '26.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.91665019171452',
                '28.80557940600663',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '2.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.84185397179573',
                '28.93073741691974',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '1.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.83804460974174',
                '28.931330192319358',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '1.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.94261820292162',
                '28.81913201034016',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '5.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.93832640971479',
                '28.807448599828188',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '55.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.8276196987034',
                '28.913824791182154',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '15.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.82922100034342',
                '28.948999906272746',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '1.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.84105206037219',
                '28.930336329034027',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '4.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.82701702452538',
                '28.92811238911421',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '9.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.94341647676062',
                '28.82272779627781',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '3.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.93752651083237',
                '28.822339245125594',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '55.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.93493150059889',
                '28.808653657024532',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '11.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.85117597455053',
                '28.927055888413264',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '7.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.83242920063795',
                '28.94840634960878',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '10.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.84987252109046',
                '28.933748507310735',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '114.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.8392476369492',
                '28.930532977743333',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '17.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.91285068153417',
                '28.82157087618547',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '2.0',
            },
          },
          {
            geometry: {
              coordinates: ['115.8390471126639', '28.9309323034881'],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '15.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.84746747848665',
                '28.92794918295455',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '1.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.83804456223002',
                '28.93192971679765',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '1.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.83505197627527',
                '28.74336316745175',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '5.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.82110197642989',
                '28.926702368980873',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '1.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.94651068495777',
                '28.822021924838566',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '1.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.9446147071078',
                '28.817029516798307',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '1.0',
            },
          },
          {
            geometry: {
              coordinates: ['115.839247621118', '28.930732819309412'],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '3.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.84025005196486',
                '28.931034360789226',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '18.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.83605493548005',
                '28.73756879896366',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '63.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.94531298704045',
                '28.822124363592266',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '3.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.94461471494436',
                '28.816929589376628',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '9.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.82851914549175',
                '28.949797955375875',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '4.0',
            },
          },
          {
            geometry: {
              coordinates: ['115.934631925', '28.80875408516359'],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '58.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.82160046638839',
                '28.961775350347928',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '21.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.94261791306195',
                '28.822829313378453',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '1.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.91625045600331',
                '28.80498018609926',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '2.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.8278195841892',
                '28.921718949178242',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '7.0',
            },
          },
          {
            geometry: {
              coordinates: [
                '115.8398490876886',
                '28.930833809147668',
              ],
              type: 'Point',
            },
            type: 'Feature',
            properties: {
              heatvalue: '1.0',
            },
          },
        ],
        crs: {
          type: 'name',
          properties: {
            name: 'urn:ogc:def:crs:OGC:1.3:CRS84',
          },
        },
        name: 'nc_heat',
        type: 'FeatureCollection',
      },
    }
    let { customproperties, features } = rData.data

    let custompropertiesObj = {},
      rArr = [],
      ObjArr = [
        'elevation',
        'minValue',
        'maxValue',
        'maxRange',
        'pixelSize',
        'volumeScale',
      ]
    // XXX 处理customproperties对象
    for (let key in customproperties) {
      if (ObjArr.includes(key)) {
        custompropertiesObj[key] = customproperties[key] - 0
      } else if (key == 'colors') {
        customproperties['colors'].forEach((v) => {
          rArr.push(v.map(Number))
        })
        custompropertiesObj[key] = rArr
      } else {
        custompropertiesObj[key] = customproperties[key]
      }
    }

    let featuresArr = [],
      Arr1 = [],
      Arr2 = [],
      Arr3 = []

    // XXX 处理features数组
    features.forEach((vObj) => {
      // console.log(vObj)
      for (let key in vObj) {
        let zItemObj1 = {},
          zItemObj2 = {},
          zItemObj3 = {},
          geometryObj = {},
          propertiesObj = {}
        // console.log(key)
        if (key == 'properties') {
          for (let itemKey1 in vObj[key]) {
            propertiesObj[itemKey1] = vObj[key][itemKey1] - 0
          }
          zItemObj1[key] = propertiesObj
          Arr1.push(zItemObj1)
          // console.log('properties->', zItemObj1) // { properties: {heatvalue: 5} }
        } else if (key == 'geometry') {
          for (let itemKey in vObj[key]) {
            if (itemKey == 'coordinates') {
              geometryObj[itemKey] = vObj[key][itemKey]?.map(Number)
            } else {
              geometryObj[itemKey] = vObj[key][itemKey]
            }
            zItemObj2[key] = geometryObj
          }
          Arr2.push(zItemObj2)
          // console.log('geometry->', zItemObj2) // {geometry: { coordinates: [115.8392476369492, 28.930532977743333], type: "Point" }}
        } else {
          zItemObj3[key] = vObj[key]
          Arr3.push(zItemObj3)
          // console.log('其他：', zItemObj3) // {type: 'Feature'}
        }
      }
    })
    // console.log(Arr1, Arr2, Arr3)
    Arr1.forEach((vItem, i) => {
      featuresArr.push({ ...vItem, ...Arr2[i], ...Arr3[i] })
    })

    // console.log('修改类型后的新对象：', custompropertiesObj)
    // console.log('修改类型后的新数组：', featuresArr)

    featuresArr = {
      customproperties: custompropertiesObj,
      features: featuresArr,
    }

    console.log('转换类型后：', featuresArr)
  },
}
</script>
 
<style scoped >
</style>