<template>
  <div class="class-table">
    <div class="table-wrapper">
      <div class="tabel-container">
        <table>
          <thead>
            <tr>
              <th>时间</th>
              <th v-for="(week, index) in weeks" :key="index">{{ '周' + digital2Chinese(index + 1, 'week') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in classTableData" :key="index">
              <td>
                <p>{{ '第' + digital2Chinese(index + 1) + '节' }}</p>
                <p class="period">{{ item.classesTime }}</p>
              </td>

              <td v-for="(week, index) in weeks" :key="index">
                {{ item[week] || '-' }}
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
      weeks: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
      classTableData: [
        {
          classesTime: '08:00-09:00',
          monday: '物理',
          tuesday: '英语',
          wednesday: '政治',
          thursday: '历史',
          friday: '化学',
          saturday: '历史',
          sunday: '化学',
        },
        {
          classesTime: '09:00-10:00',
          monday: '生物',
          tuesday: '物理',
          wednesday: '化学',
          thursday: '英语',
          friday: '化学',
          saturday: '生物',
          sunday: '化学',
        },
        {
          classesTime: '10:00-11:00',
          monday: '生物',
          tuesday: '物理',
          wednesday: '生物',
          thursday: '历史',
          friday: '生物',
          saturday: '英语',
          sunday: '政治',
        },
        {
          classesTime: '11:00-12:00',
          monday: '',
          tuesday: '政治',
          wednesday: '物理',
          thursday: '政治',
          friday: '历史',
          saturday: '历史',
          sunday: '生物',
        },
        {
          classesTime: '13:00-14:00',
          monday: '生物',
          tuesday: '历史',
          wednesday: '历史',
          thursday: '历史',
          friday: '',
          saturday: '英语',
          sunday: '化学',
        },
        {
          classesTime: '14:00-15:00',
          monday: '化学',
          tuesday: '英语',
          wednesday: '物理',
          thursday: '化学',
          friday: '语文',
          saturday: '物理',
          sunday: '英语',
        },
        {
          classesTime: '15:00-16:00',
          monday: '历史',
          tuesday: '历史',
          wednesday: '语文',
          thursday: '历史',
          friday: '生物',
          saturday: '英语',
          sunday: '',
        },
      ],
      tableShow: false,
    }
  },
  created() {
    // /* mock随机数据*/
    //  Mock.mock({
    //     'data|7': [
    //         {
    //             'classesTime|+1': ['08:00-09:00', '09:00-10:00', '10:00-11:00', '11:00-12:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00'],
    //             'monday|1': ['生物', '物理', '化学', '政治', '历史', '英语', '', '语文'],
    //             'tuesday|1': ['生物', '物理', '化学', '政治', '历史', '英语', '', '语文'],
    //             'wednesday|1': ['生物', '物理', '化学', '政治', '历史', '英语', '', '语文'],
    //             'thursday|1': ['生物', '物理', '化学', '政治', '历史', '英语', '', '语文'],
    //             'friday|1': ['生物', '物理', '化学', '政治', '历史', '英语', '', '语文'],
    //             'saturday|1': ['生物', '物理', '化学', '政治', '历史', '英语', '', '语文'],
    //             'sunday|1': ['生物', '物理', '化学', '政治', '历史', '英语', '', '语文']
    //         }
    //     ]
    // });
  },
  methods: {
    /**
     * 数字转中文
     * @param {Number} num 需要转换的数字
     * @param {String} identifier 标识符
     * @returns {String} 转换后的中文
     */
    digital2Chinese(num, identifier) {
      const character = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
      return identifier === 'week' && (num === 0 || num === 7) ? '日' : character[num]
    },
  },
}
</script>

<style lang='less' scoped>
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
        background-color: #67a1ff;
        th {
          color: #fff;
          line-height: 17px;
          font-weight: normal;
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
        font-size: 12px;
        text-align: center;
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
