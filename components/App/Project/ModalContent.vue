<script setup lang="ts">
import type { Project } from "~/types";

defineEmits<{
  (e: "close", value: undefined): void;
}>();

defineProps<{
  project: Project;
}>();
</script>

<template>
  <UCard
    :ui="{
      ring: '',
      divide: 'divide-y divide-gray-100 dark:divide-gray-800',
    }"
  >
    <template #header>
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">
          {{ project.name }}
        </h1>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-x-mark-20-solid"
          class="-my-1"
          @click="$emit('close', undefined)"
        />
      </div>
    </template>
    <UCarousel
      v-show="project.images"
      :items="project.images"
      indicators
      class="w-10/12 mx-auto mb-6"
      :ui="{
        item: 'basis-full',
        container: 'rounded-lg',
        indicators: {
          wrapper: 'relative bottom-0 mt-4',
        },
      }"
    >
      <template #default="{ item }">
        <img :src="item" class="w-full" draggable="false" />
      </template>

      <template #indicator="{ onClick, page, active }">
        <UButton
          :label="String(page)"
          :variant="active ? 'solid' : 'outline'"
          size="2xs"
          class="rounded-full min-w-6 justify-center"
          @click="onClick(page)"
        />
      </template>
    </UCarousel>
    <p>
      {{ project.description }}
    </p>
    <p class="mt-6">
      {{ project.contribution }}
    </p>
    <template #footer>
      <div class="text-center" v-show="project.status === 'LIVE'">
        <UButton size="xl" :to="project.url" target="_blank">
          Voir le projet
        </UButton>
      </div>
    </template>
  </UCard>
</template>

<style scoped></style>
