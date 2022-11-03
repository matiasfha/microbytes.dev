export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","icons/icon-144x144.png","icons/icon-192x192.png","icons/icon-256x256.png","icons/icon-384x384.png","icons/icon-48x48.png","icons/icon-512x512.png","icons/icon-72x72.png","icons/icon-96x96.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-15f9430c.js","imports":["_app/immutable/start-15f9430c.js","_app/immutable/chunks/index-5434af0f.js","_app/immutable/chunks/singletons-8e021608.js","_app/immutable/chunks/index-eb0cd572.js","_app/immutable/chunks/control-03be33ef.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/newsletter.json",
				pattern: /^\/api\/newsletter\.json$/,
				names: [],
				types: [],
				optional: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/newsletter.json/_server.ts.js')
			},
			{
				id: "/success",
				pattern: /^\/success\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
