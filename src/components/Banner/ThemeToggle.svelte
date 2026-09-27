<script>
	import { onMount } from 'svelte';

	const themes = ['dark', 'light'];

	/** Whether the toggle is ready — false during SSR so markup matches initial render. */
	let ready = false;

	let theme = 'dark';

	onMount(() => {
		theme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
		ready = true;
	});

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = theme;
		try {
			localStorage.setItem('theme', theme);
		} catch (e) {
			/* private mode etc. — theme still applies for this visit */
		}
	}
</script>

{#if ready}
	<button
		on:click={toggleTheme}
		aria-label="Switch to {theme === 'dark' ? 'light' : 'dark'} theme"
		title="Switch theme"
	>
		{#if theme === 'dark'}
			<!-- sun -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			>
				<circle cx="12" cy="12" r="4" />
				<path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
			</svg>
		{:else}
			<!-- moon -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
			</svg>
		{/if}
	</button>
{/if}

<style>
	button {
		width: 2.2rem;
		height: 2.2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		background: none;
		border: none;
		color: var(--text-secondary);
		cursor: pointer;
		transition: color 0.2s ease-out;
	}

	button:hover {
		color: var(--text-primary);
	}

	svg {
		width: 1.4rem;
		height: 1.4rem;
	}
</style>
