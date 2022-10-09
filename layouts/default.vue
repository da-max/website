<template>
    <div class="relative">
        <div
            :class="[
                'absolute',
                'top-0',
                'min-h-[100vh]',
                'w-full',
                'flex',
                'flex-col',
                'justify-between',
                'z-10']"
        >
            <PartialsNavbar />
            <NuxtPage />
            <PartialsFooter />
        </div>
        <mdicon
            v-for="icon in bgIcons"
            :key="icon.name"
            v-parallax="icon.blur / 20"
            :class="['absolute',
                     'z-3',
                     'filter',
                     'drop-shadow-xl',
                     icon.class,
                     `blur-${icon.blur}`]"
            :name="icon.name"
            :size="icon.size ?? 80"
            @mouseover="(e: Event) => onMouseOver(e, icon.activeClass)"
            @mouseleave="(e: Event) => onMouseLeave(e, icon.activeClass)"
        />
        <UtilsImagesTransition
            :images="availableImages"
            :images-class="['min-w-screen',
                            'min-h-screen',
                            'fixed',
                            'top-0',
                            'object-cover']"
        />

        <div class="h-screen w-full overflow-hidden">
            <div
                v-for="fog, i in fogImages"
                :key="fog"
                format="webp"
                :class="[`fog-img-${i}`,
                         'fixed',
                         'h-screen',
                         'w-[300vw]',
                         'z-1',
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

const {
    availableImages,
    fogImages,
    bgIcons,
    onMouseLeave,
    onMouseOver
} = useUtils()

</script>
