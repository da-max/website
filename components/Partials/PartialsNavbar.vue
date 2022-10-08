<template>
    <nav
        :class="['flex items-center justify-evenly',
                 'p-7',
                 'bg-default-background',
                 'shadow-sm',
                 'shadow-default-background',
                 'fixed',
                 'w-full']"
    >
        <nuxt-link to="/">
            Présentation
        </nuxt-link>
        <p class="pacifico text-5xl font-bold">
            Fedabian
        </p>
        <nuxt-link to="/projects">
            Mes projets
        </nuxt-link>
        <nuxt-link to="/contact">
            Me contacter
        </nuxt-link>
    </nav>
</template>
