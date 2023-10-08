import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  // 配置scss全局变量
  css: {
    preprocessorOptions: {
      // 全局样式引入
      scss: {
        // 文件路径，注意最后需要添加 ';'
        additionalData: '@import "@/assets/style/variable.scss";',
        javascriptEnabled: true
      }
    }
  }
});
