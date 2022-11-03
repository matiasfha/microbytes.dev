import { c as create_ssr_component, d as escape, b as add_attribute, v as validate_component } from "../../chunks/index.js";
import { m as microbytes } from "../../chunks/microbytes.js";
import blocksToHtml from "@sanity/block-content-to-html";
function getOgImage({ text, tags }) {
  const imageConfig = [
    "w_1280",
    "h_669",
    "c_fill",
    "q_auto",
    "f_auto"
  ].join(",");
  const titleConfig = [
    "w_760",
    "c_fit",
    "co_rgb:FFFFFF",
    "g_south_west",
    "x_480",
    "y_254",
    `l_text:futura_64:${encodeURIComponent(text)}`
  ].join(",");
  const tagsConfig = [
    "w_760",
    "c_fit",
    "co_rgb:FFFFFF",
    "g_north_west",
    "x_480",
    "y_445",
    `l_text:futura_32:${encodeURIComponent(tags.map((t) => `#${t}`).join(" "))}`
  ].join(",");
  const url = [
    "https://res.cloudinary.com",
    "matiasfha",
    "image",
    "upload",
    imageConfig,
    titleConfig,
    tagsConfig,
    "social-card.jpg"
  ];
  return url.join("/");
}
const Seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description = void 0 } = $$props;
  let { keywords = void 0 } = $$props;
  let { canonical = void 0 } = $$props;
  let { isBlogPost = false } = $$props;
  let slug = "/";
  let siteUrl = "https://matiashernandez.dev";
  const image = getOgImage({
    text: title,
    tags: keywords !== null && keywords !== void 0 ? keywords : []
  });
  if (isBlogPost) {
    slug = title.toLowerCase().split(" ").join("-");
    siteUrl = `https://matiashernandez.dev/blog/post/${slug || ""}`;
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.isBlogPost === void 0 && $$bindings.isBlogPost && isBlogPost !== void 0)
    $$bindings.isBlogPost(isBlogPost);
  return `${$$result.head += `<!-- HEAD_svelte-1vw8wwn_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="${"twitter:creator"}" content="${"https://twitter.com/matiasfha/"}"><meta property="${"og:type"}"${add_attribute("content", isBlogPost ? "article" : "website", 0)}><meta name="${"robots"}" content="${"index, follow"}"><meta name="${"googlebot"}" content="${"index,follow"}"><meta name="${"twitter:site"}"${add_attribute("content", siteUrl, 0)}><meta property="${"og:site_name"}"${add_attribute("content", siteUrl, 0)}>${description ? `<meta name="${"description"}"${add_attribute("content", description, 0)}>
		<meta property="${"og:description"}"${add_attribute("content", description, 0)}>
		<meta name="${"twitter:description"}"${add_attribute("content", description, 0)}>` : ``}${canonical ? `<link rel="${"canonial"}"${add_attribute("href", canonical, 0)}>
		<meta property="${"og:url"}"${add_attribute("content", canonical, 0)}>` : `<meta property="${"og:url"}"${add_attribute("content", siteUrl, 0)}>`}${keywords ? `<meta name="${"keywords"}"${add_attribute("content", keywords.join(", "), 0)}>` : ``}<meta property="${"og:title"}"${add_attribute("content", title, 0)}><meta property="${"og:image"}"${add_attribute("content", image, 0)}><meta property="${"og:image:alt"}"${add_attribute("content", title, 0)}><meta name="${"twitter:card"}" content="${"summary_large_image"}"><meta name="${"twitter:title"}"${add_attribute("content", title, 0)}><meta name="${"twitter:image"}"${add_attribute("content", image, 0)}><!-- HEAD_svelte-1vw8wwn_END -->`, ""}`;
});
const CourseCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { logo } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  let { formId } = $$props;
  let { codeId } = $$props;
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.formId === void 0 && $$bindings.formId && formId !== void 0)
    $$bindings.formId(formId);
  if ($$props.codeId === void 0 && $$bindings.codeId && codeId !== void 0)
    $$bindings.codeId(codeId);
  return `<div class="${"relative pt-12 w-full h-full"}"><img class="${"w-auto h-24 object-contain absolute left-4 top-10 z-10"}" alt="${"Illustration of a course Logo"}"${add_attribute("src", logo, 0)}>

	<div class="${"px-4 py-12 md:p-12 mt-14 md:mt-12 relative flex items-center justify-center bg-white dark:text-white text-ebony-clay-800 overflow-hidden rounded-lg shadow-sm dark:bg-gray-800 focus:outline-none transition hover:ring-2 ring-yellow-50 ring-offset-2"}"><div class="${"flex flex-col lg:items-start items-start md:items-center w-full"}"><h2 class="${"lg:text-3xl md:text-2xl text-xl font-extrabold dark:text-white text-gray-800 leading-tight text-left"}">${escape(title)}</h2>

			<div class="${"max-w-screen-md font-body text-left pt-8 prose dark:text-gray-300 text-ebony-clay-800"}"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></div>

			<div class="${"w-full flex flex-col md:flex-row mt-12 gap-4 md:gap-16"}"><button${add_attribute(
    "class",
    `w-full h-14 
        bg-ebony-clay-600 
        dark:bg-gray-200 
        border-ebony-clay-600 
        dark:border-gray-200 
        text-gray-300 dark:text-ebony-clay-600
        relative inline-flex items-center justify-center p-4 px-8s py-3 overflow-hidden font-medium
        transition duration-300 ease-out border-2 
        rounded-full shadow-md group`,
    0
  )}><span${add_attribute(
    "class",
    `absolute inset-0 flex items-center justify-center w-full h-full
          duration-300 -translate-x-full
           group-hover:translate-x-0 ease
           dark:text-white text-ebony-clay-600
          dark:bg-ebony-clay-600 bg-gray-200`,
    0
  )}><svg class="${"w-8 h-6"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M14 5l7 7m0 0l-7 7m7-7H3"}"></path></svg></span>
					<span${add_attribute(
    "class",
    `absolute flex items-center justify-center w-full h-full
         text-gray-100 dark:text-ebony-clay-600  
         transition-all duration-300 transform group-hover:translate-x-full ease`,
    0
  )}>\xDAnete hoy</span>
					<span class="${"relative invisible"}">\xDAnete hoy</span></button></div></div></div></div>`;
});
const me = "/_app/immutable/assets/me-a44d3cf8.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "MicroBytes newsletter por Mat\xEDas Hern\xE1ndez",
      keywords: [
        "newsletter",
        "microbytes",
        "react",
        "javascript",
        "es6",
        "cursos",
        "aprender"
      ]
    },
    {},
    {}
  )}

<section class="${"mt-24"}"><img alt="${"illustration for React Desde Cero"}"${add_attribute("src", microbytes, 0)} decoding="${"async"}" class="${"object-contain mx-auto"}">
	<div class="${"p-2 md:p-12 relative flex flex-col items-center justify-center dark:text-white text-ebony-clay-800 overflow-hidden rounded-lg shadow-sm focus:outline-none transition hover:ring-2 ring-yellow-50 ring-offset-2"}"><h1 class="${"lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold dark:text-white text-gray-800 leading-tight text-center"}">\xBFA\xFAn luchas con Javascript y el desarrollo web?
		</h1>

		<div class="${"font-body text-left pt-8"}"><p>\xDAnete a Micro Bytes un newsletter micro cursos.
				Recibir\xE1s una colecci\xF3n de contenidos para mejorar tu
				conocimiento en desarrollo web y darle un giro a tu carrera,
				directamente en tu correo.
			</p></div>

		<div class="${"font-body text-left pt-8"}"><p>Adem\xE1s, puedes simplemente unirte al newsletter general y mantenerte al d\xEDa con todo el contenido que publico (NO SPAM lo prometo \u{1F64B}): Art\xEDculos, cursos, videos, podcast, etc!
			</p>
			<form class="${"flex flex-row justify-between mx-auto mt-4 p-8 prose prose-lg items-center"}" action="${"https://static.mailerlite.com/webforms/submit/c4r8t8"}" data-code="${"c4r8t8"}" method="${"post"}" target="${"_blank"}"><input type="${"hidden"}" name="${"ml-submit"}" value="${"1"}">
				<input type="${"hidden"}" name="${"anticsrf"}" value="${"true"}">
				<input type="${"text"}" name="${"fields[email]"}" placeholder="${"Tu email"}" class="${"px-4 font-medium rounded-md show-md w-80"}" autocomplete="${"email"}">
				<button type="${"submit"}"${add_attribute(
    "class",
    `h-8 w-52 
        bg-ebony-clay-600 
        dark:bg-gray-200 
        border-ebony-clay-600 
        dark:border-gray-200 
        text-gray-300 dark:text-ebony-clay-600
        relative inline-flex items-center justify-center py-3 overflow-hidden font-medium
        transition duration-300 ease-out border-2 
        rounded-full shadow-md group`,
    0
  )}><span${add_attribute(
    "class",
    `absolute inset-0 flex items-center justify-center w-full h-full
          duration-300 -translate-x-full
           group-hover:translate-x-0 ease
           dark:text-white text-ebony-clay-600
          dark:bg-ebony-clay-600 bg-gray-200`,
    0
  )}><svg class="${"w-8 h-6"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M14 5l7 7m0 0l-7 7m7-7H3"}"></path></svg></span>
					<span${add_attribute(
    "class",
    `absolute flex items-center justify-center w-full h-full
         text-gray-100 dark:text-ebony-clay-600  
         transition-all duration-300 transform group-hover:translate-x-full ease`,
    0
  )}>\xDAnete hoy</span>
					<span class="${"relative invisible"}">\xDAnete hoy</span></button></form></div></div></section>



<section class="${"p-2 md:p-12"}"><h3 class="${"font-extrabold lg:text-2xl md:text-xl sm:text-lg text-md dark:text-white text-gray-800 leading-tight text-left"}">Tu Instructor \u{1F44B}
	</h3>
	<div class="${"font-body text-left pt-8 grid grid-cols-2"}"><div><img${add_attribute("src", me, 0)} alt="${"Matias Hern\xE1ndez"}" class="${"rounded-sm h-64"}"></div>
		<div class="${"prose"}"><p class="${"font-body text-left dark:text-white text-ebony-clay-800"}">Hola, soy <strong>Mat\xEDas Hern\xE1ndez</strong>, \xA1ser\xE9 tu instructor
				y tu gu\xEDa de confianza en este newsletter! Desde hace mucho
				tiempo (antes de que jQuery existiese) que escribo software y
				durante todos esos a\xF1os el desarrollo web ha sido mi pasi\xF3n.
				Desde hace 7 a\xF1os que trabajo con React realizando m\xFAltiples
				proyectos de alta escala. Actualmente me desempe\xF1o como React
				Senior Staff Engineer en Clevertech.
			</p>
			<p class="${"font-body text-left dark:text-white text-ebony-clay-800 pt-4"}">Encuentrame en <a href="${"https://twitter.com/matiasfha"}" class="${"underlined"}">Twitter!</a> y conversemos
			</p></div></div></section>
<h2 class="${"lg:text-3xl md:text-2xl sm:text-xl text-lg font-extrabold dark:text-white text-gray-800 leading-tight text-left py-12"}">Listado de Cursos
</h2>

<div class="${"grid grid-cols-1 gap-2"}">${validate_component(CourseCard, "CourseCard").$$render(
    $$result,
    {
      logo: data.courses[1].image.asset.url,
      title: data.courses[1].course,
      description: blocksToHtml({
        blocks: data.courses[1].descriptionRaw,
        projectId: "cyypawp1",
        dataset: "production"
      }),
      formId: "4616584",
      codeId: "g5i0m4"
    },
    {},
    {}
  )}
	${validate_component(CourseCard, "CourseCard").$$render(
    $$result,
    {
      logo: data.courses[0].image.asset.url,
      title: data.courses[0].course,
      description: blocksToHtml({
        blocks: data.courses[0].descriptionRaw,
        projectId: "cyypawp1",
        dataset: "production"
      }),
      formId: "5395967",
      codeId: "u2d6y6"
    },
    {},
    {}
  )}</div>`;
});
export {
  Page as default
};
