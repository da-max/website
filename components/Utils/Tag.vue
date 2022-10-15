<template>
    <span :class="tagClass">
        <mdicon
            v-if="props.iconName"
            :size="iconSize"
            :name="props.iconName"
            class="inline-flex mr-2"
        />
        <slot />
    </span>
</template>

<script setup lang="ts">
import { TYPE, SIZE, MODIFIER } from '~/types/enums'

interface IProps {
    size?: SIZE,
    modifiers?: MODIFIER[] | undefined,
    type?: TYPE,
    iconName?: string
}

const props = withDefaults(defineProps<IProps>(),
    {
        size: SIZE.MD,
        type: TYPE.PRIMARY,
        modifiers: undefined,
        iconName: undefined
    })

const tagClass = computed(() =>
    [
        'px-4 py-0.5 rounded-md inline-flex items-center',
        {
            '!rounded-full': props.modifiers
                ? props.modifiers.includes(MODIFIER.ROUNDED)
                : false
        },
        { 'bg-primary text-primary-background': props.type === TYPE.PRIMARY },
        {
            'bg-secondary text-secondary-background':
            props.type === TYPE.SECONDARY
        },
        {
            'bg-default text-default-background': props.type === TYPE.DEFAULT
        },
        { 'text-xl': props.size === SIZE.XL },
        { 'text-sm': props.size === SIZE.SM }
    ])
const iconSize = computed(() => {
    switch (props.size) {
    case SIZE.LG:
        return 30
    case SIZE.SM:
        return 18
    case SIZE.XL:
        return 36
    default:
        return 24
    }
})
</script>
