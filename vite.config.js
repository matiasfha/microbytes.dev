// vite.config.js
import path from 'path'
import { sveltekit } from '@sveltejs/kit/vite';

export default {
  plugins: [ sveltekit() ],
            resolve: {
                alias: {
                    '$components': path.resolve('./src/components'),
                    '$api': path.resolve('./src/api'),
                    '$images': path.resolve('./src/images'),
                    '$utils': path.resolve('./src/lib/utils')
                }
            },
};