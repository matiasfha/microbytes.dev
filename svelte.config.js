import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel'
import path from 'path'
/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [
        ".svelte",
    ],

    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [preprocess({
        "postcss": true
    })],

    kit: {
        adapter: adapter(),
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        vite: {
            resolve: {
                alias: {
                    '$components': path.resolve('./src/components'),
                    '$api': path.resolve('./src/api'),
                    '$images': path.resolve('./src/images'),
                    '$utils': path.resolve('./src/lib/utils')
                }
            },

        }
    },

};

export default config;
