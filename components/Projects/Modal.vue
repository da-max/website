<template>
    <UtilsModal ref="modal" :is-open="isOpen" @close="close">
        <template #header>
            <div class="flex justify-between">
                <h2>
                    {{ project.title }}
                </h2>
                <a
                    href="#"
                    class="focus:text-primary hover:text-primary transition"
                    @click.prevent="close"
                >
                    <mdicon
                        name="closeCircleOutline"
                    />
                </a>
            </div>
            <ProjectsTags class="mt-5" :tags="project.tags" />
        </template>
        <template #content>
            <ProjectsModalImages
                class="p-0.5 bg-primary"
                :images="project.images"
            />
            <h3 class="mt-5 mb-3 text-2xl text-primary">
                Description du projets
            </h3>
            <p>{{ project.description }}</p>
            <h3 class="mt-5 mb-3 text-2xl text-primary">
                Détails de ma contribution
            </h3>
            <p>{{ project.contribution }}</p>
        </template>
        <template
            v-if="project.website || project.code"
            #footer
        >
            <p
                class="md:p-5 p-2 flex md:flex-row
            flex-col items-center justify-evenly"
            >
                <UtilsButton
                    v-show="project.website"
                    :href="project.website"
                    :type="TYPE.PRIMARY"
                    class="md:m-0 mb-2"
                >
                    Voir le projet
                </UtilsButton>

                <UtilsButton
                    v-show="project.code"
                    :href="project.code"
                    :type="TYPE.SECONDARY"
                >
                    Voir le code source
                </UtilsButton>
            </p>
        </template>
    </UtilsModal>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { IProject } from './Item.vue'
import UtilsModal from '~/components/Utils/Modal.vue'
import { TYPE } from '~~/types/enums'

const props = defineProps<{ project: IProject }>()
const { close, open, isOpen } = useModal()
const project = computed(() => props.project)
const modal: Ref<InstanceType<typeof UtilsModal> | null> = ref(null)

defineExpose({ open })

</script>
