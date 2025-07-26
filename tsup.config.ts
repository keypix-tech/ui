import { defineConfig } from 'tsup'
import { copyFile, mkdir } from 'fs/promises'
import { glob } from 'glob'
import { dirname } from 'path'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
  target: 'node16',
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    options.define = {
      'process.env.NODE_ENV': '"production"'
    }
  },
  onSuccess: async () => {
    console.log('✅ CSS files copied to dist!')
    
    // Copy CSS files
    try {
      const cssFiles = await glob('src/**/*.css')
      for (const file of cssFiles) {
        const dest = file.replace('src/', 'dist/')
        await mkdir(dirname(dest), { recursive: true })
        await copyFile(file, dest)
      }
    } catch (error) {
      console.error('Error copying CSS files:', error)
    }
  }
}) 