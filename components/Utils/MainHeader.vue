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
            class="
        text-5xl
        text-default
        font-bold
        text-stroke-2
        text-stroke-primary"
        >
            <slot name="secondTitle" />
        </h2>
        <UtilsButton
            v-if="props.ctaTo"
            :to="props.ctaTo"
            :type="TYPE.PRIMARY"
            :modifiers="[MODIFIER.ROUNDED]"
            class="text-2xl mt-6"
        >
            <slot name="cta" />
        </UtilsButton>
    </header>
</template>

<script setup lang="ts">
import { MODIFIER, TYPE } from '~~/types/enums'

const props = defineProps<{ ctaTo?: string }>()
</script>
