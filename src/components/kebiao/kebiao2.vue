<template>
  <div class="class-table">
    <div class="table-wrapper">
      <div class="tabel-container">
        <table border="1">
          <thead>
            <tr>
              <th></th>
              <!-- 列、第几周-->
              <th v-for="(item, index) in tableData.courses.length" :key="index">
                {{ '周' + digital2Chinese(index, 'week') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(lesson, lessonIndex) in tableData.lessons" :key="lessonIndex">
              <!-- 行、第几节 -->
              <td>
                <p>{{ '第' + digital2Chinese(lessonIndex) + '节' }}</p>
                <p class="period">{{ lesson }}</p>
              </td>

              <!-- 行、遍历课表 -->
              <td
                v-for="(course, courseIndex) in tableData.courses"
                :key="courseIndex"
                @click="clickEdit(course, courseIndex, lessonIndex)"
              >
                {{ tableData.courses[courseIndex][lessonIndex] || '-' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: {
        lessons: [
          '08:00-09:00',
          '09:00-10:00',
          '10:00-11:00',
          '11:00-12:00',
          '13:00-14:00',
          '14:00-15:00',
          '15:00-16:00',
          '16:00-17:00',
        ],
        courses: [
          ['生物', '物理', '化学', '', '历史', '英语', '数学', '语文'], // 周一
          ['生物', '物理', '化学', '政治', '历史', '英语', '', '语文'], // 周二
          ['语文', '数学', '英语', '历史', '', '化学', '物理', '生物'], // 周三
          ['生物', '', '化学', '政治', '历史', '英语', '数学', '语文'], // 周四
          ['语文', '数学', '英语', '历史', '政治', '', '物理', '生物'], // 周五
          ['语文', '数学', '英语', '历史', '政治', '', '物理', '生物'], // 周六
          ['语文', '数学', '英语', '历史', '政治', '', '物理', '生物'], // 周七
        ],
      },
    }
  },
  created() {
    // /* mock随机数据*/
    // Mock.mock({
    //     lessons: ['08:00-09:00', '09:00-10:00', '10:00-11:00', '11:00-12:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00'],
    //     'courses|7': [['生物', '物理', '化学', '政治', '历史', '英语', '', '语文']]
    // });
  },
  methods: {
    digital2Chinese(index, identifier) {
      const character = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
      return character[index]
    },
    // arr这一列课表数据、x周几索引、y第几节索引
    clickEdit(arr, x, y) {
      // console.log(arr, x, y)
      // 拿到点击的数据课程名
      let row = this.tableData.courses[x][y]
      console.log(row)
    },
  },
}
</script>

<style lang="less" scoped>
.class-table {
  .table-wrapper {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .tabel-container {
    margin: 7px;

    table {
      table-layout: fixed;
      width: 100%;

      thead {
        background-color: #eaf2ff;
        th {
          color: #333;
          font-weight: 600;
          font-size: 16px;
          line-height: 17px;
        }
      }
      tbody {
        background-color: #eaf2ff;
        td {
          color: #677998;
          line-height: 12px;
        }
      }
      th,
      td {
        width: 60px;
        padding: 12px 2px;
        font-size: 14px;
        text-align: center;
        p {
          color: #333;
          font-size: 16px;
          font-weight: 600;
        }
      }

      tr td:first-child {
        color: #333;
        .period {
          font-size: 8px;
        }
      }
    }
  }
}
</style>
