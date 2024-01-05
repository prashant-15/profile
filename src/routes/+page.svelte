<script>
	import AboutMe from '../components/AboutMe.svelte';
	import Banner from '../components/Banner/index.svelte';
	import Skills from '../components/Skills.svelte';

	import Footer from '../components/Footer/index.svelte';
	import Experiences from '../components/Experiences/index.svelte';
</script>

<div
	class="w-screen h-screen overflow-y-auto flex flex-col items-center bg-bg-primary justify-start"
>
	<div class="max-w-[50rem]">
		<Banner />
		<AboutMe />
		<Skills />
		<Experiences />
	</div>
	<Footer />
</div>
