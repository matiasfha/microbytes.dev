import { sveltekit } from '@sveltejs/kit/vite';
import path from 'node:path'


/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'$components': path.resolve('./src/components'),
                    '$api': path.resolve('./src/api'),
                    '$images': path.resolve('./src/images'),
                    '$utils': path.resolve('./src/lib/utils')
		}
	},
	
};

export default config;