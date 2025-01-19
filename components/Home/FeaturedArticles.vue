<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      MES ARTICLES RÉCENTS
    </h2>
    <template v-if="articles && articles?.length > 0">
      <ul class="space-y-16">
        <li v-for="(article, id) in articles" :key="id">
          <AppArticleCard :article="article" />
        </li>
      </ul>
      <div class="flex items-center justify-center mt-6 text-sm">
        <UButton
          label="Tous mes articles &rarr;"
          to="/articles"
          variant="link"
          color="gray"
        />
      </div>
    </template>
    <div v-else class="text-center">🚧 À venir</div>
  </div>
</template>

<script lang="ts" setup>
const { data: articles } = await useAsyncData("articles-home", () =>
  queryCollection("articles")
    .order("published", "ASC")
    .limit(3)
    .select("title", "description", "published", "slug", "path")
    .all()
);
</script>
