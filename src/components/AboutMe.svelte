<script>
	import PersonWithLaptop from '$lib/assets/person-with-laptop.png';
</script>

<div class="w-full mt-28 flex flex-col md:flex-row gap-x-10 gap-y-6 items-center md:items-start">
	<img
		class="w-[10rem] h-[9rem] md:w-[14rem] md:h-[13rem] flex-shrink-0"
		src={PersonWithLaptop}
		alt="person working on a laptop"
	/>
	<div>
		<h2 class="text-text-primary italic">A [very] little about me...</h2>
		<p class="mt-2 text-text-secondary description">
			I'm a Senior Software Engineer currently working at <b>Deel</b>, building systems that serve
			<b>10,000+ organizations daily</b>. I love doing both frontend and backend. I did my B.Tech from
			<b>IIT (BHU) Varanasi</b> in 2020. Recently, I've been looking into contributing to open source
			projects in my free time. When I'm not working, I like to plan to travel.
		</p>
	</div>
</div>

<style>
	.description {
		line-height: 1.8rem;
		font-size: large;
	}
</style>
