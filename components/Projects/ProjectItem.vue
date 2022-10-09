<template>
    <aside
        class="
    bg-primary-background
    rounded-lg transition-shadow
    shadow-md hover:shadow-lg
    hover:shadow-primary
     shadow-primary"
    >
        <header class="p-10">
            <h2>Contribulle</h2>
        </header>
        <hr class="h-[2px] bg-primary">
        <section class="p-10 flex flex-col justify-center">
            <UtilsImagesTransition
                class="mb-10 h-[239px] flex justify-center"
                :images-class="['max-h-[239px]', 'absolute']"
                :images="images"
            />
            <p>
                Depuis novembre 2020,
                je contribue au frontend (HTML, SCSS, JS) du site Contribulle.
                Cette plateforme, sous licence libre, a pour but de mettre en
                relation des contributeur⋅ice⋅s et des projets, principalement,
                libres.
            </p>
        </section>
    </aside>
</template>

<script setup lang="ts">
const images = [
    '/images/projects/contribulle/contribulle-1.png',
    '/images/projects/contribulle/contribulle-2.png',
    '/images/projects/contribulle/contribulle-3.png'
]

</script>
