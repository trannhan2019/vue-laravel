<script setup>
import { ref, onMounted } from "vue";

const input = ref(null);
onMounted(() => {
  input.value.focus();
});
</script>
<template>
  <div>
    <input ref="input" />
    <div>{{ input }}</div>
  </div>
</template>
