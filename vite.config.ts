
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'process';

export default defineConfig(({ mode }) => {
  // 全ての環境変数を読み込みます
  const env = loadEnv(mode, process.cwd(), '');
  
  // 優先順位: 1. GEMINI_API_KEY (お客様の設定) 2. API_KEY 3. VITE_API_KEY
  const apiKey = env.GEMINI_API_KEY || env.API_KEY || env.VITE_API_KEY || process.env.API_KEY || '';

  return {
    plugins: [react()],
    define: {
      // ビルド時にコード内の process.env.API_KEY を実際のキー文字列に置換します
      'process.env.API_KEY': JSON.stringify(apiKey)
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          entryFileNames: `assets/index.js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`
        }
      }
    }
  };
});
