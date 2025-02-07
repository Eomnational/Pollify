import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
// import viteESLintPlugin from 'vite-plugin-eslint'
import { viteMockServe } from "vite-plugin-mock";
export default defineConfig({
  plugins: [
      react(),
      // viteESLintPlugin({
      //     // 开发阶段因为 ESLint 的错误, 不再会打断开发
      //     failOnError: false
      //   }),
       viteMockServe({
         mockPath: 'mock',
         enable: true,

        //  prodEnabled: false,
       }),
    ],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".css"], // 确保包含 .css
  },
})



