<template>
    <header
        class="flex
            flex-col
            items-center
            justify-center
            text-center"
    >
        <UtilsMainTitle>
            <slot name="firstTitle" />
        </UtilsMainTitle>
        <h2
            v-if="props.cta"
            class="
        text-5xl
        text-default
        font-bold
        text-stroke-2
        text-stroke-primary"
        >
            <slot name="secondTitle" />
        </h2>
        <button class="btn btn--rounded text-2xl mt-6">
            <slot name="cta" />
        </button>
    </header>
</template>

<script setup lang="ts">
const props = defineProps<{ cta: boolean }>()
</script>
