import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import config from "./public/config.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __CONFIG__: JSON.stringify(config),
  },
});
