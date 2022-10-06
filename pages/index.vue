<template>
    <main>
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
            class="my-5
                    lg:p-30
                    p-5
                    flex
                    flex-col"
        >
            <h2 class="text-center text-4xl reveal-1">
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
        </section>
    </main>
</template>

<style scoped>
.pacifico {
    font-family: 'Pacifico';
}

header > *, section > * {
    @apply z-10;
}
</style>
