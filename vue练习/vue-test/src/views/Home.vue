<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <div>{{ count }}</div>
    <div>{{ countMul }}</div>
    <div @click="addMore" style="cursor: pointer">+</div>
  </div>
</template>

<script lang="ts">
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import {
  ref,
  reactive,
  computed,
  toRefs,
  onMounted,
  onUpdated,
  onRenderTriggered,
} from "vue";
interface ICount {
  count: number;
  countMul: number;
  addMore: () => void;
}
export default {
  mounted() {
    console.log('1 hello');
    
  },
  setup() {
    // let count = ref(0);
    // let countMul = computed(() => {
    //   return count.value * 2;
    // });
    // let addMore = () => {
    //   count.value++;
    // };
    // return {
    //   count,
    //   countMul,
    //   addMore,
    // };
    onMounted(()=>{
      console.log('2hello');
    })
    onUpdated(()=>{
      console.log('updated....');
    })
    onRenderTriggered((e)=>{
      console.log(e);
    })
    let data: ICount = reactive({
      count: 0,
      countMul: computed(() => data.count * 10),
      addMore: () => {
        data.count++;
      },
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less">
div {
  font-size: 34px;
}
</style>
