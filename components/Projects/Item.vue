<template>
    <section
        href="#"
        class="bg-primary-background rounded-lg transition-shadow
                shadow-md hover:shadow-lg hover:shadow-primary
                shadow-primary"
    >
        <header class="m-10 mb-5">
            <h2>{{ project.title }}</h2>
            <ProjectsTags class="mt-5" :tags="project.tags" />
        </header>
        <hr class="h-[2px] bg-primary">
        <aside
            class="p-10 flex flex-col justify-center cursor-pointer"
            @click="emit('open-modal')"
        >
            <UtilsImagesTransition
                class="mb-10 h-[239px] flex justify-center"
                :images-class="['max-h-[239px]', 'absolute']"
                :images="project.images"
            />
            <p>
                {{ truncateDescription }}
            </p>
            <p class="mt-4">
                <UtilsButton :type="BTN_TYPE.TEXT">
                    En savoir plus
                </UtilsButton>
            </p>
        </aside>
        <UtilsHr />
        <footer
            v-if="project.website || project.code"
            class="p-10 flex
            lg:justify-evenly
            items-center
            lg:flex-row flex-col"
        >
            <UtilsButton
                v-if="project.website"
                target="_blank"
                :href="project.website"
                :type="TYPE.PRIMARY"
                class="lg:m-0 my-5"
            >
                Voir le projet
            </UtilsButton>
            <UtilsButton
                v-if="project.code"
                :href="project.code"
                :type="TYPE.SECONDARY"
                target="_blank"
            >
                Voir le code source
            </UtilsButton>
        </footer>
    </section>
</template>

<script setup lang="ts">
import { NuxtImgProps, TagProps } from '~/types'
import { BTN_TYPE, TYPE } from '~~/types/enums'

export interface IProject {
    title: string,
    description: string,
    contribution: string,
    website?: string,
    code?: string,
    images: NuxtImgProps[],
    tags: (TagProps & { content: string })[]
}
const MAX_DESCRIPTION_LENGTH = 200
const props = defineProps<{
    project: IProject,
}>()
const emit = defineEmits<{(e: 'open-modal'): void}>()

const project = computed(() => props.project)

const truncateDescription = computed(() =>
    (project.value.description.slice(0, MAX_DESCRIPTION_LENGTH).trim() +
    (project.value.description.length > MAX_DESCRIPTION_LENGTH ? '…' : '')))

</script>
