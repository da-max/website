<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
        <article v-if="doc">
          <ContentRenderer :value="doc" />
        </article>
        <div v-else>
          Page non trouvée
        </div>
    </div>
  </main>
</template>
<script setup>
const route = useRoute();
const { slug } = route.params;

const {data: doc} = await useAsyncData(`/articles/${slug}`, () => 
  queryCollection('articles').path(`/articles/${slug}`).first()
)

useSeoMeta({
  ogImage: `https://fedabian.fr/articles/${slug}.png`,
  twitterCard: "summary_large_image",
  articleAuthor: "Maxime Ben Hassen",
});
</script>

