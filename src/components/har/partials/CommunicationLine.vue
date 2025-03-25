<script>
export default {
  props: ['entry']
}
</script>

<template>
<span v-if="entry._stacktrace.process">
  <span class="pi pi-wave-pulse me-2 text-primary" ></span>
  <span class="font-monospace">{{ entry._stacktrace.process }}</span>
  <span class="pi pi-code mx-4" ></span>
</span>
<span class="pi pi-mobile me-2 text-primary" ></span>
<span class="font-monospace">{{ entry._communication.src.ip }}</span>
<span class="pi pi-code mx-4" ></span>
<span class="pi pi-server me-2 text-primary" ></span>
<span class="font-monospace">
{{ entry._communication.dst.host }}:{{ entry._communication.dst.port }}
({{ entry._communication.dst.ip }})
</span>
</template>