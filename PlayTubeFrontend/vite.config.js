import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the `mode`
  const env = loadEnv(mode, process.cwd(), '');

  // Check if VITE_BASE_URI exists
  if (!env.VITE_BASE_URI) {
    throw new Error('VITE_BASE_URI is not defined. Please check your .env file.');
  }

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_BASE_URI,  // Use the loaded environment variable
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
