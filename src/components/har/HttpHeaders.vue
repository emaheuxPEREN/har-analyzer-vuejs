<script>
export default {
  props: ['entry']
}
</script>

<template>
  <ul class="list-none">
    <li class="" v-for="st in entry.headers">
      <span class="font-bold text-muted-color">{{ st.name }}</span>:
      <span class="">{{ st.value }}</span>
    </li>
  </ul>
</template>

<style scoped>

</style>