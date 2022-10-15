<template>
    <p class="flex flex-wrap">
        <UtilsTag
            v-for="tag in props.tags"
            :key="tag.content"
            class="mx-2 my-1"
            :modifiers="tag.modifiers"
            :size="tag.size"
            :type="tag.type"
            :icon-name="tag.iconName"
        >
            {{ tag.content }}
        </UtilsTag>
    </p>
</template>

<script setup lang="ts">
import { TagProps } from '~~/types'

const props = defineProps<{
    tags:(TagProps & {content: string})[]
}>()
</script>
