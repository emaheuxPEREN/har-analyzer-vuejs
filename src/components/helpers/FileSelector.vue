<script setup>
import {ref} from "vue";
import HarAnalyzer from "@/components/HarAnalyzer.vue";
import {FileUpload} from "primevue";

const entries = ref(0);

function onHarSelection(event) {
  const fileUp = event.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    const d = JSON.parse(reader.result);
    entries.value = d.log.entries;
  };
  reader.readAsText(fileUp);
}
</script>

<template>
  <div class="flex justify-end px-3">
    <FileUpload mode="basic" @select="onHarSelection" customUpload auto
                    severity="secondary" class="p-button-outlined inline-flex h-8 text-sm "/>
  </div>

  <HarAnalyzer v-model:entries="entries"></HarAnalyzer>
</template>