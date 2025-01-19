<script setup lang="ts">
import type { Project } from "~/types";

defineProps<{
  project: Project;
}>();
const open = defineModel<boolean>("open", { required: true });
const onClose = () => {
  open.value = false;
};
</script>

<template>
  <UModal
    v-model="open"
    :transition="false"
    indicators
    :ui="{
      width: 'w-full sm:max-w-[50vw]',
    }"
  >
    <AppProjectModalContent :project="project" @close="onClose" />
  </UModal>
</template>
