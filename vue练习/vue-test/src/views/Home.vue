<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <div>{{ count }}</div>
    <div>{{ countMul }}</div>
    <div>{{ title }}</div>
    <h1 v-if="loading">loading...</h1>
    <img :src="result[0].url" v-if="loaded" alt="" />
    <div>X:{{ x }},Y:{{ y }}</div>
    <div @click="addMore" style="cursor: pointer">+</div>
    <div @click="updateTitle" style="cursor: pointer">updateTitle</div>
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
  onUnmounted,
  onUpdated,
  onRenderTriggered,
  watch,
} from "vue";
import useMousePos from "../hooks/useMousePos";
import useURLLoad from "../hooks/useURLLoad";
interface IDog {
  message: string;
  status: string;
}
interface ICat {
  id: string;
  url: string;
  width: number;
  height: number;
}
interface ICount {
  count: number;
  countMul: number;
  addMore: () => void;
}
export default {
  setup() {
    onMounted(() => {
      console.log("2hello");
    });
    onUpdated(() => {
      console.log("updated....");
    });
    onRenderTriggered((e) => {
      console.log(e);
    });
    // const { result, loading, loaded } = useURLLoad<IDog>(
    //   "https://dog.ceo/api/breeds/image/random"
    // );
    const { result, loading, loaded } = useURLLoad<ICat[]>(
      "https://api.thecatapi.com/v1/images/search"
    );
    watch(result, () => {
      if (result.value) {
        console.log(result.value[0].url);
      }
    });
    let data: ICount = reactive({
      count: 0,
      countMul: computed(() => data.count * 10),
      addMore: () => {
        data.count++;
      },
    });
    const title = ref("");
    const updateTitle = () => {
      title.value += "Hello";
    };
    watch([title, () => data.count], (nv, ov) => {
      console.log("old", ov);
      console.log("new", nv);
      document.title = "update" + title.value + data.count;
    });

    return {
      title,
      updateTitle,
      ...toRefs(data),
      ...useMousePos(),
      result,
      loading,
      loaded,
    };
  },
};
</script>

<style lang="less">
div {
  font-size: 34px;
}
</style>
