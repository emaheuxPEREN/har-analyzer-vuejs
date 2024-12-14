<script>
export default {
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
      <span class="text-muted-color"> The original data is not printable</span>
    </div>
    <ul class="list-none my-2">
      <li>
        <span class="font-bold text-muted-color">Mimetype: </span>
        <span class="font-mono">{{ entry._content.mimeType }}</span>
      </li>
      <li>
        <span class="font-bold text-muted-color">Encoding: </span>
        <span class="font-mono">{{ entry._content.encoding }}</span>
      </li>
    </ul>
    <div class="font-bold mb-2 text-muted-color">Data:</div>
    <pre class="h-[38rem] overflow-auto text-wrap border border-primary rounded-lg text-muted-color p-2"><code>{{ entry._content.text }}</code></pre>
<!--    <VCodeBlock-->
<!--        :code="entry._content.text"-->
<!--        maxHeight="42rem"-->
<!--        prismjs-->
<!--        theme="okaidia"-->
<!--    />-->
  </div>
  <div class="" v-else>
    <ul class="my-2 list-none">
      <li>
        <span class="font-bold text-muted-color">Mimetype: </span>
        <span class="font-mono">{{ body.mimeType }}</span>
      </li>
      <li>
        <span class="font-bold text-muted-color">Encoding: </span>
        <span class="font-mono">{{ body.encoding }}</span>
      </li>
    </ul>
    <div class="font-bold mb-2 text-muted-color">Data:</div>
    <pre class="h-[38rem] overflow-auto text-wrap border border-primary rounded-lg text-muted-color p-2"><code>{{ decodedContent }}</code></pre>
  </div>
</template>