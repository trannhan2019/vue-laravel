<script setup>
// su dung vee-validat component
import { Field, Form } from 'vee-validate';
import { useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
import * as yup from 'yup';
import { addProduct } from '@/api/productsApi.js';
import InputText2 from '@/components/form/InputText2.vue';

const router = useRouter();
const handleBack = () => {
  router.go(-1);
};

const schema = yup.object({
  tieu_de: yup.string().required().label('Tiêu đề'),
  mo_ta: yup.string().required().label('Mô tả'),
});

const onSubmit = async (values, actions) => {
  try {
    const res = await addProduct(values);
    console.log('Success:', values, res);
    router.push({
      name: 'admin-products',
    });
  } catch (error) {
    if (error.response.status === 422) {
      actions.setErrors(error.response.data.errors);
    }
    console.log(error.response);
  }
};
</script>
<template>
  <a-row type="flex" justify="center" align="middle">
    <a-col :span="12">
      <Form :validation-schema="schema" @submit="onSubmit">
        <InputText2 name="tieu_de" label="Tieu de" />
        <InputText2 name="mo_ta" label="Mo ta" />

        <a-form-item>
          <a-button type="primary" html-type="submit"
            >Submit</a-button
          >
        </a-form-item>
        <a-form-item>
          <a-button @click="handleBack">Back</a-button>
        </a-form-item>
      </Form>
    </a-col>
  </a-row>
</template>
