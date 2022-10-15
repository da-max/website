<template>
    <div class="relative" @touchstart="touchStart" @touchend="touchEnd">
        <nuxt-img
            v-for="image in props.images"
            :key="image.src"
            format="webp"
            :src="image.src"
            alt="background-image"
            :class="[
                'opacity-0',
                {'opacity-100': image.src === currentImage.src },
                'transition',
                'duration-700',
                'ease-linear',
                'top-0',
                ...props.imagesClass ?? ''
            ]"
        />
        <template v-if="props.arrows">
            <mdicon
                v-for="arrow, i in ['chevronLeft', 'chevronRight']"
                :key="arrow"
                :class="['absolute',
                         'top-1/2',
                         'bg-default',
                         'rounded-full',
                         'text-default-background',
                         'opacity-0 hover:opacity-100',
                         'transition-opacity',
                         i === 0 ? 'left-15': 'right-15']"
                :name="arrow"
                size="40"
                @click="changeImage(false, i !== 0)"
            />
        </template>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { NuxtImgProps } from '~~/types'

const props = withDefaults(defineProps<{
    images: NuxtImgProps[],
    imagesClass?: string[] | undefined,
    arrows?: boolean
}>(), {
    arrows: false,
    imagesClass: undefined
})

const { getRandomIntInclusive } = useUtils()

const currentImage: Ref<NuxtImgProps> =
    ref(props.images[getRandomIntInclusive(0, props.images.length - 1)])
const touchMove: Ref<number> = ref(0)

const currentIndexImage = computed(() => props.images.findIndex(
    (i: NuxtImgProps) => i.src === currentImage.value.src))

const prev = () => {
    currentImage.value = props.images[currentIndexImage.value - 1] ??
        props.images[props.images.length - 1]
}
const next = () => {
    currentImage.value = props.images[(currentIndexImage.value + 1) %
        props.images.length]
}

const changeImage = (random: boolean = true, add: boolean = true) => {
    if (random) {
        currentImage.value =
            props.images[getRandomIntInclusive(0, props.images.length - 1)]
    } else {
        add ? next() : prev()
    }
}

const touchStart = (e: TouchEvent) => {
    touchMove.value = e.changedTouches[0].screenX
}

const touchEnd = (e: TouchEvent) => {
    touchMove.value -= e.changedTouches[0].screenX
    touchMove.value > 0 ? next() : prev()
}

onMounted(() => {
    setInterval(() => {
        changeImage()
    }, getRandomIntInclusive(10000, 60000))
})
</script>
