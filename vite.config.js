import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  define: {
    // Garantir que as variáveis de ambiente sejam disponíveis
    'import.meta.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY),
    'import.meta.env.VITE_AUTH_DOMAIN': JSON.stringify(process.env.VITE_AUTH_DOMAIN),
    'import.meta.env.VITE_DATABASE_URL': JSON.stringify(process.env.VITE_DATABASE_URL),
    'import.meta.env.VITE_PROJECT_ID': JSON.stringify(process.env.VITE_PROJECT_ID),
    'import.meta.env.VITE_STORAGE_BUCKET': JSON.stringify(process.env.VITE_STORAGE_BUCKET),
    'import.meta.env.VITE_MESSAGING_SENDER_ID': JSON.stringify(process.env.VITE_MESSAGING_SENDER_ID),
    'import.meta.env.VITE_APP_ID': JSON.stringify(process.env.VITE_APP_ID),
  }
});
