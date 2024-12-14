<script setup>
import {ref} from "vue";
import CommunicationListEntry from "@/components/har/CommunicationListEntry.vue";
import RequestResponse from "@/components/har/RequestResponse.vue";
import GeneralInfo from "@/components/har/GeneralInfo.vue";
import HttpMethod from "@/components/har/partials/HttpMethod.vue";
import HttpStatus from "@/components/har/partials/HttpStatus.vue";
import TotalBodySize from "@/components/har/partials/TotalBodySize.vue";
import CommunicationLine from "@/components/har/partials/CommunicationLine.vue";
import SecureHttp from "@/components/har/partials/SecureHttp.vue";
import Detection from "@/components/har/enrichment/Detection.vue";
import {Tabs, Tab, TabPanels, TabPanel, TabList, Splitter, SplitterPanel, Tag, Listbox} from "primevue";
const selectedEntry = ref();
</script>

<script>
export default {
  props: ['entries'],
}
</script>

<template>
  <div class="p-2 items-center justify-center transition-colors duration-200">
    <Splitter style="height: 90vh">
      <SplitterPanel class="flex p-0" :size="33" :minSize="25">
        <Listbox v-model="selectedEntry" :options="entries" optionLabel="request" class="w-full"
                 listStyle="max-height:100%;">
          <template #option="slotProps">
            <CommunicationListEntry :entry="slotProps.option"></CommunicationListEntry>
          </template>
        </Listbox>
      </SplitterPanel>
      <SplitterPanel class="flex p-4" :size="75" v-model="selectedEntry">
        <div class="size-full" v-if="selectedEntry">
          <div class="">
            <div class="text-wrap text-primary">
              <span class="pi pi-globe" style="font-size: 1rem"></span>
              <span class="mx-2 text-lg">{{ selectedEntry.request.url }}</span>
            </div>
            <div class="text-wrap font-light my-2">
              <HttpMethod v-model:method="selectedEntry.request.method" v-model:status="selectedEntry.response.status"/>
              <HttpStatus v-model:status="selectedEntry.response.status"/>
              <Tag class="me-1" :value="selectedEntry.request.httpVersion" severity="info"/>
              <SecureHttp :url="selectedEntry.request.url"/>
              <TotalBodySize v-model:entry="selectedEntry"/>
              <Tag class="me-1" icon="pi pi-stopwatch" :value="selectedEntry.time+' ms'" severity="secondary"/>
            </div>
            <div class="mt-3 mb-0 text-muted-color" v-if="selectedEntry.request._communication">
              <CommunicationLine v-model:entry="selectedEntry.request"/>
            </div>
          </div>
          <Tabs value="0" class="">
            <TabList>
              <Tab value="0">General</Tab>
              <Tab value="1">Request</Tab>
              <Tab value="2">Response</Tab>
              <Tab value="3" v-if="selectedEntry._ogreCrumbs">Data identification</Tab>
            </TabList>
            <TabPanels class="">
              <TabPanel value="0">
                <div class="m-0">
                  <GeneralInfo v-model:entry="selectedEntry"/>
                </div>
              </TabPanel>
              <TabPanel value="1">
                <div class="m-0">
                  <RequestResponse
                    v-model:entry="selectedEntry.request"
                    v-model:body="selectedEntry.request.postData" class=""></RequestResponse>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div class="m-0">
                  <RequestResponse
                    v-model:entry="selectedEntry.response"
                    v-model:body="selectedEntry.response.content" class=""></RequestResponse>
                </div>
              </TabPanel>
              <TabPanel value="3" v-if="selectedEntry._ogreCrumbs">
                <div class="m-0">
                  <Detection
                    v-model:ogre="selectedEntry._ogreCrumbs"
                    class=""></Detection>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </SplitterPanel>
    </Splitter>
  </div>
</template>