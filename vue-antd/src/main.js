import { createApp } from "vue";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";
// import CKEditor from "@ckeditor/ckeditor5-vue";
import { useAuth } from "@/stores/auth";

import "ant-design-vue/dist/antd.css";

import App from "./App.vue";
import router from "./router";

(async () => {
  const store = createPinia();
  const app = createApp(App);

  app.use(store);

  const auth = useAuth();
  await auth.getUser();

  app.use(router);
  app.use(Antd);
  app.mount("#app");
})();
