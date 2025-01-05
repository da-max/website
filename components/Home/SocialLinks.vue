<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">TROUVEZ MOI SUR</h2>
    <div class="space-y-5">
      <NuxtLink
        v-for="link in links"
        :key="link.icon"
        :to="link.url"
        target="_blank"
        external
        class="flex items-end gap-4 dark:hover:text-gray-300 group"
      >
        <span class="text-sm">
          {{ link.name }}
        </span>
        <div
          class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
        ></div>
        <Icon :name="link.icon" class="w-6 h-6"></Icon>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    name: "Twitter",
    url: "https://twitter.com/Damaaax",
    icon: "simple-icons:twitter",
  },
  {
    name: 'Bluesky',
    url: 'https://bsky.app/profile/da-max.bsky.social',
    icon: 'simple-icons:bluesky'
  },
  {
    name: "GitHub",
    url: "https://github.com/da-max",
    icon: "simple-icons:github",
  },
  {
    name: 'GitLab',
    url: 'https://gitlab.com/Damax',
    icon: 'simple-icons:gitlab'
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/maxime-ben-hassen-a9aa2a21a/",
    icon: "simple-icons:linkedin",
  },
  {
    name: "Telegram",
    url: "https://t.me/Damaaax",
    icon: "mdi:telegram",
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/maximebh____/',
    icon: 'simple-icons:instagram'
  }
];
</script>
