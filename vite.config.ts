import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/awesome-jev-projects/",
  plugins: [react(), tailwindcss(), {
    name: "dev-theme-initializer",
    apply: "serve",
    transformIndexHtml: {
      order: "post",
      handler: () => [{ tag: "script", attrs: { src: "/awesome-jev-projects/theme-init.js" }, injectTo: "head-prepend" }],
    },
  }],
});
