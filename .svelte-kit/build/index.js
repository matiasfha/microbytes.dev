
import root from '__GENERATED__/root.svelte';
import { respond } from '../../node_modules/.pnpm/@sveltejs+kit@1.0.0-next.532_svelte@3.52.0+vite@3.2.2/node_modules/@sveltejs/kit/src/runtime/server/index.js';
import { set_paths, assets, base } from '../../node_modules/.pnpm/@sveltejs+kit@1.0.0-next.532_svelte@3.52.0+vite@3.2.2/node_modules/@sveltejs/kit/src/runtime/paths.js';
import { set_prerendering } from '../../node_modules/.pnpm/@sveltejs+kit@1.0.0-next.532_svelte@3.52.0+vite@3.2.2/node_modules/@sveltejs/kit/src/runtime/env.js';
import { set_private_env } from '../../node_modules/.pnpm/@sveltejs+kit@1.0.0-next.532_svelte@3.52.0+vite@3.2.2/node_modules/@sveltejs/kit/src/runtime/env-private.js';
import { set_public_env } from '../../node_modules/.pnpm/@sveltejs+kit@1.0.0-next.532_svelte@3.52.0+vite@3.2.2/node_modules/@sveltejs/kit/src/runtime/env-public.js';

const app_template = ({ head, body, assets, nonce }) => "<!DOCTYPE html>\n<html lang=\"es\" class=\"dark transition-all duration-700\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t\n\t\t<script defer data-domain=\"microbytes.dev\" src=\"https://plausible.io/js/plausible.js\"></script>\n\n\n\t\t" + head + "\n\t\t<script>\n\t\t\tlet theme = 'dark';\n\t\t\tif (!('theme' in localStorage)) {\n\t\t\t\tif (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n\t\t\t\t\tdocument.documentElement.classList.add(theme);\n\t\t\t\t} else {\n\t\t\t\t\tdocument.documentElement.classList.remove('dark');\n\t\t\t\t\ttheme = 'light';\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tlet data = localStorage.getItem('theme');\n\t\t\t\tif (data) {\n\t\t\t\t\ttheme = JSON.parse(data).theme;\n\t\t\t\t\tif(theme === 'light'){\n\t\t\t\t\t\tdocument.documentElement.classList.remove('dark');\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t}\n\t\t\t}\n\t\t\tlocalStorage.setItem('theme',JSON.stringify({ theme}));\n\t\t</script>\n\t\t<script>\n\t\t\t(function (m, a, i, l, e, r) {\n\t\t\t\tm['MailerLiteObject'] = e;\n\t\t\t\tfunction f() {\n\t\t\t\t\tvar c = { a: arguments, q: [] };\n\t\t\t\t\tvar r = this.push(c);\n\t\t\t\t\treturn 'number' != typeof r ? r : f.bind(c.q);\n\t\t\t\t}\n\t\t\t\tf.q = f.q || [];\n\t\t\t\tm[e] = m[e] || f.bind(f.q);\n\t\t\t\tm[e].q = m[e].q || f.q;\n\t\t\t\tr = a.createElement(i);\n\t\t\t\tvar _ = a.getElementsByTagName(i)[0];\n\t\t\t\tr.async = 1;\n\t\t\t\tr.src = l + '?v' + ~~(new Date().getTime() / 1000000);\n\t\t\t\t_.parentNode.insertBefore(r, _);\n\t\t\t})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');\n\t\n\t\t\tvar ml_account = ml('accounts', '3081949', 'x4j7h5e8a3', 'load');\n\t\t</script>\n\t</head>\n\t<body class=\"dark:bg-ebony-clay-600 bg-gray-100 transition-all duration-700\">\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

const error_template = ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid #ccc;\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n";

let read = null;

set_paths({"base":"","assets":""});

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_prerendering(settings.prerendering);
	read = settings.read;
}

export class Server {
	constructor(manifest) {
		this.options = {
			csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
			csrf: {
				check_origin: true,
			},
			dev: false,
			handle_error: (error, event) => {
				return this.options.hooks.handleError({
					error,
					event,

					// TODO remove for 1.0
					// @ts-expect-error
					get request() {
						throw new Error('request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details');
					}
				}) ?? { message: event.routeId != null ? 'Internal Error' : 'Not Found' };
			},
			hooks: null,
			manifest,
			paths: { base, assets },
			public_env: {},
			read,
			root,
			service_worker: false,
			app_template,
			app_template_contains_nonce: false,
			error_template,
			trailing_slash: "never"
		};
	}

	/**
	 * Take care: Some adapters may have to call `Server.init` per-request to set env vars,
	 * so anything that shouldn't be rerun should be wrapped in an `if` block to make sure it hasn't
	 * been done already.
	 */
	async init({ env }) {
		const entries = Object.entries(env);

		const prv = Object.fromEntries(entries.filter(([k]) => !k.startsWith('PUBLIC_')));

		const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith('PUBLIC_')));

		set_private_env(prv);
		set_public_env(pub);

		this.options.public_env = pub;

		if (!this.options.hooks) {
			const module = await import("./hooks.js");

			// TODO remove this for 1.0
			if (module.externalFetch) {
				throw new Error('externalFetch has been removed — use handleFetch instead. See https://github.com/sveltejs/kit/pull/6565 for details');
			}

			this.options.hooks = {
				handle: module.handle || (({ event, resolve }) => resolve(event)),
				handleError: module.handleError || (({ error }) => console.error(error.stack)),
				handleFetch: module.handleFetch || (({ request, fetch }) => fetch(request))
			};
		}
	}

	async respond(request, options = {}) {
		if (!(request instanceof Request)) {
			throw new Error('The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details');
		}

		return respond(request, this.options, options);
	}
}
