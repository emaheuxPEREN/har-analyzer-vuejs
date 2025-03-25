<script setup>
import {Card} from "primevue";
import ButtonGroup from 'primevue/buttongroup';
import CopyBtn from "@/components/har/generic/CopyBtn.vue";
</script>

<script>
export default {
  props: ['content', 'title'],
  methods: {

  }
}
</script>

<template>
  <div v-if="content">
    <Card>
      <template #header>
        <div class="p-2 pb-0 border-bottom d-flex justify-content-between">
          <div class="p-1">
            <span class="fw-bold">{{ title }}</span>
          </div>
          <div class="p-0 m-0">
            <ButtonGroup>
              <CopyBtn :content="content" text="Copy"></CopyBtn>
            </ButtonGroup>
          </div>
        </div>
      </template>
      <template #content>
        <pre class="mb-0" style="white-space: pre;"><code>{{ content }}</code></pre>
      </template>
    </Card>
  </div>
</template>
