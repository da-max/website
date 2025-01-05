<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Projects" :description="description" />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
const description =
  "J’ai travaillé sur un certains nombre de projets. Certains en tant que développeur freelance, pour la plupart ce sont des projets bénévoles pour des associations ou organisations. Enfin certains sont juste des amusements personnels me permettant de développer, consolider ou découvrir de nouvelles technologies.";
useSeoMeta({
  title: "Projects | Maxime Ben Hassen",
  description,
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>
