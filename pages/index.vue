<template>
    <main class="flex flex-col">
        <header
            class="flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    h-[calc(100vh-104px)]"
        >
            <h1
                class="pacifico
                        text-8xl
                        text-primary
                        text-shadow-xl
                        text-stroke-1
                        text-stroke-default"
            >
                Maxime Ben Hassen
            </h1>
            <h2
                class="
                text-5xl
                text-default
                font-bold
                text-stroke-2
                text-stroke-primary"
            >
                Développeur freelance web et mobile
            </h2>
            <button class="btn btn--rounded text-2xl mt-6">
                En savoir plus
            </button>
        </header>
        <section
            class="my-60
                    lg:p-40 p-10
                    flex flex-col
                    bg-primary-background
                    text-shadow-xl
                    transform skew-y-6
                    z-10
                    relative overflow-hidden
                    "
        >
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
            <h2 class="mb-6 text-center text-4xl transform -skew-y-6">
                Créateur de sites et d’applications web
            </h2>
            <p class="transform -skew-y-6">
                Initialement simple autodidacte, j’apprends le développement
                web grâce à des cours en ligne. Je décide de poursuivre ma
                formation en intégrant une licence d’informatique et en
                contribuant à des projets libres (C.C Lapiarre, contribulle) et
                au sein de collectifs citoyens (discord-insoumis).
                Ces expériences m’ont permis de développer des compétences en
                communication et en travails d’équipes.
            </p>
            <p class="transform -skew-y-6">
                C’est au cours de l’année 2020 que j’ai l’opportunité de me
                lancer en tant que freelance et de faire mes premiers sites
                et applications web pour des professionnels.
            </p>
        </section>
    </main>
</template>

<style scoped>
header > * {
    @apply z-10;
}
</style>
