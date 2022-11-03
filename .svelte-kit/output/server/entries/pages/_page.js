import { e as error } from "../../chunks/index2.js";
const prerender = true;
async function load({ fetch }) {
  const url = "/api/newsletter.json";
  const res = await fetch(url);
  if (res.ok) {
    const courses = await res.json();
    return {
      courses
    };
  }
  throw error(500, `Could not load ${url}`);
}
export {
  load,
  prerender
};
