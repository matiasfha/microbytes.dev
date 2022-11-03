import { c as create_ssr_component, b as add_attribute } from "../../../chunks/index.js";
import { m as microbytes } from "../../../chunks/microbytes.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"mt-24"}"><img alt="${"illustration for React Desde Cero"}"${add_attribute("src", microbytes, 0)} decoding="${"async"}" class="${"object-contain mx-auto"}">
	<div class="${"p-2 md:p-12 relative flex flex-col items-center justify-center dark:text-white text-ebony-clay-800 overflow-hidden rounded-lg shadow-sm focus:outline-none transition hover:ring-2 ring-yellow-50 ring-offset-2"}"><h1 class="${"lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold dark:text-white text-gray-800 leading-tight text-center"}">Muchas gracias por unirte al newsletter!
		</h1>

		<div class="${"font-body text-left pt-8"}"><p>Gracias por ser partte de mi newsletter. 
                Recibir\xE1s un email para confirmar tu suscripci\xF3n, luego de eso comenzar\xE1s a recibir periodicamente (NO SPAM lo prometo) correos con comentarios sobre desarrollo web, noticias e informaci\xF3n sobre contenido creado por mi.

            
			</p></div></div></section>`;
});
export {
  Page as default
};
