import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import commonjs from "vite-plugin-commonjs";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

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
