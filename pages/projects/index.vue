<template>
    <main class="container mx-auto">
        <header class="text-center my-40">
            <UtilsMainTitle>Mes réalisations</UtilsMainTitle>
        </header>
        <section
            v-if="projects"
            class="flex items-center justify-center flex-wrap py-20"
        >
            <ProjectsItem
                v-for="(project, i) in projects"
                :key="project.title"
                :project="project"
                :class="['md:w-2/5 m-5', getClassProject(i), i ]"
                @open-modal="openModal(project)"
            />
        </section>
        <ProjectsModal
            v-if="currentProject"
            ref="modal"
            :project="currentProject"
        />
    </main>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { IProject } from '~~/components/Projects/Item.vue'
import ProjectsModal from '~/components/Projects/Modal.vue'

useHead({
    title: 'Mes projets | Fedabian',
    meta: [
        {
            name: 'description',
            content: 'Les projects de Maxime `Da-max` Ben Hassen.'
        },
        {
            name: 'keywords',
            content: `maxime benhassen, maxime benhassen
            portfolio, maxime benhassen développeur web,
            maxime benhassen projets, da-max portfolio, da-max développeur,
             fedabian développeur, fedabian portfolio, fedabian projets`
        }
    ]
})

const modal: Ref<InstanceType<typeof ProjectsModal> | null> = ref(null)
const { data: projects } = await useFetch<IProject[]>('/api/projects')
const currentProject: Ref<IProject | null> =
    ref(projects instanceof Array ? projects[0] : null)

const openModal = (project: IProject) => {
    if (modal.value !== null) {
        modal.value.open()
    }
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
