<template>
    <button
        v-if="!props.to && !props.href"
        :class="buttonClass"
    >
        <slot />
    </button>
    <a
        v-else-if="props.href"
        :class="buttonClass"
        :href="props.href"
    ><slot /></a>
    <nuxt-link v-else :to="props.to" :class="buttonClass">
        <slot />
    </nuxt-link>
</template>

<script setup lang="ts">
import { BTN_TYPE, BUTTON_TYPE, MODIFIER, TYPE } from '~/types/enums'

const props = defineProps<{
    type: BUTTON_TYPE,
    modifiers?: MODIFIER[],
    to?: string,
    href?: string
}>()

const asModifier: (modifier: MODIFIER) => boolean =
 (modifier: MODIFIER) =>
     props.modifiers ? !!props.modifiers.includes(modifier) : false

const buttonClass = computed(() => ['transition',
    { 'rounded-md px-5 py-2': props.type !== BTN_TYPE.TEXT },
    {
        'text-primary-background border-primary bg-primary px-4 py-2\
        hover:bg-primary-hover hover:shadow-md hover:shadow-primary-hover':
            props.type === TYPE.PRIMARY
    },
    {
        'bg-secondary text-secondary-background hover:bg-secondary-hover\
        hover:shadow-md hover:shadow-secondary-hover':
            props.type === TYPE.SECONDARY
    },
    {
        'border-b-transparent hover:border-b-default border-b-2':
            props.type === BTN_TYPE.TEXT
    },
    {
        'rounded-full': asModifier(MODIFIER.ROUNDED)
    }
])

</script>
