<script setup>
import { Field, Form } from "vee-validate";
import { useRouter } from "vue-router";
import * as yup from "yup";
import { addProduct } from "@/api/productsApi.js";

const router = useRouter();
const handleBack = () => {
    router.go(-1)
}

const schema = yup.object({
    tieu_de: yup.string().required().label("Tiêu đề"),
    mo_ta: yup.string().required().label("Mô tả"),
});

const onSubmit = async (values) => {
    const res = await addProduct(values);
    console.log("Success:", values, res);
    // router.push({
    //     name: 'admin-products'
    // })
};

</script>
<template>
    <a-row type="flex" justify="center" align="middle">
        <a-col :span="12">
            <Form :validation-schema="schema" @submit="onSubmit">
                <Field name="tieu_de" v-slot="{ value, handleChange, errorMessage }">
                    <a-form-item label="Tiêu đề" :has-feedback="!!errorMessage" :help="errorMessage"
                        :validate-status="errorMessage ? 'error' : undefined">
                        <a-input :value="value" @update:value="handleChange" />
                    </a-form-item>
                </Field>

                <Field name="mo_ta" v-slot="{ value, handleChange, errorMessage }">
                    <a-form-item label="Mô tả" :has-feedback="!!errorMessage" :help="errorMessage"
                        :validate-status="errorMessage ? 'error' : undefined">
                        <a-input :value="value" @update:value="handleChange" />
                    </a-form-item>
                </Field>

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
