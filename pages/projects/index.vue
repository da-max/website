<template>
    <main class="container mx-auto">
        <header class="text-center my-40">
            <UtilsMainTitle>Mes réalisations</UtilsMainTitle>
        </header>
        <section class="flex items-center justify-center flex-wrap py-20">
            <ProjectsItem
                v-for="project, i in state.projects"
                :key="project.title"
                :project="project"
                :class="['md:w-2/5 m-5', getClassProject(i), i ]"
                @open-modal="openModal(project)"
            />
        </section>
        <ProjectsModal ref="modal" :project="currentProject" />
    </main>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { IProject } from '~~/components/Projects/Item.vue'
import { MODIFIER, TYPE, SIZE } from '~~/types/enums'
import ProjectsModal from '~/components/Projects/Modal.vue'

const modal: Ref<InstanceType<typeof ProjectsModal> | null> = ref(null)
const state = reactive<{projects: IProject[]}>({
    projects: [
        {
            title: 'Les arsenaux Sàrl',
            contribution: `En tant que développeur freelance, 
            j’ai eu à intégrer une maquette fournie.
            Afin de rendre le site dynamique j’ai également eu
            à créer un thème et un plugin WordPress. Le site étant multi-langue,
            j’ai eu à utiliser différents plugins tel que ACF et Polylang.
            Pour accélérer le développement et la présentation au client
            j’ai créé un pipeline pour automatiser le déploiement de 
            la version de développement et de production. Enfin, j’ai
            crée de la documentation afin que le client soit le plus 
            autonome possible et puisse ajouter et modifier le site au
            mieux.`,
            description: `L’entreprise suisse, basée à Fribourg,
            Les arsenaux procure des soins en art-thérapie et en ergothérapie.
            Elle m’a contacté afin que je crée leur site vitrine.
            Le site nécessitait différentes fonctionnalités tel que le support
            de plusieurs langues (Français-Allemand) et la modularité 
            (permettre d’ajouter des nouvelles images, 
            des nouveaux soins, etc.).`,
            images: [
                { src: '/images/projects/arsenaux/arsenaux-1.png' },
                { src: '/images/projects/arsenaux/arsenaux-2.png' },
                { src: '/images/projects/arsenaux/arsenaux-3.png' },
                { src: '/images/projects/arsenaux/arsenaux-4.png' }
            ],
            tags: [
                {
                    content: 'PHP',
                    iconName: 'language-php',
                    size: SIZE.SM
                },
                {
                    content: 'Wordpress',
                    iconName: 'wordpress',
                    size: SIZE.SM
                },
                {
                    content: 'TypeScript',
                    type: TYPE.SECONDARY,
                    iconName: 'language-typescript',
                    size: SIZE.SM
                },
                {
                    content: 'Scss',
                    type: TYPE.SECONDARY,
                    iconName: 'sass',
                    size: SIZE.SM
                },
                {
                    content: 'Git',
                    type: TYPE.DEFAULT,
                    iconName: 'git',
                    size: SIZE.SM
                },
                {
                    content: 'Docker',
                    type: TYPE.DEFAULT,
                    iconName: 'docker',
                    size: SIZE.SM
                },
                {
                    content: 'Gitlab CI/CD',
                    modifiers: [MODIFIER.ROUNDED],
                    type: TYPE.DEFAULT,
                    iconName: 'gitlab',
                    size: SIZE.SM
                }
            ],
            website: 'https://ergo-art-senaux.ch'
        },
        {
            title: 'Contribulle',
            contribution: `Depuis novembre 2020, je contribue au frontend 
        (HTML, SCSS, JS) du site Contribulle. Je contribue activement en projet
        en prenant par à des réunions mensuelles et en ajoutant des nouvelles
        fonctionnalités.`,
            description: `Contribulle est une plateforme, sous 
        licence libre, a pour but de mettre en relation des contributeur⋅ice⋅s
        et des projets, principalement, libres. Le projet est né 
        dans le cadre d'un Contribatelier au milieu de l'année 2020.`,
            images: [
                { src: '/images/projects/contribulle/contribulle-1.png' },
                { src: '/images/projects/contribulle/contribulle-2.png' },
                { src: '/images/projects/contribulle/contribulle-3.png' },
                { src: '/images/projects/contribulle/contribulle-4.png' }
            ],
            website: 'https://contribulle.org',
            code: 'https://framagit.org/participalibre/participalibre',
            tags: [
                {
                    content: 'PHP',
                    iconName: 'language-php',
                    size: SIZE.SM
                },
                {
                    content: 'Laravel',
                    modifiers: [MODIFIER.ROUNDED],
                    iconName: 'laravel',
                    size: SIZE.SM
                },
                {
                    content: 'JavaScript',
                    type: TYPE.SECONDARY,
                    iconName: 'language-javascript',
                    size: SIZE.SM
                },
                {
                    content: 'Scss',
                    type: TYPE.SECONDARY,
                    iconName: 'sass',
                    size: SIZE.SM
                },
                {
                    content: 'Git',
                    type: TYPE.DEFAULT,
                    iconName: 'git',
                    size: SIZE.SM
                },
                {
                    content: 'Gitlab',
                    modifiers: [MODIFIER.ROUNDED],
                    type: TYPE.DEFAULT,
                    iconName: 'gitlab',
                    size: SIZE.SM
                }
            ]
        },
        {
            title: 'TokTok',
            contribution: `Cette application web permet aux militants 
        du mouvement politique « La France Insoumise » de noter 
        les portes-à-portes qu’iels ont effectués et de repérer 
        les endroits où il est le plus utile de militer.`,
            description: `J’ai participé à sa création 
            (depuis décembre 2021) en tant que développeur frontend
            (principalement en TypeScript), j’ai donc eu à réfléchir
            autour des technologies à utiliser et des fonctionnalités
            à apporter.`,
            images: [
                { src: '/images/projects/toktok/toktok-1.png' },
                { src: '/images/projects/toktok/toktok-2.png' },
                { src: '/images/projects/toktok/toktok-3.png' },
                { src: '/images/projects/toktok/toktok-4.png' }
            ],
            tags: [
                {
                    content: 'Python',
                    iconName: 'language-python',
                    size: SIZE.SM
                },
                {
                    content: 'Flask',
                    modifiers: [MODIFIER.ROUNDED],
                    size: SIZE.SM
                },
                {
                    content: 'TypeScript',
                    type: TYPE.SECONDARY,
                    iconName: 'language-typescript',
                    size: SIZE.SM
                },
                {
                    content: 'Css',
                    type: TYPE.SECONDARY,
                    iconName: 'language-css3',
                    size: SIZE.SM
                },
                {
                    content: 'Git',
                    type: TYPE.DEFAULT,
                    iconName: 'git',
                    size: SIZE.SM
                },
                {
                    content: 'Docker',
                    type: TYPE.DEFAULT,
                    iconName: 'docker',
                    size: SIZE.SM
                },
                {
                    content: 'Github',
                    modifiers: [MODIFIER.ROUNDED],
                    type: TYPE.DEFAULT,
                    iconName: 'github',
                    size: SIZE.SM
                }
            ]
        },
        {
            title: 'Court-circuit La Piarre',
            contribution: `Cette application web permet aux militants 
        du mouvement politique « La France Insoumise » de noter 
        les portes-à-portes qu’iels ont effectués et de repérer 
        les endroits où il est le plus utile de militer. 
        J’ai participé à sa création (depuis décembre 2021) en tant 
        que développeur frontend (principalement en TypeScript), 
        j’ai donc eu à réfléchir autour des technologies à utiliser 
        et des fonctionnalités à apporter.`,
            description: `Depuis novembre 2020, je contribue au frontend 
        (HTML, SCSS, JS) du site Contribulle. Cette plateforme, sous 
        licence libre, a pour but de mettre en relation des contributeur⋅ice⋅s
        et des projets, principalement, libres.`,
            images: [
                { src: '/images/projects/cclapiarre/cclapiarre-1.png' },
                { src: '/images/projects/cclapiarre/cclapiarre-2.png' },
                { src: '/images/projects/cclapiarre/cclapiarre-3.png' },
                { src: '/images/projects/cclapiarre/cclapiarre-4.png' }
            ],
            tags: [
                {
                    content: 'Python',
                    iconName: 'language-python',
                    size: SIZE.SM
                },
                {
                    content: 'Django',
                    modifiers: [MODIFIER.ROUNDED],
                    size: SIZE.SM
                },
                {
                    content: 'JavaScript',
                    type: TYPE.SECONDARY,
                    iconName: 'language-javascript',
                    size: SIZE.SM
                },
                {
                    content: 'VueJs',
                    type: TYPE.SECONDARY,
                    iconName: 'vuejs',
                    size: SIZE.SM
                },
                {
                    content: 'Git',
                    type: TYPE.DEFAULT,
                    iconName: 'git',
                    size: SIZE.SM
                },
                {
                    content: 'Gitlab',
                    modifiers: [MODIFIER.ROUNDED],
                    type: TYPE.DEFAULT,
                    iconName: 'gitlab',
                    size: SIZE.SM
                }
            ],
            website: 'https://cclapiarre.deblan.fr',
            code: 'https://gitlab.com/damax/cclapiarre'
        }
    ]
})
const currentProject: Ref<IProject> = ref(state.projects[0])

const openModal = (project: IProject) => {
    modal.value.open()
    currentProject.value = project
}

const getClassProject: ((item: number) => string) =
(item: number) => {
    switch (item % 4) {
    case 0:
        return 'mt-20'
    case 1:
        return 'lg:mr-20 xl:mr-40'
    case 2:
        return 'mt-20 lg:ml-20 xl:ml-40'
    default:
        return ''
    }
}

</script>
