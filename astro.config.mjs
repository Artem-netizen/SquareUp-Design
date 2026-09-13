import { defineConfig } from 'astro/config';
import { fileURLToPath } from "url";
import icon from "astro-icon";
import path from 'path';

// Получаем путь к корню проекта
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, './src/assets'),
        '@styles': path.resolve(__dirname, './src/assets/styles'),
        '@fonts': path.resolve(__dirname, './src/assets/fonts'),
        '@components': path.resolve(__dirname, './src/components'),
        '@config': path.resolve(__dirname, './src/config'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@data': path.resolve(__dirname, './src/data'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@types': path.resolve(__dirname, './src/types'),
        '@features': path.resolve(__dirname, './src/features'),
        '@js': path.resolve(__dirname, './src/js'),
        '@icons': path.resolve(__dirname, './src/icons'),
        '@screens': path.resolve(__dirname, './src/screens'),
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "legacy",
          includePaths: [path.resolve(__dirname, 'src')],
        }
      }
    }
  },
  devToolbar: {
    enabled: false
  },
  experimental: {
    svg: true,
  },
  integrations: [icon({
    iconDir: "src/icons",
  })],
});
