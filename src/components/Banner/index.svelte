<script>
	import { onMount } from 'svelte';
	import Links from './Links.svelte';

	let stackSide = 'full-stack';

	onMount(() => {
		const timer = setInterval(() => {
			stackSide = stackSide === 'frontend' ? 'backend' : 'frontend';
		}, 1000);

		return () => clearInterval(timer);
	});
</script>

<div class="w-full mt-32">
	<h1 class="text-text-primary">Hey, I'm Prashant Baghel!</h1>
	<p class="text-text-primary description">I'm a <b>{stackSide}</b> developer</p>
	<Links />
</div>

<style>
	.description {
		font-size: 1.5rem;
		font-weight: 400;
	}
</style>
