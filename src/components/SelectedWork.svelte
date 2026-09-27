<script>
	const projects = [
		{
			title: 'Public AI assistant',
			description:
				'Chatbot for non-logged-in visitors at Deel; qualified leads route to sales automatically.',
			tags: ['AI']
		},
		{
			title: 'Compliance assessments',
			description:
				'Assessment platform across 15+ countries with the AI team - task orchestration, reminders, org-level controls.',
			tags: ['10K+ users', '15+ countries']
		},
		{
			title: 'Database sync infrastructure',
			description:
				'Keeps AI and core databases consistent for misclassification assessments; feature-flagged migrations retired the legacy batch system.',
			tags: ['Migrations', 'Backend']
		}
	];
</script>

<div class="w-full mt-28">
	<h2 class="text-text-primary italic">Things I've shipped recently</h2>

	<ul class="mt-4">
		{#each projects as project}
			<li class="row border-t border-hairline last:border-b group">
				<div class="py-5 md:flex md:items-baseline md:gap-x-6">
					<p class="text-text-primary work-title md:w-[13rem] flex-shrink-0">{project.title}</p>
					<div class="mt-2 md:mt-0">
						<p class="text-text-secondary work-copy">{project.description}</p>
						<div class="mt-2 flex flex-wrap gap-x-2 gap-y-1">
							{#each project.tags as tag}
								<span class="tag">{tag}</span>
							{/each}
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.row {
		transition: background-color 0.2s ease-out;
	}

	.row:hover {
		background-color: var(--row-tint);
	}

	.work-title {
		font-size: large;
		font-weight: 600;
	}

	.work-copy {
		line-height: 1.7rem;
	}

	.tag {
		font-size: 0.78rem;
		line-height: 1.1rem;
		padding: 0.1rem 0.5rem;
		border: 1px solid var(--hairline);
		border-radius: 999px;
		color: var(--text-secondary);
	}
</style>
