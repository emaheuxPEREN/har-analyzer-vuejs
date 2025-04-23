<script>
import CopyBtn from "@/components/har/generic/CopyBtn.vue";

export default {
  components: {CopyBtn},
  props: ['entry']
}
</script>

<template>
  <ul class="list-unstyled">
    <li>
      <span class="text-unmuted fw-bold">URL</span>:
      <CopyBtn>{{ entry.request.url }}</CopyBtn>
    </li>
    <li>
      <span class="text-unmuted fw-bold">Method</span>:
      <CopyBtn>{{ entry.request.method }}</CopyBtn>
    </li>
    <li>
      <span class="text-unmuted fw-bold">Status</span>:
      <CopyBtn>{{ entry.response.status }}</CopyBtn>
    </li>
    <li>
      <span class="text-unmuted fw-bold">Timestamp</span>:
      <CopyBtn>{{ entry.startedDateTime }}</CopyBtn>
    </li>
    <li>
      <span class="text-unmuted fw-bold">Time</span>:
      <CopyBtn>{{ entry.time }}ms</CopyBtn>
    </li>
    <li>
      <span class="text-unmuted fw-bold">Remote IP</span>:
      <span class="text-danger" v-if="entry.response.bodySize < 0">DNS request blocked</span>
      <CopyBtn v-else-if="entry.serverIPAddress">{{ entry.serverIPAddress }}</CopyBtn>
    </li>
    <li v-if="entry._communityId">
      <span class="text-unmuted fw-bold">Community ID</span>:
      <CopyBtn><span class="font-monospace">{{ entry._communityId }}</span></CopyBtn>
    </li>
    <li v-if="entry._sha1Id">
      <span class="text-unmuted fw-bold">SHA1</span>:
      <CopyBtn><span class="font-monospace">{{ entry._sha1Id }}</span></CopyBtn>
    </li>
  </ul>
</template>