<script>
	import AboutMe from '../components/AboutMe.svelte';
	import Banner from '../components/Banner/index.svelte';
	import SelectedWork from '../components/SelectedWork.svelte';
	import Skills from '../components/Skills.svelte';

	import Footer from '../components/Footer/index.svelte';
	import Experiences from '../components/Experiences/index.svelte';
</script>

<svelte:head>
	<title>Prashant Baghel — Senior Software Engineer</title>
	<meta
		name="description"
		content="Senior Software Engineer at Deel. Full-stack developer building high-throughput notification, referral, and compliance platforms."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Prashant Baghel — Senior Software Engineer" />
	<meta
		property="og:description"
		content="Senior Software Engineer at Deel. Full-stack developer building high-throughput notification, referral, and compliance platforms."
	/>
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Prashant Baghel — Senior Software Engineer" />
	<meta
		name="twitter:description"
		content="Senior Software Engineer at Deel. Full-stack developer building high-throughput notification, referral, and compliance platforms."
	/>
</svelte:head>

<div
	class="w-screen min-h-screen overflow-y-auto flex flex-col items-center bg-bg-primary justify-start"
>
	<div class="w-full max-w-[50rem] px-4 sm:px-0">
		<Banner />
		<AboutMe />
		<Skills />
		<SelectedWork />
		<Experiences />
	</div>
	<Footer />
</div>
