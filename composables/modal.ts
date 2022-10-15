import { Ref } from 'vue'

export function useModal () {
    const isOpen: Ref<boolean> = ref(false)
    const open = () => {
        isOpen.value = true
    }

    const close = () => {
        isOpen.value = false
    }

    return {
        open,
        close,
        isOpen
    }
}
