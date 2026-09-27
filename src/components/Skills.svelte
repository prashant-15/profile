<script>
	import ReactIcon from '$lib/assets/react.png';
	import TypescriptIcon from '$lib/assets/typescript.png';
	import JavascriptIcon from '$lib/assets/javascript.png';
	import NodeJsIcon from '$lib/assets/node-js.png';
	import MongoDbIcon from '$lib/assets/mongo-db.png';
	import HtmlIcon from '$lib/assets/html.png';
	import CssIcon from '$lib/assets/css.png';
	import RedisIcon from '$lib/assets/redis.png';
	import GraphqlIcon from '$lib/assets/graphql.png';
	import CppIcon from '$lib/assets/cpp.png';
	import NextJsIcon from '$lib/assets/next-js.png';
	import SvelteIcon from '$lib/assets/svelte-icon.webp';

	const skills = [
		{ name: 'TypeScript', Icon: TypescriptIcon },
		{ name: 'JavaScript', Icon: JavascriptIcon },
		{ name: 'React', Icon: ReactIcon },
		{ name: 'Svelte', Icon: SvelteIcon },
		{ name: 'Node.js', Icon: NodeJsIcon },
		{ name: 'Next.js', Icon: NextJsIcon },
		{ name: 'GraphQL', Icon: GraphqlIcon },
		{ name: 'MongoDB', Icon: MongoDbIcon },
		{ name: 'Redis', Icon: RedisIcon },
		{ name: 'HTML/CSS', Icon: CssIcon },
		{ name: 'C++', Icon: CppIcon }
	];

	// HTML has no distinct icon asset; CSS icon stands in for the pair.
</script>

<div class="w-full mt-28">
	<h2 class="text-text-primary italic">What I work with</h2>

	<div class="mt-5 flex flex-wrap gap-x-2 gap-y-3">
		{#each skills as { Icon, name }}
			<span class="chip">
				<img class="chip-icon" src={Icon} alt="" aria-hidden="true" />
				{name}
			</span>
		{/each}
	</div>

	<p class="text-text-secondary mt-5 text-sm">
		…plus Kafka, feature flags, observability tooling, and whatever the problem demands.
	</p>
</div>

<style>
	.chip {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.35rem 0.8rem;
		border: 1px solid var(--hairline);
		border-radius: 999px;
		font-size: 0.95rem;
		color: var(--text-secondary);
		transition:
			color 0.2s ease-out,
			border-color 0.2s ease-out;
	}

	.chip:hover {
		color: var(--text-primary);
		border-color: var(--text-secondary);
	}

	.chip-icon {
		height: 1.1rem;
		width: auto;
	}

	.text-sm {
		font-size: 0.9rem;
	}
</style>
