<script>
	import LeftArrow from '../../lib/assets/left-arrow.png';
	import RightArrow from '../../lib/assets/right-arrow.png';

	const experiences = [
		{
			title: 'Product Engineer II',
			period: 'Sep 2021 - Present',
			description: `• Developed <b>server-driven architecture</b> for the platform homepage with an intuitive editor, enabling
customizable and dynamic user facing experiences.</br> • Developed pivotal core features including quiz and reporting with varied charts.<br /> • Working towards re-development of base
			components, such as IconButton and Accordion, to mitigate external library dependencies and
			optimizing bundle size.<br /> • Enhanced performance and UX by replacing HTML
			image with a custom optimized image component, increasing lighthouse score by 20% on certain pages.<br /> • Identified and achieved >50% reduction in REST query response
			size through data reorganization and strategic use of GraphQL.<br /> • Developed platform-wide
			features, including <b>in-house drag-n-drop</b> functionality and Image selector seamlessly integrated
			with Unsplash.<br /> • Integrated ability to connect <b>Slack</b> at client level for notifications delivery with customized templates for
			various types.`
		},
		{
			title: 'Product Engineer I',
			period: 'Sep 2020 - Sep 2021',
			description: `• Spearheaded initiatives to improve UI and performance in a React-based Learning Management
			System, addressing critical issues such as cache TTL.<br/>
			• Identified scope and implemented solutions for diverse components, exemplified by the development
			of a <b>MediaPlayer</b>. It handles various media formats, as well as UIs with robust fallbacks.<br/>
			• Collaborated as key frontend team member with cross-functional teams successfully integrating various
			new features into an existing module within client-bound timeframes.<br/>
			• Played a pivotal role in the development of a <b>new LMS module</b>, building from ground up and then
			actively engaged in optimizing its UX and performance.`
		}
	];

	let experienceIndex = 0;
</script>

<div class="w-full mt-32 mb-32">
	<h2 class="text-text-primary mb-2 italic">Experiences</h2>
	<div class="flex flex-row items-center gap-x-3">
		<button
			class="flex-shrink-0"
			class:opacity-0={experienceIndex === 0}
			on:click={() => {
				experienceIndex -= 1;
			}}
		>
			<img
				src={LeftArrow}
				alt="left-arrow"
				class="w-[1.2rem] h-[1.8rem] opacity-50 hover:opacity-100 h-[1.7rem] cursor-pointer invert-[.75]"
			/>
		</button>
		<div>
			<p class="text-text-primary">
				<b>{experiences[experienceIndex].title}</b> ({experiences[experienceIndex].period})
			</p>
			<p class="text-text-secondary description ml-3 mt-2">
				{@html experiences[experienceIndex].description}
			</p>
		</div>
		<button
			class="flex-shrink-0"
			class:opacity-0={experienceIndex === experiences.length - 1}
			on:click={() => {
				experienceIndex += 1;
			}}
		>
			<img
				src={RightArrow}
				alt="right-arrow"
				class="w-[1.2rem] h-[1.8rem] opacity-50 hover:opacity-100 cursor-pointer invert-[.75]"
			/>
		</button>
	</div>
</div>

<style>
	.description {
		line-height: 1.9rem;
		font-size: large;
	}
</style>
