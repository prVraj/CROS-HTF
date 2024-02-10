import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Custom plugin to handle .node files
const nodeFilePlugin = {
  name: 'node-file',
  resolveId(source) {
    if (source.endsWith('.node')) {
      return source;
    }
  },
  load(id) {
    if (id.endsWith('.node')) {
      return `export default '${id}'`;
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    nodeFilePlugin
  ],
  optimizeDeps: {
    exclude: ['@swc/core-win32-x64-msvc']
  }
})