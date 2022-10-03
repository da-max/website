<template>
    <div class="relative">
        <mdicon
            v-for="icon in bgIcons"
            :key="icon.name"
            v-parallax="icon.blur / 20"
            :class="['absolute',
                     'z-12',
                     'filter',
                     'drop-shadow-xl',
                     icon.class,
                     `blur-${icon.blur}`]"
            :name="icon.name"
            :size="icon.size ?? 80"
            @mouseover="(e: Event) => onMouseOver(e, icon.activeClass)"
            @mouseleave="(e: Event) => onMouseLeave(e, icon.activeClass)"
        />

        <div class="absolute z-11 top-0 min-h-[100vh]">
            <PartialsNavbar />
            <NuxtPage />
        </div>
        <nuxt-img
            v-for="image in availableImages"
            :key="image"
            :src="image"
            alt="background-image"
            :class="[
                'opacity-0',
                'object-cover',
                {'opacity-100': image === currentImage },
                'min-w-screen', 'min-h-screen',
                'fixed',
                'transition',
                'duration-700',
                'ease-linear',
                'top-0'
            ]"
        />
        <div class="h-screen w-full overflow-hidden">
            <div
                v-for="fog, i in fogImages"
                :key="fog"
                :class="[`fog-img-${i}`,
                         'fixed',
                         'h-screen',
                         'w-[300vw]',
                         'z-10',
                         'bg-repeat-x',
                         'bg-cover',
                         'bg-center']"
                :style="[`background-image: url(${fog});`,
                         `animation: marquee ${60 * (i+1)}s linear infinite;`]"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'

const {
    getRandomIntInclusive,
    availableImages,
    fogImages,
    bgIcons,
    onMouseLeave,
    onMouseOver
} = useUtils()

const currentImage: Ref<string> =
    ref(availableImages[getRandomIntInclusive(0, availableImages.length - 1)])

onMounted(() => {
    setInterval(() => {
        currentImage.value =
            availableImages[getRandomIntInclusive(0, availableImages.length)]
        if (!currentImage.value) {
            currentImage.value = availableImages[0]
        }
    }, getRandomIntInclusive(10000, 60000))
})

</script>

<style>

@keyframes marquee {
    0% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(-100vw, 0, 0);
    }
}
</style>
