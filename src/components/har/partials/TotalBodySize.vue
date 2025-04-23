<script setup>
import {Tag} from "primevue";
</script>

<script>
export default {
  props: ['entry'],
  computed: {
    totalSize() {
      return this.entry.request.bodySize
          + (this.entry.response?.bodySize || this.entry.response.content?.size || 0)
          + this.entry.request.headersSize
          + this.entry.response.headersSize;
    },
  },
}
</script>

<template>
<Tag class="me-1" icon="pi pi-cloud-download"
     :value="$humanFileSize(totalSize)"
     severity="secondary" />
</template>