import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    css: {
        postcss: path.resolve('./postcss.config.cjs'),
    },
    server: {
        port: 5173,
        proxy: { '/api': 'http://localhost:3000' },
    },
});
