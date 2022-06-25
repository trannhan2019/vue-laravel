<script setup>
import { UserAddOutlined } from "@ant-design/icons-vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { getAll } from "../../../services/productService";

const columns = [
    {
        title: "ID",
        dataIndex: "id",
        width: 100,
    },
    {
        title: "Tiêu đề",
        dataIndex: "tieu_de",
        width: 250,
    },
    {
        title: "Mô tả",
        dataIndex: "mo_ta",
        width: 450,
    },
];

const data = ref([]);
const loading = ref(true);
const router = useRouter();

const showAddProduct = () => {
    router.push({
        name: "admin-productsAdd",
    });
};

onMounted(async () => {
    const response = await getAll();
    data.value = response.data.data;
    loading.value = false;
});
</script>

<template>
    <a-row>
        <a-col style="margin: 10px">
            <a-button type="primary" @click="showAddProduct">
                <template #icon>
                    <UserAddOutlined />
                </template>
                New Product
            </a-button>
        </a-col>
        <a-col :span="24">
            <div v-if="loading">Loading ...</div>
            <a-table v-else :columns="columns" :data-source="data" />
        </a-col>
    </a-row>
</template>
