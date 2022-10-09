<template>
    <div class="relative">
        <nuxt-img
            v-for="image in props.images"
            :key="image"
            format="webp"
            :src="image"
            alt="background-image"
            :class="[
                'opacity-0',
                {'opacity-100': image === currentImage },
                'transition',
                'duration-700',
                'ease-linear',
                'top-0',
                ...props.imagesClass ?? ''
            ]"
        />
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'

const props = defineProps<{
    images: string[],
    imagesClass?: string[] }>()

const { getRandomIntInclusive } = useUtils()

const currentImage: Ref<string> =
    ref(props.images[getRandomIntInclusive(0, props.images.length - 1)])

onMounted(() => {
    setInterval(() => {
        currentImage.value =
            props.images[getRandomIntInclusive(0, props.images.length)]
        if (!currentImage.value) {
            currentImage.value = props.images[0]
        }
    }, getRandomIntInclusive(10000, 60000))
})
</script>
