<script>
  const tech = ["React", "Javascript", "Typescript", "NodeJS", "MongoDB", "ElasticSearch", "k8s"]
</script>

<div class="w-[50rem] mt-28">
  <h2 class="text-text-primary">Languages/Technologies I've recently worked on...</h2>
  <div class="mx-2 mt-4 grid grid-cols-2">
    {#each tech as techName}
      <p class="text-text-secondary tech mt-3">• {techName}</p>
    {/each}
    </div>
</div>

<style>
  .tech {
    font-size: 1.2rem;
    line-height: 1.7rem;
  }
</style>