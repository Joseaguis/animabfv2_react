import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import commonjs from "vite-plugin-commonjs";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { execSync } from 'child_process';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    tailwindcss(),
    commonjs({
      dynamic: {
        loose: true,
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: "static/*",
          dest: "",
        },
      ],
    }),
    {
      name: 'run-sync-after-build',
      closeBundle: () => {
        if (process.env.NODE_ENV === 'production') {
          try {
            console.log('Ejecutando npm run sync...');
            execSync('npm run sync', { stdio: 'inherit' });
          } catch (error) {
            console.error('Error al ejecutar npm run sync:', error);
          }
        }
      }
    }
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/animabfv2.ts"),
      },
      output: {
        entryFileNames: "bundle.js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
