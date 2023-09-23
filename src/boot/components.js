import { boot } from "quasar/wrappers";
import VueCountdown from "@chenfengyuan/vue-countdown";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app, router }) => {
  app.component("vue-countdown", VueCountdown);

  // Watch for clicks outside the component or element
});
