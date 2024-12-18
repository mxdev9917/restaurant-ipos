import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // เพิ่มขีดจำกัดคำเตือน (1000KB)
    rollupOptions: {
      output: {
        manualChunks(id) {
          // แยก node_modules (vendor code) ไปเป็น chunk แยก
          // if (id.includes('node_modules')) {
          //   return 'vendor'; // ทุกๆ module ใน node_modules จะไปอยู่ใน "vendor" chunk
          // }

          // // ตัวอย่าง: แยกไลบรารีใหญ่ๆ ไปเป็น chunk แยก
          // if (id.includes('react-router-dom')) {
          //   return 'react-router';
          // }

          // if (id.includes('lodash')) {
          //   return 'lodash';
          // }

          // สามารถเพิ่มเงื่อนไขอื่นๆ สำหรับไลบรารีที่ใหญ่ๆ
        },
      },
    },
  },
  plugins: [react()],
});
