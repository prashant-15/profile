<script>
	import SvelteIcon from '$lib/assets/svelte-icon.webp';

	let copied = false;
	/** @type {ReturnType<typeof setTimeout> | undefined} */
	let copyTimer;

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText('prashantbaghel215@gmail.com');
			copied = true;
			clearTimeout(copyTimer);
			copyTimer = setTimeout(() => (copied = false), 1600);
		} catch (e) {
			// Clipboard unavailable — fall back to opening the mail client.
			window.location.href = 'mailto:prashantbaghel215@gmail.com';
		}
	}
</script>

<div class="w-full footer-surface border-hairline flex flex-col items-center gap-y-20 py-12 border-t">
	<div class="flex flex-col items-center px-4 text-center">
		<h3 class="footer-text-primary break-words">Hit me up for a chat or work-related stuff at</h3>
		<div class="mt-3 flex flex-row items-center gap-x-3 flex-wrap justify-center">
			<button on:click={copyEmail} class="email-button" aria-live="polite">
				<b>{copied ? 'copied!' : 'prashantbaghel215@gmail.com'}</b>
			</button>
			<a
				href="mailto:prashantbaghel215@gmail.com"
				class="mail-icon"
				aria-label="Open in your mail app"
				title="Open in your mail app"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<rect x="2" y="4" width="20" height="16" rx="2" />
					<path d="m22 7-10 6L2 7" />
				</svg>
			</a>
		</div>
	</div>
	<p class="footer-text-secondary px-4 text-center">
		This site is made with
		<a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">
			<img class="ml-1 w-[1.4rem] h-[1.4rem] inline" src={SvelteIcon} alt="svelte icon" />
		</a>
	</p>
</div>

<style>
	.footer-surface {
		background-color: var(--footer-bg);
	}

	.footer-text-primary {
		color: var(--footer-text-primary);
	}

	.footer-text-secondary {
		color: var(--footer-text-secondary);
	}

	.email-button {
		background: none;
		border: 1px solid var(--hairline);
		border-radius: 6px;
		padding: 0.45rem 0.9rem;
		font-size: 1rem;
		color: var(--footer-text-primary);
		cursor: pointer;
		transition: border-color 0.2s ease-out;
	}

	.email-button:hover {
		border-color: var(--footer-text-secondary);
	}

	.mail-icon {
		color: var(--footer-text-secondary);
		transition: color 0.2s ease-out;
		display: inline-flex;
	}

	.mail-icon:hover {
		color: var(--footer-text-primary);
	}

	.mail-icon svg {
		width: 1.25rem;
		height: 1.25rem;
	}

	a {
		text-decoration: underline;
		text-underline-offset: 3px;
	}
</style>
