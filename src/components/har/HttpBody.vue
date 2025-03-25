<script>
import Code from "@/components/har/partials/Code.vue";

export default {
  components: {Code},
  props: ['entry', 'body'],
  computed: {
    decodedContent: function () {
      const requestBody = this.body.text;
      let parsedBody = requestBody;
      try {
        const d = JSON.parse(requestBody);
        return JSON.stringify(d, null, 2);
      } catch {
      }
      return parsedBody;
    }
  }
}
</script>

<template>
  <div class="" v-if="entry._content">
    <div class="">
      <span class="pi pi-exclamation-triangle text-orange-400"></span>
      <span class="text-unmuted"> The original data is not printable</span>
    </div>
    <ul class="list-unstyled my-2">
      <li>
        <span class="font-bold text-unmuted">Mimetype: </span>
        <span class="font-mono">{{ entry._content.mimeType }}</span>
      </li>
      <li>
        <span class="font-bold text-unmuted">Encoding: </span>
        <span class="font-mono">{{ entry._content.encoding }}</span>
      </li>
    </ul>
    <Code title="Data" :toggleable=false :content="entry._content.text"></Code>
    <div class="font-bold mb-2 text-unmuted">Data</div>
    <pre class="text-wrap border border-primary rounded text-unmuted p-2"><code>{{ entry._content.text }}</code></pre>
  </div>
  <div class="" v-else>
    <ul class="my-2 list-unstyled">
      <li>
        <span class="fw-bold text-unmuted">Mimetype: </span>
        <span class="font-monospace">{{ body.mimeType }}</span>
      </li>
      <li v-if="body.encoding">
        <span class="fw-bold text-unmuted">Encoding: </span>
        <span class="font-monospace">{{ body.encoding }}</span>
      </li>
    </ul>
    <div v-if="decodedContent" class="mt-4">
      <Code title="Data" :content="decodedContent"></Code>
    </div>
  </div>
</template>