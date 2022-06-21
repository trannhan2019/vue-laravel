<script setup>
//su dung vee=validat composite
import { useForm } from 'vee-validate';
import InputText1 from '../../../components/form/InputText1.vue';
import * as yup from 'yup';
import InputText2 from '../../../components/form/InputText2.vue';

const schema = yup.object({
  tieu_de: yup.string().required().label('Tieu de'),
  mo_ta: yup.string().required().label('Mo ta'),
});

useForm({
  validationSchema: schema,
});

const onSubmit = (values) => {
  console.log('Success:', values);
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <InputText1 name="tieu_de" label="Tieu de" />
    <InputText2 name="mo_ta" label="Mo ta" />
    <a-form-item>
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </form>
</template>
