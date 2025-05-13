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
  <UModal v-model:open="open" :transition="false" indicators>
    <template #content>
      <AppProjectModalContent :project="project" @close="onClose" />
    </template>
  </UModal>
</template>
