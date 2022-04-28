<template>
  <div id="coursesTable"></div>
</template>
 
<script>
import Timetables from 'timetables'
const courseList = [
  ['大学英语(Ⅳ)@10203', '大学英语(Ⅳ)@10203', '', '', '', '', '毛概@14208', '毛概@14208', '', '', '', '选修'],
  [
    '',
    '',
    '信号与系统@11302',
    '信号与系统@11302',
    '模拟电子技术基础@16204',
    '模拟电子技术基础@16204',
    '',
    '',
    '',
    '',
    '',
    '',
  ],
  [
    '大学体育(Ⅳ)',
    '大学体育(Ⅳ)',
    '形势与政策(Ⅳ)@15208',
    '',
    '',
    '',
    '电路、信号与系统实验',
    '电路、信号与系统实验',
    '',
    '',
    '',
    '',
  ],
  ['', '', '', '', '电装实习@11301', '电装实习@11301', '', '', '', '大学体育', '大学体育', ''],
  ['', '', '数据结构与算法分析', '数据结构与算法分析', '', '', '', '', '信号与系统', '信号与系统', '', ''],
]
var day = new Date().getDay()
var courseType = [
  [{ index: '第1节', name: '' }, 1],
  [{ index: '第2节', name: '' }, 1],
  [{ index: '第3节', name: '' }, 1],
  [{ index: '第4节', name: '' }, 1],
  [{ index: '第5节', name: '' }, 1],
  [{ index: '第6节', name: '' }, 1],
  [{ index: '第7节', name: '' }, 1],
  [{ index: '第8节', name: '' }, 1],
  [{ index: '第9节', name: '' }, 1],
  [{ index: '第10节', name: '' }, 1],
  [{ index: '第11节', name: '' }, 1],
  [{ index: '第12节', name: '' }, 1],
]
export default {
  mounted() {
    new Timetables({
      el: '#coursesTable',
      timetables: courseList,
      week: window.innerWidth > 360 ? ['周一', '周二', '周三', '周四', '周五'] : ['一', '二', '三', '四', '五'],
      timetableType: courseType,
      highlightWeek: day,
      gridOnClick: function (e) {
        let pname = e.name || '无课'
        alert(pname + '  ' + e.week + ', 第' + e.index + '节课, 课长' + e.length + '节')
        console.log(e)
      },
      palette: false,
      styles: {
        Gheight: 40,
        leftHandWidth: 60,
      },
    })
  },
}
</script>
 
<style lang="less" scoped>
/deep/ div.left-hand-TextDom {
  background: rgba(0, 0, 0, 0.15);
// border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
/deep/ p.left-hand-index {
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.15);
//   border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
/deep/ div.Courses-head-1,
/deep/ div.Courses-head-2,
/deep/ div.Courses-head-3,
/deep/ div.Courses-head-4,
/deep/ div.Courses-head-5 {
  line-height: 40.5px;
  text-align: center;
  font-weight: bold;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.15);
// border-left: 1px solid rgba(0, 0, 0, 0.15);
}
/deep/ li {
  border-top: 1px solid rgba(0, 0, 0, 0.15);
//   border-left: 1px solid rgba(0, 0, 0, 0.15);
}
</style>