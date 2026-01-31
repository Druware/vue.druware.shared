import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Oruga from "@oruga-ui/oruga-next";
import { bulmaConfig } from "@oruga-ui/theme-bulma";

const app = createApp(App)

app.use(router)
  .use(Oruga, bulmaConfig)
  .mixin({
    methods: {
      showMessage: function (msg, type = "warning") {
        this.$oruga.notification.open({
          duration: 5000,
          message: msg,
          position: "bottom",
          variant: type,
        });
      },
      formatDate(str) {
        var d = new Date(str);
        return (
          d.toLocaleDateString("en-US")
        );
      },
      formatDateTime(str) {
        var d = new Date(str);
        return (
          d.toLocaleDateString("en-US") + "  " + d.toLocaleTimeString("en-US")
        );
      },
    },
  });

app.mount('#app')
