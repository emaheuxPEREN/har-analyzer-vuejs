<script setup>
import {Tag} from "primevue";
</script>

<script>
export default {
  props: ['status']
}
</script>

<template>
  <Tag class="me-1" icon="pi pi-times" :value="status" severity="danger" v-if="status>=400"/>
  <Tag class="me-1" icon="pi pi-check" :value="status" severity="success" v-else/>
</template>