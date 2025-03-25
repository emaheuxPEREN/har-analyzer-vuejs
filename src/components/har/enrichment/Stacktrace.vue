<script>
import CopyBtn from "@/components/har/generic/CopyBtn.vue";

export default {
  components: {CopyBtn},
  props: ['entry']
}
</script>

<template>
  <div class="my-2">
    <ul class="list-unstyled">
      <li class="">
        <span class="fw-bold text-unmuted">Process: </span>
        <CopyBtn><span class="font-monospace">{{ entry._stacktrace.process }}</span></CopyBtn>
      </li>
      <li class="">
        <span class="fw-bold text-unmuted">PID: </span>
        <CopyBtn><span class="">{{ entry._stacktrace.pid }}</span></CopyBtn>
      </li>
    </ul>
  </div>
  <div>
    <ul class="list-unstyled">
      <li class="" v-for="st in entry._stacktrace.stack">
        <span class="pi pi-microchip text-primary" v-if="st.isNative"></span>
        <span class="pi pi-code text-primary" v-else></span>
        <span class="font-monospace mx-1 text-unmuted">{{ st.str }}</span>
      </li>
    </ul>
  </div>
</template>