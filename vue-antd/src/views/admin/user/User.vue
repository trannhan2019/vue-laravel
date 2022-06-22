<script setup>
import { onMounted, ref } from "vue";
import { getAll } from "@/api/usersApi.js";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    width: 100,
  },
  {
    title: "Full name",
    dataIndex: "name",
    width: 250,
  },
  {
    title: "Email",
    dataIndex: "email",
    width: 450,
  },
];

const data = ref([]);
const loading = ref(true);

onMounted(async () => {
  const response = await getAll();
  data.value = response.data.data;
  loading.value = false;
});
</script>

<template>
  <a-row>
    <a-col :span="24">
      <div v-if="loading">Loading ...</div>
      <a-table v-else :columns="columns" :data-source="data" />
    </a-col>
  </a-row>
</template>
