import { error } from '@sveltejs/kit';

export const prerender = true;
export async function load({ fetch }) {
	const url = "/api/newsletter.json";
	const res = await fetch(url);
	if (res.ok) {
		const courses = await res.json();

		return {
			courses,
		};
	}

	throw error(500, `Could not load ${url}`);
}
