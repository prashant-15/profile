<script>
  import Links from "./Links.svelte";

  let stackSide = "frontend";

  setInterval(() => {
    stackSide = stackSide === "frontend" ? "backend" : "frontend";
  }, 1000);
</script>

<div class="w-full flex justify-center mt-32">
  <div class="w-[50rem]">
    <h1 class="text-text-primary">Hey, I'm Prashant Baghel!</h1>
    <p class="text-text-primary description">I'm a {stackSide} developer</p>
    <Links />
  </div>
</div>

<style>
  .description {
    font-size: 1.5rem;
    font-weight: 400;
  }
</style>