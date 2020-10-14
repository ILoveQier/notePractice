import {
    ref,
    reactive,
    toRefs,
    onMounted,
    onUnmounted,
} from "vue";

function userMousePos() {
    // const x = ref(0);
    // const y = ref(0);
    const data = reactive({
        x: ref(''),
        y: ref(0),
        mouseClick: (e: MouseEvent) => {
            data.x = e.pageX +'hello';
            data.y = e.pageY;
        }
    })
    // const mouseClick = (e: MouseEvent) => {
    //     x.value = e.pageX;
    //     y.value = e.pageY;
    // };
    onMounted(() => {
        document.addEventListener("click", data.mouseClick);
    });
    onUnmounted(() => {
        document.removeEventListener("click", data.mouseClick);
    });
    return { ...toRefs(data) }
}

export default userMousePos