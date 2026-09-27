<script>
	import GithubIcon from '$lib/assets/github-icon.png';
	import LinkedInIcon from '$lib/assets/linkedin-2.png';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<div class="mt-12 ml-2 flex flex-row space-x-[1rem] items-center">
	<a target="_blank" href="https://github.com/prashant-15" rel="noreferrer">
		<img class="w-[1.7rem] h-[1.7rem] icon-invert" src={GithubIcon} alt="github icon" />
	</a>
	<a target="_blank" href="https://www.linkedin.com/in/prashantbaghel215/" rel="noreferrer">
		<img class="w-[2rem] h-[2rem] icon-invert" src={LinkedInIcon} alt="linkedin icon" />
	</a>
	<ThemeToggle />
</div>
