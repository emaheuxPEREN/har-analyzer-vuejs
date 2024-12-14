<script setup>
import {Tag} from "primevue";
</script>

<script>
export default {
  props: ['entry', 'timeRange'],
  computed: {
    hostname: function () {
      const url = new URL(this.entry.request.url)
      return url.hostname
    },
  }
}
</script>

<template>
  <div class="flex flex-row w-full text-nowrap">
    <div class="basis-1/6">
      <div>
        <Tag class="mx-1" :value="entry.request.method" severity="danger" v-if="entry.response.status>=400"/>
        <Tag class="mx-1" :value="entry.request.method" severity="success" v-else/>
      </div>
      <div class="text-sm mx-1">
        <span class="pi pi-cloud-download text-muted-color" style="font-size: 0.7rem"></span>
        <span class="mx-1 text-muted-color">
          {{ $humanFileSize(entry.request.bodySize + entry.response.bodySize) }}
        </span>
      </div>
    </div>
    <div class="">
      <div class="mx-1 text-primary">
        <span class="pi pi-globe" style="font-size: 0.8rem"></span>
        {{ hostname }}
      </div>
      <div class="mx-1 text-muted-color font-mono" v-if="entry.request._stacktrace">
        <span class="pi pi-wave-pulse" style="font-size: 0.7rem"></span>
        <span class="mx-1 text-sm">{{ entry.request._stacktrace.process }}</span>
      </div>
      <div class="mx-1 text-muted-color font-mono" v-else>
        <span class="pi pi-server" style="font-size: 0.7rem"></span>
        <span class="mx-1 text-sm">{{ entry.serverIPAddress }}</span>
      </div>
    </div>
  </div>
</template>