import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/awesome-jev-projects/",
  // Keep fonts as same-origin files so strict font-src never needs data: URLs.
  build: { assetsInlineLimit: 0 },
  plugins: [react(), tailwindcss(), {
    name: "dev-theme-initializer",
    apply: "serve",
    transformIndexHtml: {
      order: "post",
      handler: () => [{ tag: "script", attrs: { src: "/awesome-jev-projects/theme-init.js" }, injectTo: "head-prepend" }],
    },
  }],
});
