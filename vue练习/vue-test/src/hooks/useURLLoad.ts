import { reactive, toRefs, ref } from 'vue'
import axios from "axios";
function useURLLoad<T>(url: string) {
    const data = reactive({
        result: ref<T | null>(null),
        loading: ref(true),
        loaded: ref(false),
        error: ref(false)
    })
    axios.get(url).then(res => {
        data.loading = false
        data.loaded = true
        data.result = res.data
    }).catch(e => {
        data.error = e
    })
    return {
        ...toRefs(data)
    }
}

export default useURLLoad