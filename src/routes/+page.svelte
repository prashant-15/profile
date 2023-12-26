<script>
	import AboutMe from '../components/AboutMe.svelte';
	import Banner from '../components/Banner/index.svelte';
	import Skills from '../components/Skills.svelte';

	import SvelteIcon from '$lib/assets/svelte-icon.webp';
	import Experiences from '../components/Experiences/index.svelte';
</script>

<div
	class="w-screen h-screen overflow-y-auto flex flex-col items-center bg-bg-primary justify-start pb-20"
>
	<div class="max-w-[50rem]">
		<Banner />
		<AboutMe />
		<Skills />
		<Experiences />
	</div>
	<p class="mt-32 text-text-secondary">
		This blog is made with
		<a href="https://kit.svelte.dev/" target="_blank">
			<img class="ml-1 w-[1.4rem] h-[1.4rem] inline" src={SvelteIcon} alt="linkedin icon" />
		</a>
	</p>
</div>
