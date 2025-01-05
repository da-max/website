<script setup lang="ts">
const isOpen = ref(true);

watch(isOpen, () => {
  console.log(isOpen);
  if (!isOpen.value) {
    navigateTo("/projects");
  }
});
</script>

<template>
  <UModal
    v-model="isOpen"
    :transition="false"
    indicators
    :ui="{
      width: 'w-full sm:max-w-[50vw]',
    }"
  >
    <ContentDoc v-slot="{ doc }">
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <h1 class="text-2xl font-bold">
            {{ doc.name }}
          </h1>
        </template>
        <UCarousel
          :items="doc.images"
          indicators
          class="w-10/12 mx-auto"
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
        <p class="mt-6">
          {{ doc.description }}
        </p>
        <template #footer>
          <UButton></UButton>
        </template>
      </UCard>
    </ContentDoc>
  </UModal>
</template>
