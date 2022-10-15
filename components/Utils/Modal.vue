<template>
    <dialog
        :class="['fixed', 'top-0', 'left-0',
                 'h-screen', 'w-screen',
                 'flex', 'justify-center', 'items-center',
                 'm-0', 'p-0',
                 'bg-primary',
                 'bg-opacity-30',
                 { 'hidden': isClose }]"
    >
        <Transition name="drop-in">
            <aside
                v-show="props.isOpen"
                class="min-h-2/5 max-h-4/5 w-9/10 md:w-3/5 lg:w-1/2 z-20
                bg-default-background shadow-lg shadow-primary
                rounded-md flex flex-col"
            >
                <header class="p-5">
                    <slot name="header" />
                </header>
                <UtilsHr />
                <section
                    class="p-5 overflow-y-scroll"
                >
                    <slot name="content" />
                </section>
                <UtilsHr />
                <footer v-if="slots.footer" class="p-5">
                    <slot name="footer" />
                </footer>
            </aside>
        </Transition>
    </dialog>
</template>

<script setup lang="ts">
import { Ref } from 'vue'

const props = defineProps<{
    isOpen: boolean,
}>()
const slots = useSlots()
const isClose: Ref<boolean> = ref(true)

const emit = defineEmits<{(e: 'close'): void }>()

watch(() => props.isOpen,
    (isOpen: boolean, _prevIsOpen: boolean) => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            isClose.value = false
        } else {
            document.body.style.removeProperty('overflow')
            setTimeout(() => {
                isClose.value = true
            }, 300)
        }
    })

onMounted(() => {
    document.addEventListener('keyup', (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            emit('close')
        }
    })
})

</script>

<style scoped>
.drop-in-enter-active,
.drop-in-leave-active {
  transition: all 0.3s ease-out;
}

.drop-in-enter-from,
.drop-in-leave-to {
  opacity: 0;
  transform: translate(0, -50px);
}
</style>
