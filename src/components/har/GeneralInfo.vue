<script>
export default {
  props: ['entry']
}
</script>

<template>
  <ul class="list-none">
    <li>
      <span class="text-muted-color font-bold">Method</span>:
      {{ entry.request.method }}
    </li>
    <li>
      <span class="text-muted-color font-bold">Status</span>:
      {{ entry.response.status }}
    </li>
    <li>
      <span class="text-muted-color font-bold">Timestamp</span>:
      {{ entry.startedDateTime }}
    </li>
    <li>
      <span class="text-muted-color font-bold">Time</span>:
      {{ entry.time }}ms
    </li>
    <li>
      <span class="text-muted-color font-bold">Remote IP</span>:
      {{ entry.serverIPAddress }}
    </li>
    <li v-if="entry._communityId">
      <span class="text-muted-color font-bold">Community ID</span>:
      <span class="font-mono">{{ entry._communityId }}</span>
    </li>
    <li v-if="entry._sha1Id">
      <span class="text-muted-color font-bold">SHA1</span>:
      <span class="font-mono">{{ entry._sha1Id }}</span>
    </li>
  </ul>
</template>