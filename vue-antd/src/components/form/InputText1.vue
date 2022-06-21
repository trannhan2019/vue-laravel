<script setup>
import { Field } from 'vee-validate';

defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <Field :name="name" v-slot="{ value, handleChange, errorMessage }">
    <a-form-item
      :label="label"
      :has-feedback="!!errorMessage"
      :help="errorMessage"
      :validate-status="errorMessage ? 'error' : undefined"
    >
      <a-input :value="value" @update:value="handleChange" />
    </a-form-item>
  </Field>
</template>
