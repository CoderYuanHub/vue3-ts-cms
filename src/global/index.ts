import { App } from "vue";
import { registerProperties } from "./register-properties";

export default function globalProperties(app: App): void {
  app.use(registerProperties);
}
