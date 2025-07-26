import { defineConfig } from 'tsup'
import { copyFile } from 'fs/promises'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
  minify: false,
  outDir: 'dist',
  onSuccess: async () => {
    // Copy CSS files to dist
    try {
      await copyFile('src/styles/theme.css', 'dist/theme.css')
      console.log('✅ CSS files copied to dist!')
    } catch (error) {
      console.error('❌ Failed to copy CSS files:', error)
    }
  },
}) 