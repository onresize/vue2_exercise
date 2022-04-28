<template>
  <div>
    <h2>树结构预览</h2>
    <el-tree
      node-key="id"
      :default-expanded-keys="['1']"
      :data="data"
      accordion
    >
    </el-tree>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      data: [
        {
          id: '1',
          label: '芷江侗族自治县',
          children: [
            {
              id: 2,
              label: '公坪镇',
              children: [{ label: '公坪村' }],
            },
            {
              id: 3,
              label: '三道坑镇',
              children: [{ label: '五郎溪乡' }, { label: '木叶溪乡' }],
            },
            {
              id: 4,
              label: '大树坳乡',
              children: [{ label: '大树坳村' }, { label: 'dg' }],
            },
            {
              label: '新店坪镇',
              children: [
                { label: '上坪乡' },
                { label: '大洪山乡' },
                { label: '新店坪村' },
              ],
            },
            {
              label: '梨溪口乡',
              children: [{ label: '梨溪口村' }],
            },
            {
              label: '碧涌镇',
              children: [
                { label: '大垅乡' },
                { label: '板山乡' },
                { label: '碧涌村' },
                { label: '罗岩乡' },
              ],
            },
            {
              label: '冷水溪乡',
              children: [{ label: '冷水溪村' }],
            },
            {
              label: '罗卜田乡',
              children: [{ label: '罗卜田村' }],
            },
            {
              label: '罗旧镇',
              children: [{ label: '罗旧村' }],
            },
            {
              label: '水宽乡',
              children: [{ label: '水宽村' }],
            },
            {
              label: '牛牯坪乡',
              children: [{ label: '牛牯坪村' }],
            },
            {
              label: '土桥镇',
              children: [{ label: '土桥乡' }, { label: '杨公庙乡' }],
            },
            {
              label: '洞下场乡',
              children: [{ label: '洞下场村' }],
            },
            {
              label: '晓坪乡',
              children: [{ label: '晓坪村' }],
            },
            {
              label: '楠木坪镇',
              children: [{ label: '楠木坪村' }],
            },
            {
              label: '芷江镇',
              children: [
                { label: '竹坪铺乡' },
                { label: '芷江村' },
                { label: '艾头坪乡' },
                { label: '麻缨塘乡' },
              ],
            },
            {
              label: '岩桥镇',
              children: [{ label: '岩桥村' }],
            },
            {
              label: '禾梨坳乡',
              children: [{ label: '禾梨坳村' }],
            },
          ],
        },
      ],
    }
  },
  methods: {},
}
</script>
 
<style scoped >
</style>