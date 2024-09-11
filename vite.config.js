import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/my_portfolio/', // base set to root to support custom domain.
	plugins: [vue()],
	resolve: {
		alias: {
		'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
