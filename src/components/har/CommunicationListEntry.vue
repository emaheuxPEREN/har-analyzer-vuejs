<script setup>
import {Tag} from "primevue";
</script>

<script>
export default {
  props: ['entry', 'timeRange'],
  computed: {
    hostname() {
      const url = new URL(this.entry.request.url);
      return url.hostname;
    },
    isBlocked() {
      return this.entry.response.bodySize < 0;
    },
    isDataUrl() {
      return !('connection' in this.entry) && this.responseSize > 0;
    },
    responseSize() {
      return this.entry.response?.bodySize || this.entry.response?.content?.size || 0;
    }
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
        <span class="pi pi-download text-muted" v-if="isDataUrl"></span>
        <span class="pi pi-cloud-download text-unmuted" v-else></span>
        <span class="ms-1 text-danger" v-if="isBlocked">
          Blocked
        </span>
        <span class="ms-1 text-unmuted" v-else>
          {{ $humanFileSize(entry.request.bodySize + responseSize) }}
        </span>
      </div>
      <div class="p-1 text-primary" v-if="isDataUrl">
        <span class="pi pi-file"></span>
        local page
      </div>
      <div class="p-1 text-primary" v-else>
        <span class="pi pi-globe"></span>
        {{ hostname }}
      </div>
    </div>
    <div class="d-flex flex-row ">
      <div class="p-1 text-unmuted font-monospace" v-if="entry.request._stacktrace">
        <span class="pi pi-wave-pulse" ></span>
        <span class="mx-1 text-sm">{{ entry.request._stacktrace.process }}</span>
      </div>
      <div class="p-1 text-unmuted font-monospace" v-else-if="isDataUrl">
        <span class="pi pi-code" ></span>
        <span class="mx-1 text-sm">Local script</span>
      </div>
      <div class="p-1 text-unmuted font-monospace" v-else-if="isBlocked">
        <span class="pi pi-server" ></span>
        <span class="mx-1 text-sm text-danger">DNS request blocked</span>
      </div>
      <div class="p-1 text-unmuted font-monospace" v-else>
        <span class="pi pi-server" ></span>
        <span class="mx-1 text-sm">{{ entry.serverIPAddress }}</span>
      </div>
    </div>
  </div>
</template>