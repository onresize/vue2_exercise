<template>
 <div>
   <Map class="bm-view"></Map>
 </div>
</template>
 
<script>
import Map from "./children.vue"
export default {
  components: {
    Map
  },
  data () {
    return {}
  },
  created() {},
  methods: {},
}
</script>
 
<style scoped >
 ::v-deep .bm-view .BMap_cpyCtrl {
  display: none;
}

::v-deep .bm-view .anchorBL {
  display: none;
}
</style>