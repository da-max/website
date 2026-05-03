<template>
  <NuxtLink
    class="flex items-end gap-4 group p-2 -m-2 rounded-lg dark:text-gray-300"
    :to="{ name: 'projects-slug', params: { slug: project.slug } }"
  >
    <div class="max-w-8/10">
      <h3 class="text-sm font-medium group-hover:text-primary-600">
        {{ project.name }}
      </h3>
      <p
        class="text-gray-400 text-sm text-nowrap text-ellipsis overflow-hidden"
      >
        {{ project.description }}…
      </p>
    </div>
    <div
      class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800"
    ></div>
    <UAvatar
      :src="project.thumbnail"
      size="md"
      :alt="project.name"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Project } from "~/types";

defineProps<{
  project: Project;
}>();
</script>
