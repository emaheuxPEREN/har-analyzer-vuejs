<script setup>
import {Tag} from "primevue";
</script>

<script>
export default {
  props: ['url'],
  computed: {
    isSecured: function() {
      return this.url.startsWith('https://');
    }
  }
}
</script>

<template>
  <Tag class="me-1" icon="pi pi-shield" :value="'HTTPS'" severity="success" v-if="isSecured"/>
  <Tag class="me-1" icon="pi pi-shield" :value="'HTTP'" severity="danger" v-else/>
</template>