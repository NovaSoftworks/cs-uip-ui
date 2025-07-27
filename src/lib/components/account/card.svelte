<script lang="ts">
  export let icon;
</script>

<div class="bg-lighter rounded-sm p-3.5 shadow-sm">
  <div class="text-dark flex items-center gap-1.75">
    {#if icon}
      <svelte:component this={icon} class="size-6 fill-current" />
    {/if}
    <h2 class="text-lg font-semibold">
      <slot name="title" />
    </h2>
  </div>

  <div class="text-medium text-base"><slot /></div>
  <div class="flex justify-end"><slot name="cta" /></div>
</div>
