import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite reads this file to know how to build/serve the project.
// The React plugin gives us JSX support and fast refresh during development.
export default defineConfig({
  plugins: [react()],
});
