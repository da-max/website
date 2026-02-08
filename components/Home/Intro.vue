<template>
  <div class="space-y-6">
    <NuxtImg
      src="/avatar.png"
      alt="Maxime Ben Hassen"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px"
      placeholder
      format="webp"
    />
    <h1
      class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
    >
      Bonjour !
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      Je m’appelle Maxime, je suis développeur logiciel depuis 4 ans. Je
      travaille principalement sur le développement d’applications web avec
      TypeScript, React, VueJs, PHP, Symfony mais également Java, SpringBoot,
      Python, Django et Golang.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      Le jour je travaille à la
      <a href="https://sgp.fr" target="_blank">Société des grands projets</a> où j’occupe le
      poste de développeur informatique.<br />
      La nuit, je développe des projets pour des associations et partis
      politique en particulier depuis 2021, je suis lead développeur sur
      l’application TokTok développé pour le mouvement La France Insoumise.
      <br />
      En 2025, ce projet a donné lieu à la création d’une association, dont je suis le co-fondateur et le trésorier
      qui se nomme <a href="https://la-manufacture.io" target="_blank">La Manufacture</a>.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      Un grand merci à <a href="https://zooper.pages.dev/">Fayaz</a> pour la
      création de ce thème et pour l’inspiration du texte 🙂.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Maxime Ben Hassen",
  description:
    "Je m’appelle Maxime Ben Hassen, je suis développeur logiciel en France pour la Société des grands projets. Je travaille également pour des associations et organisations dont je partage les valeurs.",
});
</script>
