<script setup>
import { Form } from "vee-validate";
import { useRouter } from "vue-router";
import * as yup from "yup";
import { useAuth } from "@/stores/auth";

import InputText2 from "@/components/form/InputText2.vue";

const router = useRouter();
const store = useAuth();

const schema = yup.object({
  name: yup.string().required().label("Ten"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Mat khau"),
  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Your passwords do not match.")
    .label("Nhap lai mat khau"),
});

const onSubmit = async (values, actions) => {
  try {
    await store.register(values);
    console.log("Success:", values);
    router.replace({
      name: "admin-layout",
    });
  } catch (error) {
    if (error.response.status === 422) {
      actions.setErrors(error.response.data.errors);
    }
    console.log(error.response);
  }
};
const handleBack = () => {
  router.go(-1);
};
</script>

<template>
  <a-row
    type="flex"
    justify="center"
    align="middle"
    style="
       {
        margintop: 10px;
      }
    "
  >
    <a-col :xs="24" :md="12" :lg="8">
      <Form :validation-schema="schema" @submit="onSubmit">
        <InputText2 name="name" label="Ho va ten" type="text" />
        <InputText2 name="email" label="Email" type="email" />
        <InputText2 name="password" label="Password" type="password" />
        <InputText2
          name="password_confirmation"
          label="Re Password"
          type="password"
        />
        <a-form-item>
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
        <a-form-item>
          <a-button @click="handleBack">Back</a-button>
        </a-form-item>
      </Form>
    </a-col>
  </a-row>
</template>
