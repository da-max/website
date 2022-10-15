<template>
    <div class="grid gap-0.5 grid-cols-4 grid-rows-3">
        <a
            v-for="(image, i) in state.images"
            :key="image.src"
            href="#"
            :class="
                [i !== 0 ?
                     `cursor-pointer
                    col-start-4 col-end-5 row-start-${i} row-end-${i+1}`
                     : 'col-start-1 col-end-4 row-start-1 row-end-4',
                 'focus:filter focus:blur-2']"
            @click.prevent="focus(i)"
        ><NuxtImg
            :src="image.src"
            format="webp"
            :alt="image.alt"
        />
        </a>
    </div>
</template>

<script setup lang="ts">
import { NuxtImgProps } from '~/types'
const props = defineProps<{ images: NuxtImgProps[] }>()
const state = reactive<{images: NuxtImgProps[]}>({ images: props.images })

watch(() => props.images, (images: NuxtImgProps[], _prev: NuxtImgProps[]) => {
    state.images = images
})

const focus = (index: number) => {
    if (index !== 0) {
        const firstImage: NuxtImgProps = state.images[0]
        state.images[0] = state.images[index]
        state.images[index] = firstImage
    }
}
</script>
