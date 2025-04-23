<script setup>
import {Tag} from "primevue";
</script>

<script>
export default {
  props: ['request'],
  computed: {
    isSecured() {
      return this.request.url.startsWith('https://');
    },
    isData() {
      return this.request.url.startsWith('data:');
    }
  }
}
</script>

<template>
  <Tag class="me-1" :value="request.httpVersion" severity="info" v-if="request.httpVersion"/>
  <Tag class="me-1" icon="pi pi-shield" :value="'DATA'" severity="warn" v-if="isData"/>
  <Tag class="me-1" icon="pi pi-shield" :value="'HTTPS'" severity="success" v-else-if="isSecured"/>
  <Tag class="me-1" icon="pi pi-shield" :value="'HTTP'" severity="danger" v-else/>
</template>