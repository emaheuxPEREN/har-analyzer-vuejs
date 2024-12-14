<script>
export default {
  props: ['entry']
}
</script>

<template>
  <div class="my-2">
    <ul class="list-none">
      <li class="">
        <span class="font-bold text-muted-color">Algorithm: </span>
        <span class="font-mono">{{ entry._decryption.primitiveParameters.algorithm }}</span>
      </li>
      <li class="">
        <span class="font-bold text-muted-color">Key: </span>
        <span class="font-mono">{{ entry._decryption.primitiveParameters.key }}</span>
      </li>
      <li class="">
        <span class="font-bold text-muted-color">IV: </span>
        <span class="font-mono">{{ entry._decryption.primitiveParameters.iv }}</span>
      </li>
    </ul>
    <div class="">
      <div class="font-bold mb-2 text-muted-color">Original data (base64):</div>
    <pre class="h-[38rem] overflow-auto text-wrap border border-primary text-muted-color rounded-lg p-2"><code>{{ entry._decryption.originalBase64Content }}</code></pre>
    </div>
  </div>
</template>
