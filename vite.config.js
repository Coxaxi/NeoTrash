import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/NeoTrash/',  // Substitua por '/nome-do-seu-repo/' (com a barra no final). Se for o repo root, use '/'.
});