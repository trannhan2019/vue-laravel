<script setup>
import { useField } from 'vee-validate';
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
const { errorMessage, value } = useField(props.name);
</script>

<template>
  <a-form-item
    :label="label"
    :has-feedback="!!errorMessage"
    :help="errorMessage"
    :validate-status="errorMessage ? 'error' : undefined"
  >
    <a-input v-model:value="value" />
  </a-form-item>
</template>
