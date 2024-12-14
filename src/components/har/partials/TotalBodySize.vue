<script setup>
import {Tag} from "primevue";
</script>

<script>
export default {
  props: ['entry']
}
</script>

<template>
<Tag class="me-1" icon="pi pi-cloud-download"
     :value="$humanFileSize(entry.request.bodySize + entry.response.bodySize + entry.request.headersSize + entry.response.headersSize)"
     severity="secondary" />
</template>