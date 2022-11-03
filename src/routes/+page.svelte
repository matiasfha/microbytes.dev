<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
	import Seo from "$components/Seo.svelte";
	import CourseCard from "$components/CourseCard.svelte";
	import microbytes from "$images/microbytes.png";
	import me from "$images/me.png";
	import blocksToHtml from "@sanity/block-content-to-html";
  
	
</script>

<Seo
	title="MicroBytes newsletter por Matías Hernández"
	keywords={[
		"newsletter",
		"microbytes",
		"react",
		"javascript",
		"es6",
		"cursos",
		"aprender",
	]}
/>

<section class="mt-24">
	<img
		alt="illustration for React Desde Cero"
		src={microbytes}
		decoding="async"
		class="object-contain mx-auto"
	/>
	<div
		class="p-2 md:p-12 relative flex flex-col items-center justify-center dark:text-white  text-ebony-clay-800 overflow-hidden rounded-lg shadow-sm focus:outline-none transition hover:ring-2 ring-yellow-50 ring-offset-2"
	>
		<h1
			class="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold dark:text-white text-gray-800 leading-tight text-center"
		>
			¿Aún luchas con Javascript y el desarrollo web?
		</h1>

		<div class="font-body text-left pt-8">
			<p>
				Únete a Micro Bytes un newsletter micro cursos.
				Recibirás una colección de contenidos para mejorar tu
				conocimiento en desarrollo web y darle un giro a tu carrera,
				directamente en tu correo.
			</p>
		</div>

		<div class="font-body text-left pt-8">
			<p>
				Además, puedes simplemente unirte al newsletter general y mantenerte al día con todo el contenido que publico (NO SPAM lo prometo 🙋): Artículos, cursos, videos, podcast, etc!
			</p>
			<form class="flex flex-row justify-between mx-auto mt-4 p-8 prose prose-lg items-center" action="https://static.mailerlite.com/webforms/submit/c4r8t8" data-code="c4r8t8" method="post" target="_blank">
				<input type="hidden" name="ml-submit" value="1">
				<input type="hidden" name="anticsrf" value="true">
				<input type="text" name="fields[email]" placeholder="Tu email" class="px-4 font-medium rounded-md show-md w-80" autocomplete="email"/>
				<button
				type="submit"
					class={`h-8 w-52 
        bg-ebony-clay-600 
        dark:bg-gray-200 
        border-ebony-clay-600 
        dark:border-gray-200 
        text-gray-300 dark:text-ebony-clay-600
        relative inline-flex items-center justify-center py-3 overflow-hidden font-medium
        transition duration-300 ease-out border-2 
        rounded-full shadow-md group`}
				>
					<span
						class={`absolute inset-0 flex items-center justify-center w-full h-full
          duration-300 -translate-x-full
           group-hover:translate-x-0 ease
           dark:text-white text-ebony-clay-600
          dark:bg-ebony-clay-600 bg-gray-200`}
					>
						<svg
							class="w-8 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/></svg
						>
					</span>
					<span
						class={`absolute flex items-center justify-center w-full h-full
         text-gray-100 dark:text-ebony-clay-600  
         transition-all duration-300 transform group-hover:translate-x-full ease`}>Únete hoy</span
					>
					<span class="relative invisible">Únete hoy</span>
				</button>
			</form>
		</div>
	</div>
</section>



<section class=" p-2 md:p-12">
	<h3
		class="font-extrabold lg:text-2xl md:text-xl sm:text-lg text-md dark:text-white text-gray-800 leading-tight text-left"
	>
		Tu Instructor 👋
	</h3>
	<div class="font-body text-left pt-8 grid grid-cols-2">
		<div>
			<img src={me} alt="Matias Hernández" class="rounded-sm h-64" />
		</div>
		<div class="prose">
			<p class="font-body text-left dark:text-white  text-ebony-clay-800">
				Hola, soy <strong>Matías Hernández</strong>, ¡seré tu instructor
				y tu guía de confianza en este newsletter! Desde hace mucho
				tiempo (antes de que jQuery existiese) que escribo software y
				durante todos esos años el desarrollo web ha sido mi pasión.
				Desde hace 7 años que trabajo con React realizando múltiples
				proyectos de alta escala. Actualmente me desempeño como React
				Senior Staff Engineer en Clevertech.
			</p>
			<p
				class="font-body text-left dark:text-white  text-ebony-clay-800 pt-4"
			>
				Encuentrame en <a
					href="https://twitter.com/matiasfha"
					class="underlined">Twitter!</a
				> y conversemos
			</p>
		</div>
	</div>
</section>
<h2
	class="lg:text-3xl md:text-2xl sm:text-xl text-lg font-extrabold dark:text-white text-gray-800 leading-tight text-left py-12"
>
	Listado de Cursos
</h2>

<div class="grid grid-cols-1 gap-2">
	<CourseCard
		logo={data.courses[1].image.asset.url}
		title={data.courses[1].course}
		description={blocksToHtml({
			blocks: data.courses[1].descriptionRaw,
			projectId: "cyypawp1",
			dataset: "production",
		})}
		formId={"4616584"}
		codeId={"g5i0m4"}
	/>
	<CourseCard
		logo={data.courses[0].image.asset.url}
		title={data.courses[0].course}
		description={blocksToHtml({
			blocks: data.courses[0].descriptionRaw,
			projectId: "cyypawp1",
			dataset: "production",
		})}
		formId={"5395967"}
		codeId={"u2d6y6"}
	/>
</div>

