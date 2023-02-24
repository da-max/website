<template>
    <main class="flex flex-col">
        <UtilsMainHeader class="h-[calc(100vh-104px)]" cta-to="/projects">
            <template #firstTitle>
                Maxime Ben Hassen
            </template>
            <template #secondTitle>
                Développeur freelance web et mobile
            </template>
            <template #cta>
                En savoir plus
            </template>
        </UtilsMainHeader>
        <UtilsSkewSection>
            <mdicon
                v-parallax="5/20"
                class="transform -skew-x-6 rotate-12
                        absolute right-1/4 -top-10 lg:-top-40
                        filter blur-5
                        text-secondary"
                name="nuxt"
                :size="300"
            />
            <mdicon
                v-parallax="8/20"
                class="transform -skew-x-6 rotate-12
                    absolute left-10 -top-10 lg:-top-70
                    <lg:hidden
                    filter blur-8
                    text-primary"
                name="language-python"
                :size="200"
            />
            <h2 class="mb-6 text-center text-4xl">
                Créateur de sites et d’applications web
            </h2>
            <p>
                Initialement simple autodidacte, j’apprends le développement
                web grâce à des cours en ligne. Je décide de poursuivre ma
                formation en intégrant une licence d’informatique et en
                contribuant à des projets libres (C.C Lapiarre, contribulle) et
                au sein de collectifs citoyens (discord-insoumis).
                Ces expériences m’ont permis de développer des compétences en
                communication et en travails d’équipes.
            </p>
            <p>
                C’est au cours de l’année 2020 que j’ai l’opportunité de me
                lancer en tant que freelance et de faire mes premiers sites
                et applications web pour des professionnels.
            </p>
        </UtilsSkewSection>
    </main>
</template>

<script lang="ts" setup>
useHead({
    title: 'Accueil | Fedabian',
    meta: [
        {
            name: 'description',
            content: 'Portfolio de Maxime Ben Hassen, développeur web.'
        },
        {
            name: 'keywords',
            content: `Maxime Ben Hassen, développeur web,
            maxime benhassen, Maxime Ben Hassen portfolio,
            développeur full-stack, développeur frontend, développeur backend`
        }
    ]
})
</script>

<style scoped>
header > * {
    @apply z-10;
}
</style>
