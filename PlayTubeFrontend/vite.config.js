import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://playtube-wyh6.onrender.com/api/v1",
    //  "/api": "http://localhost:9000/api/v1",
    },
  },
});

