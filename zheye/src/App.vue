<template>
  <div class="container">
    <ColumnList :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'hello',
    description: 'shijie好孤单是关键技术带来开关机',
    avatar: 'http://pic.sc.chinaz.com/Files/pic/pic9/202010/apic28571_s.jpg'
  },
  {
    id: 2,
    title: 'hello',
    description: 'gjskdli是适当十多个',
    avatar: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202010/apic28568_s.jpg'
  }
]
export default defineComponent({
  name: 'App',
  components: { ColumnList },
  setup (props) {
    return {
      list: testData
    }
  }
})
</script>

<style>
</style>
