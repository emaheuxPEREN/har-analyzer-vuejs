<script setup>
import {DataTable, Column} from "primevue";
</script>

<script>
export default {
  props: ['ogre'],
  data() {
    return {
      expandedRows: {}
    };
  },
  methods: {
    sortKeys: function (obj) {
      return Object.keys(obj).sort().reduce((result, key) => {
        result[key] = obj[key];
        return result;
      }, {});
    },
  },
  computed: {
    detections: function () {
      let data = [];
      const sortedObj = this.sortKeys(this.ogre.detected_data);
      for (const [key, value] of Object.entries(sortedObj)) {
        data.push({
          type: key,
          count: value.length,
          example: value[0].value,
          details: value
        })
      }
      return data;
    }
  }
}
</script>

<template>
  <div class="my-2">
    <DataTable v-model:expandedRows="expandedRows" :value="detections" dataKey="type" size="small">
      <Column expander style="width: 1rem"/>
      <Column field="type" header="" sortable>
        <template #header>
          <span class="text-muted-color font-bold">Data category</span>
        </template>
        <template #body="slotProps">
          <span class="text-primary">{{ slotProps.data.type }}</span>
        </template>
      </Column>
      <Column field="count" header="" sortable>
        <template #header>
          <span class="text-muted-color font-bold">Count</span>
        </template>
      </Column>
      <Column field="example" header="">
        <template #header>
          <span class="text-muted-color font-bold">Value</span>
        </template>
        <template #body="slotProps">
          <span class="font-mono text-muted-color">{{ slotProps.data.example }}</span>
        </template>
      </Column>
      <template #expansion="slotProps">
        <div class="m-0 p-0 text-sm border-0">
          <DataTable :value="slotProps.data.details" size="small" class="">
            <Column field="part" header="" class="w-1/6">
              <template #header>
                <span class="font-bold text-muted-color">Part</span>
              </template>
              <template #body="slotProps">
                <span class="text-muted-color">{{ slotProps.data.part }}</span>
              </template>
            </Column>
            <Column field="section" header="" class="w-1/6">
              <template #header>
                <span class="font-bold text-muted-color">Section</span>
              </template>
              <template #body="slotProps">
                <span class="text-muted-color">{{ slotProps.data.section }}</span>
              </template>
            </Column>
            <Column field="pointer" header="" class="w-2/6">
              <template #header>
                <span class="font-bold text-muted-color">Path</span>
              </template>
              <template #body="slotProps">
                <samp class="text-muted-color">{{ slotProps.data.pointer }}</samp>
              </template>
            </Column>
            <Column field="value" header="" class="w-2/6">
              <template #header>
                <span class="font-bold text-muted-color">Value</span>
              </template>
              <template #body="slotProps">
                <samp class="text-muted-color">{{ slotProps.data.value }}</samp>
              </template>
            </Column>
          </DataTable>
        </div>
      </template>
    </DataTable>
  </div>
</template>
