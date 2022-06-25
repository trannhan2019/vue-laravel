<script setup>
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DownOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../stores/auth";

const router = useRouter();
const auth = useAuth();

const selectedKeys = ref(["1"]);
const collapsed = ref(false);

const logout = async () => {
    await auth.logout();
    router.replace({
        name: "login",
    });
};
</script>

<template>
    <a-layout>
        <a-layout-sider
            v-model:collapsed="collapsed"
            :trigger="null"
            collapsible
        >
            <div class="logo">
                <h3>LOGO</h3>
            </div>
            <a-menu
                v-model:selectedKeys="selectedKeys"
                theme="dark"
                mode="inline"
            >
                <router-link :to="{ name: 'admin-products' }">
                    <a-menu-item key="1">
                        <user-outlined />
                        <span>Product</span>
                    </a-menu-item>
                </router-link>
                <router-link :to="{ name: 'admin-users' }">
                    <a-menu-item key="2">
                        <video-camera-outlined />
                        <span>User</span>
                    </a-menu-item>
                </router-link>
                <a-menu-item key="3">
                    <upload-outlined />
                    <span>nav 3</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <menu-unfold-outlined
                    v-if="collapsed"
                    class="trigger"
                    @click="() => (collapsed = !collapsed)"
                />
                <menu-fold-outlined
                    v-else
                    class="trigger"
                    @click="() => (collapsed = !collapsed)"
                />

                <a-dropdown style="margin-left: 24px">
                    <a class="ant-dropdown-link" @click.prevent>
                        <span>
                            <a-badge :count="1">
                                <a-avatar shape="circle">
                                    <template #icon><UserOutlined /></template>
                                </a-avatar>
                            </a-badge>
                        </span>
                        <DownOutlined />
                    </a>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item key="0">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.alipay.com/"
                                >
                                    1st menu item
                                </a>
                            </a-menu-item>
                            <a-menu-item key="1" @click="logout">
                                Logout
                            </a-menu-item>
                            <a-menu-divider />
                            <a-menu-item key="3" disabled
                                >3rd menu item（disabled）</a-menu-item
                            >
                        </a-menu>
                    </template>
                </a-dropdown>
            </a-layout-header>
            <a-layout-content
                :style="{
                    margin: '24px 16px',
                    padding: '24px',
                    background: '#fff',
                    minHeight: '280px',
                }"
            >
                <router-view />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<style scoped>
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.logo h3 {
    color: white;
    margin: 0;
}
</style>
