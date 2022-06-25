require("./bootstrap");
import { createApp } from "vue";
import { createPinia } from "pinia";
import {
    message,
    Row,
    Col,
    Form,
    FormItem,
    Button,
    Input,
    Layout,
    LayoutHeader,
    LayoutContent,
    LayoutSider,
    Menu,
    MenuItem,
    Dropdown,
    Badge,
    Avatar,
    Table,
} from "ant-design-vue";

import App from "./App.vue";
import router from "./router";
import { useAuth } from "./stores/auth";

import "ant-design-vue/dist/antd.css";

(async () => {
    const store = createPinia();
    const app = createApp(App);

    app.use(store);

    const authStore = useAuth();
    await authStore.getUser();

    app.use(router);
    app.use(Row);
    app.use(Col);
    app.use(Form);
    app.use(FormItem);
    app.use(Input);
    app.use(Button);
    app.use(Layout);
    app.use(LayoutHeader);
    app.use(LayoutSider);
    app.use(LayoutContent);
    app.use(Menu);
    app.use(MenuItem);
    app.use(Dropdown);
    app.use(Badge);
    app.use(Avatar);
    app.use(Table);

    app.mount("#app");
    app.config.globalProperties.$message = message;
})();
