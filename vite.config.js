import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/vdk/',
  server: { host: true, allowedHosts: true },
  preview: { host: true, allowedHosts: true },
});
