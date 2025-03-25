<script setup>
import Button from 'primevue/button';
</script>

<script>
export default {
  props: ['content', 'text', 'json'],
  data() {
    return {
      inlineContent: ""
    };
  },
  mounted() {
    this.inlineContent = this.$refs.inner.textContent;
  },
  computed: {
    data: function () {
      if (this.inlineContent !== ""){
        return this.inlineContent
      } else if (this.json && this.content !== undefined) {
        return JSON.stringify(this.content, null, 2);
      } else {
        return this.content;
      }
    }
  }
}
</script>

<template>
  <span ref="inner"><slot/></span>
  <Button class="p-0" v-if="inlineContent" icon="pi pi-copy" variant="link" aria-label="Copy" size="small" @click="$copyToClipboard(data)" :label="text"/>
  <Button v-else icon="pi pi-copy" aria-label="Copy" size="small" @click="$copyToClipboard(data)" :label="text"/>
</template>
