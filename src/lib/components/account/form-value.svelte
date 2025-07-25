<script lang="ts">
  let { label = undefined, class: className = undefined, ...inputProps } = $props();
</script>

{#if label}
  <div class="grid items-center sm:grid-cols-[1fr_4fr]">
    <span class="text-foreground mb-1.75 block text-sm font-medium sm:mb-0">
      {label}
      {#if inputProps.required}
        <span class="text-ko ml-1">*</span>
      {/if}
    </span>
    <span class="text-darker w-full px-3.5 py-2.5">{inputProps.value}</span>
  </div>
{:else}
  <span class="text-darker w-full px-3.5 py-2.5">{inputProps.value}</span>
{/if}
