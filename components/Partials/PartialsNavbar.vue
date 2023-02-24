<template>
    <nav
        :class="['flex items-center justify-evenly',
                 'p-7',
                 'bg-default-background',
                 'shadow-sm',
                 'shadow-default-background',
                 'w-full']"
    >
        <nuxt-link to="/" :active-class="activeClass">
            <p class="pacifico text-5xl font-bold">
                Fedabian
            </p>
        </nuxt-link>
        <nuxt-link to="/projects" :active-class="activeClass">
            Mes projets
        </nuxt-link>
        <nuxt-link to="/contact" :active-class="activeClass">
            Me contacter
        </nuxt-link>
    </nav>
</template>

<script lang="ts" setup>
const activeClass:string = 'text-primary font-bold'
</script>
