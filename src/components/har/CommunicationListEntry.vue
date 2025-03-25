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
  <div class="text-wrap">
    <div class="d-flex flex-row">
      <div class="p-0 mx-1">
        <Tag class="" :value="entry.request.method" severity="danger" v-if="entry.response.status>=400"/>
        <Tag class="" :value="entry.request.method" severity="success" v-else/>
      </div>
      <div class="p-1">
        <span class="pi pi-cloud-download text-unmuted"></span>
        <span class="ms-1 text-unmuted">
          {{ $humanFileSize(entry.request.bodySize + entry.response.bodySize) }}
        </span>
      </div>
      <div class="p-1 text-primary">
        <span class="pi pi-globe"></span>
        {{ hostname }}
      </div>
    </div>
    <div class="d-flex flex-row ">
      <div class="p-1 text-unmuted font-monospace" v-if="entry.request._stacktrace">
        <span class="pi pi-wave-pulse" ></span>
        <span class="mx-1 text-sm">{{ entry.request._stacktrace.process }}</span>
      </div>
      <div class="p-1 text-unmuted font-monospace" v-else>
        <span class="pi pi-server" ></span>
        <span class="mx-1 text-sm">{{ entry.serverIPAddress }}</span>
      </div>
    </div>
  </div>
</template>