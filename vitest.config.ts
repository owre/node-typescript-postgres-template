import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

/**
 * Refer to the documentation for more information:
 * https://vitest.dev/config/
 */
export default defineConfig({
  plugins: [tsconfigPaths()],
})
