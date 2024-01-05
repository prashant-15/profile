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

	const languages = [
		{ name: 'Typescript', Icon: TypescriptIcon },
		{ name: 'Javascript', Icon: JavascriptIcon },
		{ name: 'GraphQL', Icon: GraphqlIcon },
		{ name: 'HTML', Icon: HtmlIcon },
		{ name: 'CSS', Icon: CssIcon },
		{ name: 'C++', Icon: CppIcon }
	];

	const technologies = [
		{ name: 'React', Icon: ReactIcon },
		{ name: 'NodeJS', Icon: NodeJsIcon },
		{ name: 'NextJS', Icon: NextJsIcon },
		{ name: 'MongoDB', Icon: MongoDbIcon },
		{ name: 'Redis', Icon: RedisIcon }
	];
</script>

<div class="w-[50rem] mt-28">
	<h2 class="text-text-primary italic">Languages/Technologies I've recently worked on...</h2>
	<div class="mx-2 mt-4 flex flex-row">
		<div class="w-1/2">
			{#each languages as language}
				<div class="flex flex-row gap-x-3 items-center mb-3">
					<img class="h-6" src={language.Icon} alt={language.name + '-icon'} />
					<p class="text-text-secondary tech">{language.name}</p>
				</div>
			{/each}
		</div>
		<div class="w-1/2">
			{#each technologies as { Icon, name }}
				<div class="flex flex-row gap-x-3 items-center mb-3">
					<img class="h-6" src={Icon} alt={name + '-icon'} />
					<p class="text-text-secondary tech">{name}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.tech {
		font-size: 1.2rem;
		line-height: 1.7rem;
	}
</style>
