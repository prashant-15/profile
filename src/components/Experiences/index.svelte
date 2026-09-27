<script>
	const experiences = [
		{
			title: 'Senior Software Engineer',
			company: 'Deel',
			period: 'Sep 2025 - Present',
			bullets: [
				`Led the architecture and production rollouts of a <b>Smart Notifications platform</b>, orchestrating high-throughput recommendation pipelines serving <b>8000+ active organizations</b> daily.`,
				`Architected an end-to-end <b>Referral engine automation</b> integrating PartnerStack and Salesforce; automated lifecycle management, payouts, fraud prevention, and operational monitoring to eliminate manual overhead.`,
				`Improved platform reliability and scalability through schema evolution and database optimizations, reducing critical query latency by <b>over 90%</b> and eliminating high-cost query patterns in legacy systems.`,
				`Built internal <b>AI tooling</b> and automated experiment dashboards tracking test phases, revenue impact, and real-time statuses; scaled across multiple teams to cut reporting overhead.`,
				`Established observability standards for asynchronous workflows, improving debugging and operational visibility for background systems across multiple teams.`
			]
		},
		{
			title: 'Software Engineer',
			company: 'Deel',
			period: 'May 2024 - Aug 2025',
			bullets: [
				`Developed an enterprise <b>Compliance Assessment platform</b> across 15+ countries, enabling large-scale (10K+ users) assessments in collaboration with the AI team, with task orchestration, reminder systems, and organization-level controls.`,
				`Built and embedded a <b>public-facing AI chatbot</b> to engage non-logged-in visitors, with automated logic routing hot leads straight to sales and improving conversion rates.`,
				`Developed payroll calculation tools such as <b>HRIS and take-home calculators</b> that reduced internal message traffic and significantly improved sales team response times to client queries.`,
				`Created referral notification workflows over Slack and email, directly improving user retention, communication, and signup rates.`
			]
		},
		{
			title: 'Product Engineer II',
			company: 'Lyearn',
			period: 'Sep 2021 - May 2024',
			bullets: [
				`Developed <b>server-driven architecture</b> for the platform homepage with an intuitive editor, enabling customizable and dynamic user-facing experiences.`,
				`Developed pivotal core features including quiz and reporting with varied charts.`,
				`Enhanced performance and UX by replacing HTML image with a custom optimized image component, increasing Lighthouse score by 20% on certain pages.`,
				`Achieved <b>>50% reduction</b> in REST query response size through data reorganization and strategic use of GraphQL.`,
				`Developed platform-wide features, including <b>in-house drag-n-drop</b> functionality and Image selector seamlessly integrated with Unsplash.`,
				`Integrated ability to connect <b>Slack</b> at client level for notification delivery with customized templates for various types.`
			]
		},
		{
			title: 'Product Engineer I',
			company: 'Lyearn',
			period: 'Sep 2020 - Sep 2021',
			bullets: [
				`Spearheaded initiatives to improve UI and performance in a React-based Learning Management System, addressing critical issues such as cache TTL.`,
				`Identified scope and implemented solutions for diverse components, exemplified by the development of a <b>MediaPlayer</b>. It handles various media formats, as well as UIs with robust fallbacks.`,
				`Collaborated as key frontend team member with cross-functional teams, successfully integrating various new features into an existing module within client-bound timeframes.`,
				`Played a pivotal role in the development of a <b>new LMS module</b>, building from ground up and then actively engaged in optimizing its UX and performance.`
			]
		}
	];

	// Only the current role starts expanded; older roles expand on click.
	let expandedIndex = 0;

	/** @param {number} index */
	function toggle(index) {
		expandedIndex = expandedIndex === index ? -1 : index;
	}
</script>

<div class="w-full mt-32 mb-32">
	<h2 class="text-text-primary mb-6 italic">Experiences</h2>

	<ol class="timeline">
		{#each experiences as experience, index}
			<li class="relative pl-8 pb-8 last:pb-0">
				<!-- rail dot -->
				<span
					class="absolute left-0 top-[0.45rem] h-[0.55rem] w-[0.55rem] rounded-full dot"
					class:dot-active={index === 0}
					aria-hidden="true"
				/>
				<!-- rail line -->
				{#if index < experiences.length - 1}
					<span class="absolute left-[0.26rem] top-[1.3rem] bottom-0 w-px rail" aria-hidden="true" />
				{/if}

				<button
					class="w-full text-left"
					aria-expanded={expandedIndex === index}
					on:click={() => toggle(index)}
				>
					<span class="text-text-primary role-line">
						<b>{experience.title}</b> · {experience.company}
					</span>
					<span class="text-text-secondary period">{experience.period}</span>
					<span class="chevron" class:chevron-open={expandedIndex === index} aria-hidden="true">
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="m6 9 6 6 6-6" />
						</svg>
					</span>
				</button>

				{#if expandedIndex === index}
					<ul class="text-text-secondary description mt-3 ml-1 list-disc space-y-2 pr-2">
						{#each experience.bullets as bullet}
							<li>{@html bullet}</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ol>
</div>

<style>
	.timeline {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.dot {
		background-color: var(--hairline);
		transform: translate(0.05rem, 0);
	}

	.dot-active {
		background-color: var(--text-secondary);
	}

	.rail {
		background-color: var(--hairline);
	}

	button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		display: block;
		width: 100%;
	}

	.role-line {
		font-size: large;
	}

	.period {
		display: block;
		margin-top: 0.15rem;
		font-size: 0.95rem;
	}

	.chevron {
		display: inline-flex;
		float: right;
		width: 1.1rem;
		height: 1.1rem;
		margin-top: 0.35rem;
		color: var(--text-secondary);
		transition: transform 0.2s ease-out;
	}

	.chevron-open {
		transform: rotate(180deg);
	}

	.description {
		line-height: 1.9rem;
		font-size: large;
	}
</style>
