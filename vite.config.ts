import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import mkcert from 'vite-plugin-mkcert';
import react from '@vitejs/plugin-react';


export default () => {
  return defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/pdd-web/' : '/',
    plugins: [
      react(),
      tsconfigPaths(),
      mkcert(),
    ],
  });
};
