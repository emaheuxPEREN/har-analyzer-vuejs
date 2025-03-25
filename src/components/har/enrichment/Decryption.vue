<script>
export default {
  props: ['entry']
}
</script>

<template>
  <div class="my-2">
    <ul class="list-unstyled">
      <li class="">
        <span class="fw-bold text-unmuted">Algorithm: </span>
        <span class="font-monospace">{{ entry._decryption.primitiveParameters.algorithm }}</span>
      </li>
      <li class="">
        <span class="fw-bold text-unmuted">Key: </span>
        <span class="font-monospace">{{ entry._decryption.primitiveParameters.key }}</span>
      </li>
      <li class="">
        <span class="fw-bold text-unmuted">IV: </span>
        <span class="font-monospace">{{ entry._decryption.primitiveParameters.iv }}</span>
      </li>
    </ul>
    <div class="" v-if="entry._decryption.originalBase64Content">
      <div class="fw-bold mb-2 text-unmuted">Original data (base64):</div>
      <pre class="h-100 overflow-auto text-wrap border border-primary text-unmuted rounded p-2"><code>{{ entry._decryption.originalBase64Content }}</code></pre>
    </div>
  </div>
</template>
