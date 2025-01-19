<script setup lang="ts">
const isOpen = ref(true);
const slug = useRoute().params.slug as string;

const { data: project } = await useAsyncData(`projects-${slug}`, () => {
  return queryCollection("projects").where("slug", "=", slug).first();
});

watch(isOpen, () => {
  if (!isOpen.value) {
    navigateTo("/projects");
  }
});
</script>

<template>
  <AppProjectModal v-if="project" v-model:open="isOpen" :project="project" />
</template>
