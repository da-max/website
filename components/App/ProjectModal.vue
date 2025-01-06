<script setup lang="ts">
import type { Project } from "~/types";

defineProps<{
  project: Project;
}>();
const open = defineModel<boolean>("open", { required: true });
</script>

<template></template>
