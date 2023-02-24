<template>
    <section
        :class="['my-60',
                 'lg:p-40 p-10',
                 'flex flex-col',
                 'text-shadow-xl',
                 'transform skew-y-6',
                 'z-10',
                 'relative overflow-hidden',
                 'bg-primary-background',
                 'skew-section']
        "
    >
        <slot />
    </section>
</template>

<script setup lang="ts"></script>

<style>
.skew-section > * {
    @apply transform -skew-y-6;
}
</style>
