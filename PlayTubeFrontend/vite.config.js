import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode
  const env = loadEnv(mode, '.', '');  // '.' replaces process.cwd()

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_BASE_URI // Use the loaded environment variable
        },
      },
    },
  };
});
