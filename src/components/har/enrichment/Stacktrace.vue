<script>
export default {
  props: ['entry']
}
</script>

<template>
  <div class="my-2">
    <ul class="list-none">
      <li class="">
        <span class="font-bold text-muted-color">Process: </span>
        <span class="">{{ entry._stacktrace.process }}</span>
      </li>
      <li class="">
        <span class="font-bold text-muted-color">PID: </span>
        <span class="">{{ entry._stacktrace.pid }}</span>
      </li>
    </ul>
  </div>
  <div class="h-[38rem] overflow-auto">
    <ul class="list-none ps-2 text-sm">
      <li class="" v-for="st in entry._stacktrace.stack">
        <span class="pi pi-microchip text-primary" v-if="st.isNative"></span>
        <span class="pi pi-code text-primary" v-else></span>
        <span class="font-mono mx-1 text-muted-color">{{ st.str }}</span>
      </li>
    </ul>
  </div>
</template>